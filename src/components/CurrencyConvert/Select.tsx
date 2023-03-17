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
        className="p-2 w-full focus:ring-4 focus:outline-none bg-midnight-express-500 text-midnight-express-300 focus:ring-midnight-express-300"
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
        <span className="text-midnight-express-100">{currentOption}</span>
        <ul
          className={"absolute top-full origin-top z-50 flex flex-col ring-4 ring-midnight-express-300 bg-midnight-express-500 transition duration-300 ease-[cubic-bezier(0.45, 0.02, 0.09, 0.98)] w-full left-0 overflow-x-hidden overflow-y-auto max-h-60".concat(
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
                className="p-2 break-words transition duration-500 ease-[cubic-bezier(0.45, 0.02, 0.09, 0.98)] bg-midnight-express-500 hover:text-midnight-express-100 ring-2 ring-midnight-express-100 hover:ring-4 hover:z-20 hover:scale-105"
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
