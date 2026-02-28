import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "section-padding opacity-0 translate-y-5 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
