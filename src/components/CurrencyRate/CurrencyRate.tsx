import { convert } from "../../utils";

export interface ICurrencyRate {
  className?: string;
  currencyBase: string;
  currencyTarget: string;
  exchangeRates: string[];
}
export const CurrencyRate: React.FC<ICurrencyRate> = ({
  className = "",
  currencyBase,
  currencyTarget,
  exchangeRates,
}) => {
  return (
    <div className={className.concat(" ", "flex")}>
      <span className="after:content-['-'] after:px-2">
        <span className="font-medium text-midnight-express-100">
          {currencyBase}
        </span>
        /{currencyTarget}
      </span>
      <span>
        {convert(1, currencyBase, currencyTarget, exchangeRates).toFixed(2)}
      </span>
    </div>
  );
};
