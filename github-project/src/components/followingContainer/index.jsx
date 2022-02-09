import {
  Section,
  Title,
  ListOfFollowingContainer,
  Foll,
  ProfilePicture
} from './styles'
import React, { useContext } from 'react'
import api from '../../services/api'
import { context } from '../../context'
import { useNavigate } from 'react-router-dom'

const FollowingContainer = props => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  return (
    <Section>
      <Title>{props.name?.split(' ')[0]} está seguindo:</Title>

      <ListOfFollowingContainer>
        {props.following.map(foll => (
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
      </ListOfFollowingContainer>
    </Section>
  )
}

export default FollowingContainer
