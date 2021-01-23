const actions: [
    {
      name; 'send',
      protocol: 'Ethereum',
      category: '-',
      method: 'send',
      label: (params) => `Send ETH to someone`,
      gas: 21000 // remove in v2,
    },
    {
      name; 'approve',
      protocol: 'Ethereum',
      category: 'ERC20',
      method: 'approve',
      label: (params) => `Approve ${params.A = "USDC"} to be spend for someone`,
      gas: 50000 // remove in v2,
    },
    {
      name; 'transfer',
      protocol: 'Ethereum',
      category: 'ERC20',
      method: 'transfer',
      label: (params) => `Transfer ${params.A = "USDC"} to someone`,
      gas: 90000 // remove in v2,
    },
    {
      name; 'swap',
      protocol: 'Uniswap',
      category: 'DEX',
      method: 'swap', //swapExactTokensForTokens || swapTokensForExactTokens || swapExactETHForTokens || swapETHForExactTokens
      label: (params) => `Swap ${params.A = "USDC"} for ${params.B = "DAI"}`,
      gas: 220000 // remove in v2,
    },
    {
      name; 'addLiquidity',
      protocol: 'Uniswap',
      category: 'DEX',
      method: 'addLiquidity',
      label: (params) => `Add liquidity of ${params.A = "USDC"} and ${params.B = "DAI"}`,
      gas: 180000 // remove in v2,
    },
    {
      name; 'removeLiquidity',
      protocol: 'Uniswap',
      category: 'DEX',
      method: 'removeLiquidity',
      label: (params) => `Remove liquidity of ${params.A = "USDC"} and ${params.B = "DAI"}`,
      gas: 190000 // remove in v2,
    },
    {
      name; 'deposit',
      protocol: 'Compound',
      category: 'Lending',
      method: 'mint',
      label: (params) => `Deposit token ${params.A = "USDC"}`,
      gas: 220000 // remove in v2,
    },
    {
      name; 'borrow',
      protocol: 'Compound',
      category: 'Lending',
      method: 'borrow',
      label: (params) => `Borrow ${params.A = "USDC"}`,
      gas: 440000 // remove in v2,
    },
    {
      name: "repay"
      protocol: 'Compound',
      category: 'Lending',
      method: 'repayBorrow',
      label: (params) => `Repay ${params.A = "USDC"} `,
      gas: 220000 // remove in v2,
    },
    {
      name: "withdraw"
      protocol: 'Compound',
      category: 'Lending',
      method: 'redeem',
      label: (params) => `Withdraw ${params.A = "USDC"}`,
      gas: 320000 // remove in v2,
    },
    {
      name; 'deposit',
      protocol: 'AAVE V2',
      category: 'Lending',
      method: 'deposit',
      label: (params) => `Deposit token ${params.A = "USDC"}`,
      gas: 230000 // remove in v2,
    },
    {
      name; 'borrow',
      protocol: 'AAVE V2',
      category: 'Lending',
      method: 'borrow',
      label: (params) => `Borrow ${params.A = "USDC"}`,
      gas: 360000 // remove in v2,
    },
    {
      name: "repay"
      protocol: 'AAVE V2',
      category: 'Lending',
      method: 'repayBorrow',
      label: (params) => `Repay ${params.A = "USDC"} `,
      gas: 300000 // remove in v2,
    },
    {
      name: "withdraw"
      protocol: 'AAVE V2',
      category: 'Lending',
      method: 'withdraw',
      label: (params) => `Withdraw ${params.A = "USDC"}`,
      gas: 500000 // remove in v2,
    },
  ]

  export default actions