import clsx from "clsx";
import type { ImgHTMLAttributes, FC, ElementType, ReactElement } from "react";

export type Dict<T = any> = Record<string, T>;

export const omit = <T extends Dict, K extends keyof T>(
  object: T,
  keys: K[],
) => {
  const result: Dict = {};

  Object.keys(object).forEach(key => {
    if (keys.includes(key as K)) return;
    result[key] = object[key];
  });

  return result as Omit<T, K>;
};

import type { UseImageProps } from "./useImage";
import { UseImage } from "./useImage";

export interface NativeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: string | number;
  height?: string | number;
}

export const NativeImage: FC<NativeImageProps> = props => {
  const { width, height, alt, ...rest } = props;
  // eslint-disable-next-line @next/next/no-img-element
  return <img width={width} height={height} alt={alt} {...rest} />;
};

NativeImage.displayName = "NativeImage";

export interface ImageProps
  extends Omit<NativeImageProps, "onError">,
    UseImageProps {
  fallbackSrc?: string;
  fallback?: ReactElement;
  alt?: string;
  loading?: "eager" | "lazy";
  ignoreFallback?: boolean;
  src?: string;
  crossOrigin?: ImgHTMLAttributes<any>["crossOrigin"];
  as?: ElementType;
  className?: string;
}

export const Image: FC<ImageProps> = props => {
  const {
    fallbackSrc,
    fallback,
    src,
    loading,
    ignoreFallback,
    crossOrigin,
    as: Comp = NativeImage,
    className,
    ...rest
  } = props;

  const shouldIgnore = loading != null || ignoreFallback;

  const status = UseImage({
    ...props,
    ignoreFallback: shouldIgnore,
  });

  const shared = {
    ...(shouldIgnore ? rest : omit(rest, ["onError", "onLoad"])),
  };

  if (status !== "loaded") {
    if (fallback) return fallback;

    return <Comp src={fallbackSrc} className={clsx(className)} {...shared} />;
  }

  return (
    <Comp
      src={src}
      crossOrigin={crossOrigin}
      loading={loading}
      className={clsx(className)}
      {...shared}
    />
  );
};
