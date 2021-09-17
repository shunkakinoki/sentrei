import clsx from "clsx";
import type { FC, ReactNode, HTMLAttributes } from "react";

// eslint-disable-next-line no-restricted-imports
import { UseImage } from "../Image/useImage";

export const AvatarSize = {
  XSMALL: "h-6 w-6 text-xs",
  SMALL: "h-8 w-8 text-sm",
  MEDIUM: "h-10 w-10 text-base",
  LARGE: "h-12 w-12 text-lg",
  XLARGE: "h-14 w-14 text-xl",
};

export interface AvatarProps {
  personName?: string; //Name of the person in the avatar.
  children?: ReactNode;
  src?: string;
  loading?: "eager" | "lazy";
  onError?: () => void;
  size?: string;
  className?: string;
}

interface AvatarNameProps
  extends Pick<AvatarProps, "personName" | "size" | "className"> {}

interface DefaultAvatarProps extends HTMLAttributes<HTMLDivElement> {
  "aria-label"?: string;
  className?: string;
}

//Shun Kakinoki -> SK
const getInitials = (name: string) => {
  let [firstName, lastName] = name.split(" ");

  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  } else {
    return firstName.charAt(0);
  }
};
//Render only initial name instead of image.
const AvatarName: FC<AvatarNameProps> = props => {
  const { personName, size, className } = props;
  return (
    <div
      className={clsx(
        "inline-flex justify-center items-center bg-gray-500 rounded-full",
        size,
        className,
      )}
    >
      <div className={clsx("text-center text-white ")} aria-label={personName}>
        {personName ? getInitials(personName) : null}
      </div>
    </div>
  );
};

AvatarName.displayName = "AvatarName";

const DefaultAvatar: FC<DefaultAvatarProps> = props => {
  const { className, ...rest } = props;
  return (
    <div
      className={clsx(
        "overflow-hidden w-full h-full bg-gray-100 rounded-full",
        className,
      )}
      {...rest}
    >
      <svg className="text-gray-300" viewBox="0 0 128 128" role="img">
        <g>
          <path d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z" />
          <path d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24" />
        </g>
      </svg>
    </div>
  );
};

DefaultAvatar.displayName = "DefaultAvatar";

export const Avatar: FC<AvatarProps> = props => {
  const {
    size = AvatarSize.MEDIUM,
    personName,
    src,
    className,
    onError,
    children,
    ...rest
  } = props;

  const status = UseImage({ src, onError });
  const hasLoaded = status === "loaded";

  const renderChildren = () => {
    if (src && hasLoaded) {
      return (
        <img
          className="object-cover w-full h-full rounded-full"
          src={src}
          alt={personName}
        />
      );
    }

    if (src && !hasLoaded) {
      if (personName) {
        return <AvatarName size={size} personName={personName} />;
      } else {
        return <DefaultAvatar aria-label={personName} />;
      }
    }

    if (!src && personName) {
      return <AvatarName size={size} personName={personName} />;
    }

    return <DefaultAvatar aria-label={personName} />;
  };
  return (
    <div className={clsx("rounded-full", size, className)} {...rest}>
      {renderChildren()}
      {children}
    </div>
  );
};

Avatar.displayName = "Avatar";
