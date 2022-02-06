import React, { useState, useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      toast.dark('Insira um user primeiro', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
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

      toast.success('Usuário encontrado!')
    } catch {
      toast.dark(`${searchedUser} não foi encontrado`)
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </HeaderSection>
  )
}

export default Header
