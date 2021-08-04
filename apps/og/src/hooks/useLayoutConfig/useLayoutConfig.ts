import { useMemo } from "react";
import { atom, useRecoilState } from "recoil";

import { useConfig } from "@sentrei/og/hooks/useConfig";
import { layouts, getDefaultLayout } from "@sentrei/og/layouts";
import { localStorageEffect } from "@sentrei/og/lib/effect";
import type { ILayoutConfig } from "@sentrei/og/types";

const allLayoutConfigState = atom({
  key: "allLayoutConfig",
  default: {},
  effects_UNSTABLE: [localStorageEffect("allLayoutConfig")],
});

export const useLayoutConfig = (): [
  ILayoutConfig,
  (layoutConfig: ILayoutConfig) => void,
] => {
  const [allLayoutConfig, setAllLayoutConfig] =
    useRecoilState(allLayoutConfigState);

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

  const setLayoutConfig = (config: ILayoutConfig) => {
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
