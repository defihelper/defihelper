import styled, { css } from 'styled-components'
import Box from './atoms/Box'

const Label = styled(Box)`
  display: inline-block;
  user-select: none;
  font-size: 0.75rem;
  padding: 8px 12px;
  font-weight: 700;

  ${({ primary }) =>
    primary
      ? css`
          background-color: ${props => props.theme.colors.primary};
        `
      : ''}
`

export default Label
