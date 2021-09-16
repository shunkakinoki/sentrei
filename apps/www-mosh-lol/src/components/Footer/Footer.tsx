import type { ReactNode, FC } from "react";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

interface FooterIconLinkProps {
  children: ReactNode;
  href: string;
}

export const FooterIconLink: FC<FooterIconLinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-blueGray-300 hover:text-blueGray-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const Footer: FC = () => {
  return (
    <footer className="overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 mx-auto max-w-7xl">
      <div className="flex justify-center mt-8 space-x-6">
        <FooterIconLink href="https://discord.gg/SsF2QejwvZ">
          <span className="sr-only">Discord</span>
          <FaDiscord className="w-6 h-6" />
        </FooterIconLink>
        <FooterIconLink href="https://github.com/sentrei/sentrei">
          <span className="sr-only">Discord</span>
          <FaGithub className="w-6 h-6" />
        </FooterIconLink>
        <FooterIconLink href="https://twitter.com/MoshDAO">
          <span className="sr-only">Twitter</span>
          <FaTwitter className="w-6 h-6" />
        </FooterIconLink>
      </div>
    </footer>
  );
};
