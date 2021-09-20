import clsx from "clsx";
import { ImgHTMLAttributes, FC, ElementType, ReactElement } from "react";

//TODO:
// eslint-disable-next-line no-restricted-imports
import { omit } from "../../../utils/object";

import { UseImage, UseImageProps } from "./useImage";

export interface NativeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  width?: string | number;
  height?: string | number;
}

export const NativeImage: FC<NativeImageProps> = props => {
  const { width, height, alt, ...rest } = props;
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
