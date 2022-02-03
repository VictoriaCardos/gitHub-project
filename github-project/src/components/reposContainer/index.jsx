import React from 'react'
import { Section, Title, ListOfReposContainer, Repo } from './styles'

const ReposContainer = props => {
  //inserir uma tela perguntando se o usuário deseja ser direcionado para o git
  return (
    <Section>
      <Title>Repositórios de {props.name.split(' ')[0]}</Title>
      <ListOfReposContainer>
        {(props?.repos).map(repo => (
          <Repo
            onClick={() => (window.location.href_blank = repo?.html_url)}
            key={repo?.id}
          >
            <h2>{repo?.name}</h2>
            <p>{repo?.description}</p>
            <h3>{repo?.language}</h3>
          </Repo>
        ))}
      </ListOfReposContainer>
    </Section>
  )
}

export default ReposContainer
