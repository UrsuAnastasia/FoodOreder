//react hooks 
import React, { useState } from 'react';

//styled-components
import styled from 'styled-components'
import Label from '../../styled-components/label'
import Input from '../../styled-components/input'
import Button from '../../styled-components/button'
//final-form
import { Form, Field } from 'react-final-form'

//logical-components
const Authentification = () => {

  const onSubmitHandler = () => { }

  return <Wrapper>
    <Container>
      <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.mediumSize}>Login</Label>
      <Form onSubmit={onSubmitHandler}
        render={({ handleSubmit }) => (
          <form style={formStyle} onSubmit={handleSubmit}>
            <InputContainer>
              <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.normalSize}>Enter your email</Label>
              <Field name="email" placeholder="Enter your email" component={Input} />
              <Label colorComponent={props => props.theme.Color.Black} sizeComponent={props => props.theme.Size.normalSize}>Enter your password</Label>
              <Field name="password" placeholder="Enter your password" component={Input} />
            </InputContainer>
            <Button sizeComponent="50%" heightComponent="30%" background="primary" type="submit">
              <Label colorComponent={props => props.theme.Color.White} sizeComponent={props => props.theme.Size.normalSize}>Login</Label>
            </Button>
          </form>
        )}
      />
    </Container>
  </Wrapper>
}

export default Authentification;

const Wrapper = styled.div`
width: 100%;
height:87vh;
display:flex;
align-items:center;
justify-content: center;
background-color: #fff;
overflow-y: hidden;
`

const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-direction: column;
width: 20%;
height: 50%;
background-color: #2f4353;
background-color: #ffffff;
background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
`

const InputContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items:space-between;
justify-content: space-around;
flex-direction: column;
padding: 1rem 0;
`
//inline style
const formStyle = {
  width: '80%',
  height: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
}
