import React, { useContext } from 'react'

import ReposContainer from '../components/reposContainer/index'
import { context } from '../context/index'

const Repos = () => {
  const ctx = useContext(context)
  return <ReposContainer name={ctx.userData.name} repos={ctx.repos} />
}

export default Repos
