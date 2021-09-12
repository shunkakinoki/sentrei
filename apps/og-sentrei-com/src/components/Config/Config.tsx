import { Select } from "@sentrei/atoms";
import type { FC } from "react";
import { useMemo } from "react";

import { Layout } from "@sentrei/og-sentrei-com/components/Config/Layout";
import { Title } from "@sentrei/og-sentrei-com/components/Config/Title";
import { useConfig } from "@sentrei/og-sentrei-com/hooks/useConfig";
import { layouts } from "@sentrei/og-sentrei-com/layouts";
import type { FileType } from "@sentrei/og-sentrei-com/types";

export const Config: FC = () => {
  const [{ fileType, layoutName }, setConfig] = useConfig();

  const layout = useMemo(() => {
    return layouts.find(l => {
      return l.name === layoutName;
    });
  }, [layoutName]);

  return (
    <div className="mt-3 space-y-4">
      <div className="flex">
        <Title>File Type</Title>
        <Select
          value={fileType}
          options={[{ value: "png" }, { value: "jpeg" }]}
          onChange={(fileType): void => {
            return setConfig(c => {
              return { ...c, fileType: fileType as FileType };
            });
          }}
        />
      </div>
      <div className="flex">
        <Title>Layout</Title>
        <Select
          value={layoutName}
          options={layouts.map(l => {
            return { value: l.name };
          })}
          onChange={(layoutName): void => {
            return setConfig(c => {
              return { ...c, layoutName };
            });
          }}
        />
      </div>
      <hr />
      {layout == null ? (
        <p>Layout {layoutName} does not exist</p>
      ) : (
        <Layout key={layout.name} layout={layout} />
      )}
    </div>
  );
};
