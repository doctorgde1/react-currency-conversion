const convert = (
  value: number,
  base: string,
  target: string,
  rates: { [key: string]: number }
) => {
  return (value * rates[target]) / rates[base];
};

export default convert;
