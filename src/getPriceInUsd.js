
import BigNumber from 'bignumber.js'

/**
* @title Return the price of a transaction in USD given the gas used (in Gwei) and the current eth price in USD
* @author Rob
* @param gasPriceInGwei string amount of gas used in Gwei
* @param gasUsed string amount of gas used in Gwei
* @param ethPrice string ethPrice in usd with two decimals
* @return BigNumber PriceInUsd
*/
const getPriceInUsd = (gasPriceInGwei, gasUsed, ethPrice) => {
    const gasAmountInEth = new BigNumber(gasPriceInGwei).multipliedBy(new BigNumber(gasUsed)).dividedBy(1e9)
    return gasAmountInEth.multipliedBy(new BigNumber(ethPrice))
}
   
export default getPriceInUsd
