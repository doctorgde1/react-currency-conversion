import { useEffect, useState } from "react";
import { InputWithSelect } from "./InputWithSelect";

export interface ICurrencyConvert {
  availableCurrencies: string[];
  exchangeRate: number;
  baseCurrency: string;
  targetCurrency: string;
  handleChangeBaseCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeTargetCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrencyConvert: React.FC<ICurrencyConvert> = ({
  availableCurrencies,
  exchangeRate,
  baseCurrency,
  targetCurrency,
  handleChangeBaseCurrency,
  handleChangeTargetCurrency,
}) => {
  const [baseAmount, setBaseAmount] = useState<number | string>(0);
  const [targetAmount, setTargetAmount] = useState<number | string>(0);

  useEffect(() => {
    setTargetAmount(+baseAmount * exchangeRate);
  }, [exchangeRate]);

  const handleChangeBaseAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseAmount(e.target.value);
    setTargetAmount(+e.target.value * exchangeRate);
  };
  const handleChangeTargetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetAmount(e.target.value);
    setBaseAmount(+e.target.value / exchangeRate);
  };

  return (
    <div className="">
      <InputWithSelect
        selectLabel="Convert from"
        selectName="Base Currency"
        options={availableCurrencies}
        currentOption={baseCurrency}
        currentAmount={baseAmount || ""}
        handleChangeOption={handleChangeBaseCurrency}
        handleChangeAmount={handleChangeBaseAmount}
      />
      <InputWithSelect
        selectLabel="Convert to"
        selectName="Target Currency"
        options={availableCurrencies}
        currentOption={targetCurrency}
        currentAmount={targetAmount || ""}
        handleChangeOption={handleChangeTargetCurrency}
        handleChangeAmount={handleChangeTargetAmount}
      />
    </div>
  );
};
