import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <div>
        <Input id="email" label="email" required></Input>
        <Input id="senha" label="senha" type="password"></Input>
        <Button/>
    </div>
  )
}

export default Form