import React, { useContext } from 'react'

import Container from '../components/containerPrincipal'
import ButtonBack from '../components/Button'

import ReposContainer from '../components/reposContainer/index'
import { context } from '../context/index'

const Repos = () => {
  const ctx = useContext(context)

  return (
    <Container>
      <ReposContainer name={ctx.userData.name} repos={ctx.repos} />
      <ButtonBack />
    </Container>
  )
}

export default Repos
