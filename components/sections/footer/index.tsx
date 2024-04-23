import { FooterNavigation } from "./footer-navigation";
import { FooterContacts } from "./footer-contacts";
import { FooterCopyright } from "./footer-copyright";
import { Appear } from "@/components/utils/appear";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 lg:px-20 2xl:px-[162px] xl:container">
      <div className="container mx-auto flex flex-col items-center gap-y-[30px] md:gap-y-10 2xl:gap-y-[50px] pt-[50px] pb-[30px] md:pt-[60px] 2xl:pt-[100px] 2xl:pb-[50px]">
        <FooterNavigation />
        <Appear className="w-full h-px">
          <span className="block border-b border-shades-grey-15" />
        </Appear>
        <FooterContacts />
        <Appear className="w-full h-px">
          <span className="block border-b border-shades-grey-15" />
        </Appear>
        <FooterCopyright />
      </div>
    </footer>
  );
};
