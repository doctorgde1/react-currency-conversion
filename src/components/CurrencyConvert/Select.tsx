import { useEffect, useRef, useState } from "react";

export interface ISelect {
  className?: string;
  options: string[];
  currentOption: string;
  handleChangeOption: (newCurrency: string) => void;
}
export const Select: React.FC<ISelect> = ({
  className = "",
  options,
  currentOption,
  handleChangeOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLDivElement))
        setIsOpen(false);
    };
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  });

  return (
    <div
      className={className.concat(
        " ",
        "flex relative justify-between items-center max-w-full"
      )}
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}
    >
      <div
        tabIndex={0}
        className="p-3 w-full text-2xl ring-4 focus:outline-none"
        role={"listbox"}
        onKeyDown={(e) => {
          if (e.code == "ArrowDown" || e.code == "ArrowUp") {
            const currentOptionIndex = options.indexOf(currentOption);
            if (e.code == "ArrowDown" && options[currentOptionIndex + 1]) {
              handleChangeOption(options[currentOptionIndex + 1]);
            } else if (e.code == "ArrowUp" && options[currentOptionIndex - 1]) {
              handleChangeOption(options[currentOptionIndex - 1]);
            }
          }
        }}
      >
        <span className="">{currentOption}</span>
        <ul
          className={"absolute top-full origin-top z-50 flex flex-col ring-4 transition duration-300 ease-[cubic-bezier(0.45, 0.02, 0.09, 0.98)] w-full left-0 overflow-x-hidden overflow-y-auto max-h-80".concat(
            " ",
            isOpen
              ? "scale-x-100 opacity-100 "
              : "scale-x-75 pointer-events-none opacity-0"
          )}
          role={"presentation"}
        >
          {options.map((option: string) => {
            return (
              <li
                key={option}
                className="p-2 break-words transition duration-500 ease-[cubic-bezier(0.45, 0.02, 0.09, 0.98)] ring-2 hover:ring-4 hover:z-20"
                role={"option"}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  handleChangeOption(e.currentTarget.innerHTML);
                }}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
