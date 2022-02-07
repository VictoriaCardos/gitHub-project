import React, { useState } from 'react'
import { Section, Title, ListOfReposContainer, Repo } from './styles'
import Modal from 'react-modal'

const ReposContainer = props => {
  //inserir uma tela perguntando se o usuário deseja ser direcionado para o git
  //preciso testar o modal

  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Section>
      <Title>Repositórios de {props.name.split(' ')[0]}</Title>
      <ListOfReposContainer>
        {(props?.repos).map(repo => (
          <>
            <Repo onClick={openModal} key={repo?.id}>
              <h2>{repo?.name}</h2>
              <p>{repo?.description}</p>
              <h3>{repo?.language}</h3>
            </Repo>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h3>Deseja ser direcionado para este repositório no GitHub?</h3>
              <button onClick={closeModal}>close</button>
              <button onClick={() => (window.location.href = repo?.html_url)}>
                Sim!
              </button>
            </Modal>
          </>
        ))}
      </ListOfReposContainer>
    </Section>
  )
}

export default ReposContainer
