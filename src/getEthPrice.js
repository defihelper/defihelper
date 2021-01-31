const fetchPrice = async () => {
    const ethereumPrice = await fetch('https://api.coinpaprika.com/v1/tickers/eth-ethereum')
    return ethereumPrice
}
   
export default fetchPrice
