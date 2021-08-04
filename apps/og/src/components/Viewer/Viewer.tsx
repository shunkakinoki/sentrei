import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

import { useConfig } from "@sentrei/og/hooks/useConfig";
import { useDebouncedValue } from "@sentrei/og/hooks/useDebouncedValue";
import { useLayoutConfig } from "@sentrei/og/hooks/useLayoutConfig";

export const Viewer = () => {
  const [config] = useConfig();
  const [layoutConfig] = useLayoutConfig();
  const [isLoaded, setIsLoaded] = useState(true);

  const query = useMemo(() => {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries({ ...config, ...layoutConfig })) {
      if (value != null) {
        searchParams.set(key, value);
      }
    }

    return searchParams.toString();
  }, [config, layoutConfig]);

  const imageURL = useMemo(() => {
    return `/api/image?${query}`;
  }, [query]);

  const debouncedImageURL = useDebouncedValue(imageURL, 200);

  useEffect(() => {
    return setIsLoaded(false);
  }, [debouncedImageURL]);

  return (
    <div className="col-span-2 space-y-4 w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={clsx(!isLoaded && "blur-sm")}
        src={debouncedImageURL}
        alt={`OG for the ${config.layoutName} layout`}
        onLoad={() => {
          return setIsLoaded(true);
        }}
      />
    </div>
  );
};
