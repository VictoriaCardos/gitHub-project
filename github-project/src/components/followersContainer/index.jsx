import {
  Section,
  Title,
  ListOfFollowersContainer,
  Foll,
  ProfilePicture
} from './styles'

import React, { useContext } from 'react'
import { context } from '../../context'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

const FollowersContainer = props => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Section>
      <Title>Seguidores de {props.name?.split(' ')[0]}</Title>

      <ListOfFollowersContainer>
        {(props?.followers).map(foll => (
          <Foll key={foll?.id}>
            <ProfilePicture src={foll.avatar_url} alt={foll.avatar_url} />

            <span>
              <h2
                onClick={async function redirectForHome() {
                  const response = await api.get(`/${foll.login}`)
                  const repos = await api.get(`/${foll.login}/repos`)
                  const followers = await api.get(`/${foll.login}/followers`)
                  const following = await api.get(`/${foll.login}/following`)

                  ctx.setUserData(response.data)
                  ctx.setRepos(repos.data)
                  ctx.setFollowersData(followers.data)
                  ctx.setFollowingData(following.data)
                  navigate(`/`)
                  console.log(ctx)
                }}
              >
                {foll?.login}
              </h2>
            </span>
          </Foll>
        ))}
      </ListOfFollowersContainer>
    </Section>
  )
}

export default FollowersContainer
