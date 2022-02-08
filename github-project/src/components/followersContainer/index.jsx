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

//está acontecendo o que eu queria porem ele está percorrendo e renderizando todos os followers, por isso mudei o onClick para o <h2>, vamos ver o que acontece.

const FollowersContainer = props => {
  const ctx = useContext(context)
  const navigate = useNavigate()

  async function redirectForHome(foll) {
    const response = await api.get(`/${foll.login}`)
    ctx.setUserData(response.data)
    navigate('/')
  }

  return (
    <Section>
      <Title>Seguidores de {props.name?.split(' ')[0]}</Title>

      <ListOfFollowersContainer>
        {(props?.followers).map(foll => (
          <Foll key={foll?.id}>
            <ProfilePicture src={foll.avatar_url} alt={foll.avatar_url} />

            <span>
              <h2>{foll?.login}</h2>
            </span>
          </Foll>
        ))}
      </ListOfFollowersContainer>
    </Section>
  )
}

export default FollowersContainer
