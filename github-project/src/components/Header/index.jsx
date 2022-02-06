import React, { useState, useContext } from 'react'
import { context } from '../../context/index'
import { FiSearch } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'
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

  function verifyInput() {
    if (searchedUser == '') {
      alert('insira um user!')
    } else {
      getUserData()
      setSearchedUser('')
    }
  }

  async function getUserData() {
    try {
      const response = await api.get(`/${searchedUser}`)
      const repos = await api.get(`/${searchedUser}/repos`)
      const followers = await api.get(`/${searchedUser}/followers`)
      const following = await api.get(`/${searchedUser}/following`)

      ctx.setUserData(response.data)
      ctx.setRepos(repos.data)
      ctx.setFollowersData(followers.data)
      ctx.setFollowingData(following.data)
    } catch {
      alert(`${searchedUser} não foi encontrado`)
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>
        Github Profile <AiFillGithub size={45} />
      </HeaderTitle>

      <HeaderInputContainer>
        <HeaderInput
          value={searchedUser}
          onChange={e => setSearchedUser(e.target.value)}
        />

        <HeaderSearchButton onClick={verifyInput}>
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  )
}

export default Header
