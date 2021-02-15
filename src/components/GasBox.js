import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from './atoms'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  min-width: 90px;
  min-height: 66px;
  width: 100%;

  ${({ size }) =>
    size === 'medium'
      ? css`
          min-width: 142px;
        `
      : ''}

  ${({ size }) =>
    size === 'large'
      ? css`
          min-width: 286px;
        `
      : ''}
`

const GasBoxLabel = styled(Box)`
  font-size: 11px;
  font-weight: bold;
  margin: 4px 6px;
  padding: 4px;
`

const GasBoxValue = styled.div`
  flex-grow: 1;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;

  ${({ variant }) =>
    variant === 'primary'
      ? css`
          color: ${props => props.theme.colors.primary};
        `
      : ''}
  ${({ variant }) =>
    variant === 'danger'
      ? css`
          color: ${props => props.theme.colors.danger};
        `
      : ''}
`

function GasBox ({ label, value, variant, size }) {
  return (
    <Container size={size} className='text-center'>
      <GasBoxLabel>{label}</GasBoxLabel>
      <GasBoxValue variant={variant}>{value}</GasBoxValue>
    </Container>
  )
}

export default GasBox
