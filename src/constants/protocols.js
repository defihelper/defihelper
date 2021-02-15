import _ from 'lodash'

const protocols = {
  etherem: 'etherem',
  aave: 'aave',
  compound: 'compound',
  uniswap: 'uniswap',
  data: {
    ethereum: {
      name: 'Ethereum',
      website: '',
      logo: ''
    },
    aave: {
      name: 'Aave',
      website: '',
      logo: ''
    },
    compound: {
      name: 'Compound',
      website: '',
      logo: ''
    },
    uniswap: {
      name: 'Uniswap',
      website: '',
      logo: ''
    }
  }
}

function resolve (key) {
  return _.get(protocols, `data[${key}]`)
}

export { resolve }
export default protocols
