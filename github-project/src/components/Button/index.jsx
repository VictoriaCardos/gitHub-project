import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './styles'
import { FiChevronsLeft } from 'react-icons/fi'

const ButtonBack = () => {
  const navigate = useNavigate()

  return (
    <Button className="goBack" onClick={() => navigate('/')}>
      <FiChevronsLeft color="#fff" size={24} />
    </Button>
  )
}

export default ButtonBack
