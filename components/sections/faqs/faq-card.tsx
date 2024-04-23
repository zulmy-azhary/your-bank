type FaqCardProps = {
  question: string;
  answer: string;
};

export const FaqCard: React.FC<FaqCardProps> = (props) => {
  const { question, answer } = props;

  return (
    <div className="h-full border border-shades-grey-15 rounded-[10px] 2xl:rounded-[14px] p-[30px] md:p-10 2xl:p-[50px] space-y-5 md:space-y-6 2xl:space-y-[30px]">
      <h5 className="text-lg 2xl:text-xl">{question}</h5>
      <span className="relative block w-full h-px border-b border-shades-grey-15" />
      <p className="text-shades-grey-70 text-sm md:text-base 2xl:text-lg font-light">{answer}</p>
    </div>
  );
};
