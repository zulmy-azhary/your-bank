import Link from "next/link";
import type { IconType } from "react-icons";
import { contacts } from "./data";
import { Reveal } from "@/components/utils/reveal";

type ContactProps = {
  href: string;
  icon: IconType;
  children: React.ReactNode;
};

const Contact: React.FC<ContactProps> = (props) => {
  const { href, icon: Icon, children } = props;

  return (
    <Link
      href={href}
      className="grow flex gap-x-1.5 justify-center items-center text-shades-white-90 text-sm lg:text-base 2xl:text-lg font-light"
    >
      <Icon className="inline-block text-shades-green-60 size-5 2xl:size-6" />
      {children}
    </Link>
  );
};

export const FooterContacts: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      {contacts.map(({ href, icon, text }, idx) => (
        <Reveal key={text} delay={(idx + 1) * 0.1}>
          <Contact href={href} icon={icon}>
            {text}
          </Contact>
        </Reveal>
      ))}
    </div>
  );
};
