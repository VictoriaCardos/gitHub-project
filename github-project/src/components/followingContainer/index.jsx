import {
  Section,
  Title,
  ListOfFollowingContainer,
  Foll,
  ProfilePicture
} from './styles'
import React from 'react'

const FollowingContainer = props => {
  return (
    <Section>
      <Title>{props.name.split(' ')[0]} está seguindo:</Title>

      <ListOfFollowingContainer>
        {props.following.map(foll => (
          <Foll
            onClick={() => (window.location.href = foll?.html_url)}
            key={foll?.id}
          >
            <ProfilePicture src={foll.avatar_url} alt={foll.avatar_url} />
            <span>
              <h2>{foll?.login}</h2>
            </span>
          </Foll>
        ))}
      </ListOfFollowingContainer>
    </Section>
  )
}

export default FollowingContainer
