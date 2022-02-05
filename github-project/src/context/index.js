import React, { createContext, useState } from 'react'

export const context = createContext()

export const ContextProvider = props => {
  const [userData, setUserData] = useState({})
  const [repos, setRepos] = useState({})
  const [followersData, setFollowersData] = useState({})
  const [followingData, setFollowingData] = useState({})

  return (
    <context.Provider
      value={{
        userData,
        repos,
        followersData,
        followingData,
        setUserData,
        setRepos,
        setFollowersData,
        setFollowingData
      }}
    >
      {props.children}
    </context.Provider>
  )
}
