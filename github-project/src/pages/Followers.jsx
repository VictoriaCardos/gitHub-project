import React, { useContext } from 'react'
import Container from '../components/containerPrincipal'
import ButtonBack from '../components/Button'
import FollowersContainer from '../components/followersContainer'
import { context } from '../context'

const Followers = () => {
  const ctx = useContext(context)

  return (
    <Container>
      <FollowersContainer
        name={ctx.userData.name}
        followers={ctx.followersData}
      />
      <ButtonBack />
    </Container>
  )
}

export default Followers
