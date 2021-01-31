import React from 'react'
import styled, { css } from 'styled-components'
import { color, fonts } from 'theme'
import Box from './Box'

const Label = styled(Box)`
  display: inline-block;
  user-select: none;
  font-size: 0.75rem;
  padding: 8px 12px;

  ${({ primary }) => primary ? css`
    background-color: ${color.primary};
    font-family: ${fonts.metropolisBold};
  ` : ''}
`

export default Label
