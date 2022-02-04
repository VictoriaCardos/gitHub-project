import React, { useState, useContext } from 'react'
import { context } from '../../context/index'
import api from '../../services/api'

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton
} from './styles'

const Header = () => {
  const ctx = useContext(context)
  const [searchedUser, setSearchedUser] = useState('')

  async function getUserData() {
    try {
      const response = await api.get(`/${searchedUser}`)
      const repos = await api.get(`/${searchedUser}/repos`)
      const followers = await api.get(`/${searchedUser}/followers`)

      ctx.setUserData(response.data)
      ctx.setRepos(repos.data)
      ctx.setFollowersData(followers.data)
    } catch {
      alert(`${searchedUser} não foi encontrado`)
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Github Profile</HeaderTitle>

      <HeaderInputContainer>
        <HeaderInput
          value={searchedUser}
          onChange={e => setSearchedUser(e.target.value)}
        />

        <HeaderSearchButton onClick={getUserData}></HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  )
}

export default Header
