export interface ICurrencyRate {
  className?: string;
  currencyBase: string;
  currencyTarget: string;
  conversionRate: number;
}
export const CurrencyRate: React.FC<ICurrencyRate> = ({
  className = "",
  currencyBase,
  currencyTarget,
  conversionRate,
}) => {
  return (
    <div className={className.concat(" ", "flex")}>
      <span className="after:content-['-'] after:px-2">
        <span>{currencyBase}</span>/{currencyTarget}
      </span>
      <span>{Number(conversionRate).toFixed(2)}</span>
    </div>
  );
};
