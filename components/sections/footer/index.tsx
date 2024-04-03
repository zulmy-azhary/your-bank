const FooterNavigation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="">Logo</div>
      <div className="">Navigation</div>
    </div>
  );
};

const FooterContacts: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap">
      <div className="grow text-center">hello@skillbirdge.com</div>
      <div className="grow text-center">+91 91813 23 2309</div>
      <div className="grow text-center">Somewhere in the World</div>
    </div>
  );
};

const FooterCopyright: React.FC = () => {
  return <div className="flex justify-between items-center">Copyright</div>;
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 lg:px-20 2xl:px-[162px] xl:container">
      <div className="container mx-auto flex flex-col items-center gap-y-[30px] md:gap-y-10 2xl:gap-y-[50px] pt-[50px] pb-[30px] md:pt-[60px] 2xl:pt-[100px] 2xl:pb-[50px]">
        <FooterNavigation />
        <span className="relative block w-full h-px border-b border-shades-grey-15" />
        <FooterContacts />
        <span className="relative block w-full h-px border-b border-shades-grey-15" />
        <FooterCopyright />
      </div>
    </footer>
  );
};
