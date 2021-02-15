import React from 'react'
import styled, { css } from 'styled-components'
import { color, rounding } from 'themes'

const Box = styled.div`
  background-color: ${color.dark1};
  border-radius: ${rounding.default};

  ${({ tint }) =>
    tint === 2
      ? css`
          background-color: ${color.dark2};
        `
      : ''}

  ${({ tint }) =>
    tint === 3
      ? css`
          background-color: ${color.dark3};
        `
      : ''}
`

export default Box
