import React, { useContext } from 'react'

import ButtonBack from '../components/Button'

import ReposContainer from '../components/reposContainer/index'
import { context } from '../context/index'

const Repos = () => {
  const ctx = useContext(context)

  return (
    <>
      <ReposContainer name={ctx.userData.name} repos={ctx.repos} />
      <ButtonBack />
    </>
  )
}

export default Repos
