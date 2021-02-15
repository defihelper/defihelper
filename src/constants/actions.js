import protocols from './protocols'
import types from './types'

const initial = {
  A: 'USDC',
  B: 'DAI'
}

const actions = [
  {
    type: types.send,
    protocol: protocols.ethereum,
    category: '-',
    method: 'send',
    label: () => `Send ETH to someone`,
    gas: 21000
  },
  {
    type: types.approve,
    protocol: protocols.ethereum,
    category: 'ERC20',
    method: 'approve',
    label: (params = initial) => `Approve ${params.A} to be spend for someone`,
    gas: 50000
  },
  {
    type: types.transfer,
    protocol: protocols.ethereum,
    category: 'ERC20',
    method: 'transfer',
    label: (params = initial) => `Transfer ${params.A} to someone`,
    gas: 90000
  },
  {
    type: types.swap,
    protocol: protocols.uniswap,
    category: 'DEX',
    method: 'swap', //swapExactTokensForTokens || swapTokensForExactTokens || swapExactETHForTokens || swapETHForExactTokens
    label: params => `Swap ${params.A} for ${params.B}`,
    gas: 220000
  },
  {
    type: types.addLiquidity,
    protocol: protocols.uniswap,
    category: 'DEX',
    method: 'addLiquidity',
    label: (params = initial) => `Add liquidity of ${params.A} and ${params.B}`,
    gas: 180000
  },
  {
    type: types.removeLiquidity,
    protocol: protocols.uniswap,
    category: 'DEX',
    method: 'removeLiquidity',
    label: (params = initial) =>
      `Remove liquidity of ${params.A} and ${params.B}`,
    gas: 190000
  },
  {
    type: types.deposit,
    protocol: protocols.compound,
    category: 'Lending',
    method: 'mint',
    label: (params = initial) => `Deposit token ${params.A}`,
    gas: 220000
  },
  {
    type: types.borrow,
    protocol: protocols.compound,
    category: 'Lending',
    method: 'borrow',
    label: (params = initial) => `Borrow ${params.A}`,
    gas: 440000
  },
  {
    type: types.repay,
    protocol: protocols.compound,
    category: 'Lending',
    method: 'repayBorrow',
    label: (params = initial) => `Repay ${params.A} `,
    gas: 220000
  },
  {
    type: types.widthdraw,
    protocol: protocols.compound,
    category: 'Lending',
    method: 'redeem',
    label: (params = initial) => `Withdraw ${params.A}`,
    gas: 320000
  },
  {
    type: types.deposit,
    protocol: protocols.aave,
    category: 'Lending',
    method: 'deposit',
    label: (params = initial) => `Deposit token ${params.A}`,
    gas: 230000
  },
  {
    type: types.borrow,
    protocol: protocols.aave,
    category: 'Lending',
    method: 'borrow',
    label: (params = initial) => `Borrow ${params.A}`,
    gas: 360000
  },
  {
    type: types.repay,
    protocol: protocols.aave,
    category: 'Lending',
    method: 'repayBorrow',
    label: (params = initial) => `Repay ${params.A} `,
    gas: 300000
  },
  {
    type: types.widthdraw,
    protocol: protocols.aave,
    category: 'Lending',
    method: 'withdraw',
    label: (params = initial) => `Withdraw ${params.A}`,
    gas: 500000
  }
]

export default actions
