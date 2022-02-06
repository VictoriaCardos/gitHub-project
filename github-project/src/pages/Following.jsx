import React, { useContext } from 'react'
import Container from '../components/containerPrincipal'
import ButtonBack from '../components/Button'

import FollowingContainer from '../components/followingContainer'
import { context } from '../context'

const Following = () => {
  const ctx = useContext(context)

  return (
    <Container>
      <FollowingContainer
        name={ctx.userData.name}
        following={ctx.followingData}
      />
      <ButtonBack />
    </Container>
  )
}

export default Following
