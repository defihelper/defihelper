import React from 'react'

import { Header } from 'components'
import styled from 'styled-components'

const Page = styled.div`
  padding: 0 15px;
`

const Layout = ({ children }) => {
  return (
    <Page>
      <Header />
      <main>{children}</main>
      <footer />
    </Page>
  )
}

export default Layout
