import BigNumber from 'bignumber.js'

export const fetchPrice = async () => {
  const ethereumPrice = await fetch(
    'https://api.coinpaprika.com/v1/tickers/eth-ethereum'
  )
  return ethereumPrice
}

// example of object response:
// {
//     "status": "1",
//     "message": "OK",
//     "result": {
//     "LastBlock": "11708645",
//     "SafeGasPrice": "67",
//     "ProposeGasPrice": "85",
//     "FastGasPrice": "143"
//     }
//     }
export const fetchGasPrice = async () => {
  const etherscanEndpoints =
    'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' +
    process.env.REACT_APP_ETHERSCAN_API_KEY
  const result = await fetch(etherscanEndpoints)
  return result
}

/**
 * @title Return the price of a transaction in USD given the gas used (in Gwei) and the current eth price in USD
 * @author Rob
 * @param gasPriceInGwei string amount of gas used in Gwei
 * @param gasUsed string amount of gas used in Gwei
 * @param ethPrice string ethPrice in usd with two decimals
 * @return BigNumber PriceInUsd
 */
export const getPriceInUsd = (gasPriceInGwei, gasUsed, ethPrice) => {
  const gasAmountInEth = new BigNumber(gasPriceInGwei)
    .multipliedBy(new BigNumber(gasUsed))
    .dividedBy(1e9)
  return gasAmountInEth.multipliedBy(new BigNumber(ethPrice))
}

export default getPriceInUsd
