import React from 'react'
import { StyledTitle } from './styles/StyledTitle'

export const Title = ({title}) => {
  return (
    <StyledTitle id = {title}>{title}</StyledTitle>
  )
}