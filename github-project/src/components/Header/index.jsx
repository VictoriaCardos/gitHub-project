import React from 'react'

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton
} from './styles'

const Header = () => {
  return (
    <HeaderSection>
      <HeaderTitle>Github Profile</HeaderTitle>

      <HeaderInputContainer>
        <HeaderInput />

        <HeaderSearchButton></HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  )
}

export default Header
