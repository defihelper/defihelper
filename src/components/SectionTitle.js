import React from 'react'
import styled from 'styled-components'
import image from '../image/section-title.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  
  img {
    margin-right: 12px;
    width: 48px;
  }
`

const SectionTitle = ({ children }) => {
  return (
    <Container>
      <img src={image} alt="" />
      <h2 className='thin'>{children}</h2>
    </Container>
  )
}

export default SectionTitle
