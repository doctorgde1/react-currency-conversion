export interface IInput {
  className?: string;
  value: number | string;
  subject: string;
  handleChangeValue: (newValue: number | string) => void;
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
        onChange={(e) => handleChangeValue(e.target.value || "")}
        inputMode={inputMode}
        className="p-4 w-full text-xl focus:ring-4 focus:outline-none"
      />
    </div>
  );
};
