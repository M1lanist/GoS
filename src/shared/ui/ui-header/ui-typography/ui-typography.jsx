import { cn } from "@/shared/utils";


const Headline1 = ({ className, variant, children }) => {
  return (
    <h1
      className={cn(
        "font-sans",
        className,
        {
          h1: "text-2xl font-semibold leading-[110%] sm:text-5xl md:text-[56px]",
          h2: "text-xl font-semibold leading-[120%] sm:text-3xl md:text-5xl",
          h3: "text-lg font-semibold leading-[120%] sm:text-2xl md:text-3xl",
          h4: "font-semibold leading-[120%] sm:text-lg md:text-2xl",
          h5: "text-sm font-semibold leading-[120%] sm:text-base md:text-lg",
          body1: "text-[16px] font-normal leading-[140%] sm:text-[16px] md:text-[18px] ",
          body2: "text-[14px] font-normal leading-[140%] sm:text-[14px] md:text-[16px]",
          button: "font-normal text-xl leading-[120%] ",
          placeholder: "font-normal text-[16px] leading-[120%]",
          title:"font-normal text-[12px] leading-[120%]",
          description:"font-normal text-[12px] leading-[120%]"
        }[variant],
      )}
    >
      {children}
    </h1>
  );
};

export default Headline1;
