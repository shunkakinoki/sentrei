import { Image } from "@sentrei/atoms";
import clsx from "clsx";
import type { ImageProps } from "components/atoms/src/Image/Image";
import type { FC } from "react";

export interface ImageCollectionProps {
  imageCollection: ImageProps[];
  className?: string;
}

export const ImageCollection: FC<ImageCollectionProps> = props => {
  const { imageCollection, className } = props;
  return (
    <>
      <div className={clsx("flex overflow-x-scroll", className)}>
        {imageCollection.map((image: ImageProps) => {
          return (
            <Image
              key={image.src}
              width="100"
              height="100"
              src={image.src}
              alt={image.alt}
              className="mx-2"
              {...image}
            />
          );
        })}
      </div>
    </>
  );
};
