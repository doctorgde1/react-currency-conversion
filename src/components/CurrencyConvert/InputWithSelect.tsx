export interface IInputWithSelect {
  selectLabel: string;
  selectName: string;
  options: string[];
  currentAmount: number | string;
  currentOption: string;
  handleChangeOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputWithSelect: React.FC<IInputWithSelect> = ({
  selectLabel,
  selectName,
  options,
  currentAmount,
  currentOption,
  handleChangeAmount,
  handleChangeOption,
}) => {
  return (
    <div className="">
      <div className="">
        <label htmlFor={selectName}>{selectLabel}</label>
        <select
          name={selectName}
          id={selectName}
          value={currentOption}
          onChange={handleChangeOption}
        >
          {options.map((option: string) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        <label className="sr-only" htmlFor={currentOption}>
          Enter amount of {currentOption}
        </label>
        <input
          type="text"
          value={currentAmount}
          name={currentOption}
          id={currentOption}
          onChange={handleChangeAmount}
          inputMode="numeric"
        />
      </div>
    </div>
  );
};
