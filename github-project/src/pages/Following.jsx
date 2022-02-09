import React, { useContext } from 'react'

import ButtonBack from '../components/Button'

import FollowingContainer from '../components/followingContainer'
import { context } from '../context'

const Following = () => {
  const ctx = useContext(context)

  return (
    <>
      <FollowingContainer
        name={ctx.userData.name}
        following={ctx.followingData}
      />
      <ButtonBack />
    </>
  )
}

export default Following
