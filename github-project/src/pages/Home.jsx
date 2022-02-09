import React, { useContext } from 'react'
import { context } from '../context/index'

import MainContainer from '../components/containerPrincipal/index'
import Header from '../components/Header/index'
import UserContainer from '../components/userContainer/index'
import UserPicture from '../components/userPicture/index'
import UserDetails from '../components/userDetails/index'
import UserNumbers from '../components/userNumbers/index'

const Home = () => {
  const ctx = useContext(context)

  return (
    <>
      <MainContainer>
        <Header />
      </MainContainer>
      <UserContainer>
        {ctx.userData?.name ? (
          <>
            <UserPicture
              url={ctx.userData?.avatar_url}
              alternativeText={ctx.userData?.login}
            />

            <UserDetails
              name={ctx.userData?.name}
              bio={ctx.userData?.bio}
              login={ctx.userData?.login}
            />

            <UserNumbers
              repos={ctx.userData?.public_repos}
              followers={ctx.userData?.followers}
              following={ctx.userData?.following}
            />
          </>
        ) : undefined}
      </UserContainer>
    </>
  )
}

export default Home
