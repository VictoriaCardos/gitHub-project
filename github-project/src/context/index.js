import React, { createContext, useState } from 'react'

export const context = createContext()

export const ContextProvider = props => {
  const [userData, setUserData] = useState({})
  const [repos, setRepos] = useState({})
  const [followersData, setFollowersData] = useState({})

  return (
    <context.Provider
      value={{
        userData,
        repos,
        followersData,
        setUserData,
        setRepos,
        setFollowersData
      }}
    >
      {props.children}
    </context.Provider>
  )
}
