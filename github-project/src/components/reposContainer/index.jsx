import React, { useState } from 'react'
import { Section, Title, ListOfReposContainer, Repo } from './styles'
import Modal from 'react-modal'

const ReposContainer = props => {
  //inserir uma tela perguntando se o usuário deseja ser direcionado para o git
  //preciso testar o modal

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Section>
      <Title>Repositórios de {props.name?.split(' ')[0]}</Title>
      <ListOfReposContainer>
        {(props?.repos).map(repo => (
          <>
            <Repo onClick={openModal} key={repo?.id}>
              <h2>{repo?.name}</h2>
              <p>{repo?.description}</p>
              <h3>{repo?.language}</h3>
            </Repo>
            <Modal
              key={repo?.node_id}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              overlayClassName="react-modal-overlay"
              className="react-modal-content"
              contentLabel="Example Modal"
            >
              <h3>Deseja ser direcionado para o repositório no GitHub?</h3>
              <button className="react-modal-close" onClick={closeModal}>
                Fechar
              </button>
              <div className="optionsButtons">
                <button onClick={() => (window.location.href = repo?.html_url)}>
                  Sim!
                </button>
                <button onClick={closeModal}>Não!</button>
              </div>
            </Modal>
          </>
        ))}
      </ListOfReposContainer>
    </Section>
  )
}

export default ReposContainer
