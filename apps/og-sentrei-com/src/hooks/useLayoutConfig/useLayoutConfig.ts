import { useMemo } from "react";
import { atom, useRecoilState } from "recoil";

import { useConfig } from "@sentrei/og-sentrei-com/hooks/useConfig";
import { layouts, getDefaultLayout } from "@sentrei/og-sentrei-com/layouts";
import { localStorageEffect } from "@sentrei/og-sentrei-com/lib/effect";
import type { ILayoutConfig } from "@sentrei/og-sentrei-com/types";

const allLayoutConfigState = atom({
  key: "allLayoutConfig",
  default: {},
  effects_UNSTABLE: [localStorageEffect("allLayoutConfig")],
});

export const useLayoutConfig = (): [
  ILayoutConfig,
  // eslint-disable-next-line no-unused-vars
  (layoutConfig: ILayoutConfig) => void,
] => {
  // prettier-ignore
  const [allLayoutConfig, setAllLayoutConfig] = useRecoilState(
    allLayoutConfigState,
  );

  const [config] = useConfig();
  const { layoutName } = config;

  const layout = useMemo(() => {
    return layouts.find(l => {
      return l.name === layoutName;
    });
  }, [layoutName]);

  const defaultConfig = useMemo(() => {
    return layout != null ? getDefaultLayout(layout) : {};
  }, [layout]);

  const layoutConfig = allLayoutConfig[layoutName] ?? {};

  const setLayoutConfig = (config: ILayoutConfig): void => {
    setAllLayoutConfig(all => {
      return {
        ...all,
        [layoutName]: {
          ...layoutConfig,
          ...config,
        },
      };
    });
  };

  return [
    {
      ...defaultConfig,
      ...layoutConfig,
    },
    setLayoutConfig,
  ];
};
