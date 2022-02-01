import React from 'react'
import { Container, Name, UserName, Description } from './styles'

//a ? significa que caso a pessoa não tenho bio então não precisa criar nada
const UserDetails = props => {
  return (
    <Container>
      <Name>{props.name}</Name>
      <UserName>{props.login}</UserName>
      <Description>{props?.bio}</Description>
    </Container>
  )
}

export default UserDetails
