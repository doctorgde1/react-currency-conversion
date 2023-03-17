import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";

export interface ICurrencyConvert {
  availableCurrencies: string[];
  exchangeRate: number;
  baseCurrency: string;
  targetCurrency: string;
  handleChangeBaseCurrency: (newCurrency: string) => void;
  handleChangeTargetCurrency: (newCurrency: string) => void;
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

  const handleChangeBaseAmount = (newAmount: number | string) => {
    setBaseAmount(newAmount);
    setTargetAmount(+newAmount * exchangeRate);
  };
  const handleChangeTargetAmount = (newAmount: number | string) => {
    setTargetAmount(newAmount);
    setBaseAmount(+newAmount / exchangeRate);
  };

  return (
    <div>
      <div>
        <div>
          <Select
            options={availableCurrencies}
            currentOption={baseCurrency}
            handleChangeOption={handleChangeBaseCurrency}
          />
          <Input
            value={baseAmount}
            subject={baseCurrency}
            handleChangeValue={handleChangeBaseAmount}
            inputMode="numeric"
          />
        </div>
        <div>
          <Select
            options={availableCurrencies}
            currentOption={targetCurrency}
            handleChangeOption={handleChangeTargetCurrency}
          />
          <Input
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
