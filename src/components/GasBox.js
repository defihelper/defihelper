import { Box } from 'components'
import React from 'react'
import styled, { css } from 'styled-components'
import { fonts, color } from 'theme'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 90px;
  min-height: 66px;
  width: 100%;

  ${({ size }) => size === 'medium' ? css`
    min-width: 142px;
  ` : ''}

  ${({ size }) => size === 'large' ? css`
    min-width: 286px;
  ` : ''}
`

const GasBoxLabel = styled(Box)`
  font-size: 11px;
  font-weight: bold;
  margin: 4px 6px;
  padding: 4px;
`

const GasBoxValue = styled.div`
  flex-grow: 1;
  font-family: ${fonts.metropolisBold};
  font-size: 24px;
  line-height: 34px;

  ${({ variant }) => variant === 'primary' ? css`color: ${color.primary};` : ''}
  ${({ variant }) => variant === 'danger' ? css`color: ${color.danger};` : ''}
`

function GasBox ({ label, value, variant, size }) {
  return (
    <Container size={size} tint={2} className='text-center'>
      <GasBoxLabel tint={3}>{label}</GasBoxLabel>
      <GasBoxValue variant={variant}>{value}</GasBoxValue>
    </Container>
  )
}

export default GasBox
