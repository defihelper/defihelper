import { Box } from 'components'
import React from 'react'
import styled from 'styled-components'
import { color, fonts } from 'themes'

const Container = styled(Box)`
  color: ${color.white};
  display: inline-block;
  font-family: ${fonts.metropolisBold};
  font-size: 0.75rem;
  padding: 6px 8px;
  margin: 0 8px;
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.95, 0.05, 0.8, 0.04);

  :hover {
    background-color: ${color.primary};
  }

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`

const LinkBox = ({ to, children }) => {
  return (
    <Container
      as='a'
      tint={2}
      href={to}
      target='_blank'
      rel='noreferrer noopener'
    >
      {children}
    </Container>
  )
}

export default LinkBox
