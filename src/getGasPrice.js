
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
const fetchGasPrice = async () => {
    const etherscanEndpoints = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=' + REACT_APP_ETHERSCAN_API_KEY
    const gasPriceObj = await fetch(etherscanEndpoints)
    return gasPriceResponse
}
   
export default fetchGasPrice

