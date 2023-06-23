export interface IInput {
  className?: string;
  value: number;
  subject: string;
  handleChangeValue: (newValue: number) => void;
  inputMode?: "text" | "numeric";
}

export const Input: React.FC<IInput> = ({
  className = "",
  value,
  subject,
  handleChangeValue,
  inputMode = "text",
}) => {
  return (
    <div className={className.concat(" ", "w-full")}>
      <label className="sr-only" htmlFor={subject}>
        Enter amount of {subject}
      </label>
      <input
        type="text"
        value={value || ""}
        name={subject}
        id={subject}
        placeholder={subject}
        onChange={(e) => handleChangeValue(Number(e.target.value))}
        inputMode={inputMode}
        className="p-6 w-full bg-transparent focus:ring-4 focus:outline-none text-inherit focus:ring-midnight-express-300"
      />
    </div>
  );
};
