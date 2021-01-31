import { Layout, LinkBox, SectionTitle } from 'components'
import React from 'react'

function HomePage () {
  return (
    <Layout>
      <section>
        <SectionTitle>Protocols</SectionTitle>
      </section>
      <section>
        <SectionTitle>About</SectionTitle>
        <p>Use the Gas Market to approximate how much you’ll spend on transaction fees with your favourite protocols.</p>
        <p>
          <LinkBox to='https://github.com/defihelper'>Twitter</LinkBox>
          <LinkBox to='https://github.com/defihelper'>Github</LinkBox>
          <LinkBox to='https://github.com/defihelper'>Request a feature</LinkBox>
        </p>
      </section>
      <section>
        <SectionTitle>Network Prices</SectionTitle>
      </section>
    </Layout>
  )
}

export default HomePage
