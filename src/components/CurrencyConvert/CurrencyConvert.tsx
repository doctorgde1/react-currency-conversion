import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";
import arrowDown from "../..//assets/arrow_down.svg";

export interface ICurrencyConvert {
  className?: string;
  availableCurrencies: string[];
  exchangeRate: number;
  baseCurrency: string;
  targetCurrency: string;
  handleChangeBaseCurrency: (newCurrency: string) => void;
  handleChangeTargetCurrency: (newCurrency: string) => void;
}

export const CurrencyConvert: React.FC<ICurrencyConvert> = ({
  className = "",
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

  const handleChangeBaseAmount = (newAmount: number | string) => {
    setBaseAmount(newAmount);
    setTargetAmount(+newAmount * exchangeRate);
  };
  const handleChangeTargetAmount = (newAmount: number | string) => {
    setTargetAmount(newAmount);
    setBaseAmount(+newAmount / exchangeRate);
  };

  return (
    <div className={className.concat(" ", "")}>
      <div className="flex relative flex-col gap-20 w-full">
        <div className="flex flex-col gap-3 items-center w-full sm:items-start">
          <Select
            className="w-52 text-2xl after:absolute after:right-3 after:w-4 after:h-3 after:content-[''] after:bg-arrow_down after:bg-contain after:bg-no-repeat"
            options={availableCurrencies}
            currentOption={baseCurrency}
            handleChangeOption={handleChangeBaseCurrency}
          />
          <Input
            className="text-3xl bg-gradient-to-r text-midnight-express-100 from-midnight-express-500"
            value={baseAmount}
            subject={baseCurrency}
            handleChangeValue={handleChangeBaseAmount}
            inputMode="numeric"
          />
        </div>
        <div className="flex flex-col gap-3 items-center w-full sm:items-start">
          <Select
            className="w-52 text-2xl after:absolute after:right-3 after:w-4 after:h-3 after:content-[''] after:bg-arrow_down after:bg-contain after:bg-no-repeat"
            options={availableCurrencies}
            currentOption={targetCurrency}
            handleChangeOption={handleChangeTargetCurrency}
          />
          <Input
            className="w-full text-3xl bg-gradient-to-r text-midnight-express-100 from-midnight-express-500"
            value={targetAmount}
            subject={targetCurrency}
            handleChangeValue={handleChangeTargetAmount}
            inputMode="numeric"
          />
        </div>
      </div>
    </div>
  );
};
