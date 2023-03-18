import { useState } from "react";
import { CurrencyConvert, CurrencyRate, RoundedHexagon } from "./components";
import { useFetch } from "./hooks";
import loading from "./assets/grid.svg";

const apiKey = "554744e84ae4a2b6c47adc7a";
const availableCurrencies = ["UAH", "USD", "EUR"];

function App() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("UAH");
  const [convertData, isConvertLoading, convertError] = useFetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`,
    [baseCurrency, targetCurrency]
  );
  const handleChangeBaseCurrency = (newCurrency: string) => {
    setBaseCurrency(newCurrency);
  };

  const handleChangeTargetCurrency = (newCurrency: string) => {
    setTargetCurrency(newCurrency);
  };

  const [convertUsd, isUsdLoading, usdError] = useFetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/UAH`
  );
  const [convertEur, isEurLoading, eurError] = useFetch(
    `https://v6.exchangerate-api.com/v6/${apiKey}/pair/EUR/UAH`
  );

  return (
    <div className=" w-screen min-h-screen bg-grid bg-[length:50%] sm:bg-[length:20%] lg:bg-[length:10%] bg-center bg-midnight-express-900">
      <div className="container overflow-hidden px-8 max-w-5xl min-h-screen sm:px-32">
        <div className="flex flex-col gap-32 justify-center py-7 pb-20 min-h-screen">
          <header className="bg-gradient-to-r shadow-xl text-midnight-express-300 from-midnight-express-500">
            <div className="relative z-10 w-fit">
              <div className="flex flex-col p-3 w-fit after:content-[''] after:absolute after:right-0 after:w-[2px] after:top-1/2 after:-translate-y-1/2 after:opacity-60 after:h-3/4 after:bg-midnight-express-900">
                {usdError && <span className="text-red-500">{usdError}</span>}
                {isUsdLoading && <img src={loading} alt="loading icon" />}
                {convertUsd && (
                  <CurrencyRate
                    className="text-2xl"
                    currencyBase={"USD"}
                    currencyTarget={"UAH"}
                    conversionRate={convertUsd["conversion_rate"]}
                  />
                )}
                {eurError && <span className="text-red-500">{eurError}</span>}
                {isEurLoading && <img src={loading} alt="loading icon" />}
                {convertEur && (
                  <CurrencyRate
                    className="text-2xl"
                    currencyBase={"EUR"}
                    currencyTarget={"UAH"}
                    conversionRate={convertEur["conversion_rate"]}
                  />
                )}
              </div>
            </div>
          </header>
          {convertError && <span className="text-red-500">{convertError}</span>}
          {isConvertLoading && <img src={loading} alt="loading icon" />}
          {convertData && (
            <CurrencyConvert
              className="flex relative z-10 justify-center items-center w-full h-fit"
              availableCurrencies={availableCurrencies}
              exchangeRate={convertData["conversion_rate"]}
              baseCurrency={baseCurrency}
              targetCurrency={targetCurrency}
              handleChangeBaseCurrency={handleChangeBaseCurrency}
              handleChangeTargetCurrency={handleChangeTargetCurrency}
            />
          )}
        </div>
      </div>
      <div className="fixed top-0 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 lg:h-screen h-[150vh] aspect-square">
        <RoundedHexagon
          gradientFrom="#B6DCF6"
          gradientTo="#001341"
          svgClassName={"overflow-visible"}
          gClassName={
            "[&_path]:animate-spin-back [&_path]:shadow-xl [&_path]:origin-center odd:[&_path]:animation-duration-[20s] even:[&_path]:animation-duration-[30s]"
          }
        />
      </div>
    </div>
  );
}

export default App;
