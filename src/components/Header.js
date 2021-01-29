import { Box, GasBox, Label } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SiteHeader = styled(Box)`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;

  ${Label} {
    padding: 6px 8px;
  }

  h1 {
    font-size: 2rem;
    margin: 12px 0 0 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      margin: 4px;
    }
  }
`

const Header = () => (
  <SiteHeader as='header'>
    <Link to='/' className='unstyled'>
      <Label primary as='div'>
        🔮&nbsp;&nbsp;DeFi Helper
      </Label>

      <h1 className='bold'>
        Gas Market
      </h1>
    </Link>

    <ul>
      <li>
        <GasBox label='ETH - USD' value='$1415' variant='default' size='medium' />
      </li>
      <li>
        <GasBox label='Low' value='50' variant='default' />
      </li>
      <li>
        <GasBox label='Average' value='90' variant='primary' />
      </li>
      <li>
        <GasBox label='High' value='110' variant='danger' />
      </li>
    </ul>
  </SiteHeader>
)

export default Header
