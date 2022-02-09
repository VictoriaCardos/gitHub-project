import React, { useContext } from 'react'
import ButtonBack from '../components/Button'
import FollowersContainer from '../components/followersContainer'
import { context } from '../context'

const Followers = () => {
  const ctx = useContext(context)

  return (
    <>
      <FollowersContainer
        name={ctx.userData.name}
        followers={ctx.followersData}
      />
      <ButtonBack />
    </>
  )
}

export default Followers
