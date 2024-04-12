type BadgeProps = {
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = (props) => {
  const { children } = props;

  return (
    <div className="px-2.5 lg:px-3.5 2xl:px-4 py-1.5 2xl:py-2 rounded-full bg-shades-grey-10 border border-shades-grey-15">
      <p className="font-light text-sm lg:text-base 2xl:text-lg text-shades-grey-70">{children}</p>
    </div>
  );
};
