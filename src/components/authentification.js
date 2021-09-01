import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styled-components
import styled from 'styled-components';
import Label from '../styled-components/label';
import Input from '../styled-components/input';
import Button from '../styled-components/button';

//assets
import CoffeeImage from '../assets/coffee.jpg';

//final form
import { Form, Field } from "react-final-form";

const Authentification = () => {

  const [isLogin, setIsLogin] = useState(false);

  const onSubmit = (event) => {
    setIsLogin(true);
  }



  return <Wrapper >
    <Container form="true">
      <WrapperContainer>
        <Label sizeComponent={props => props.theme.Size.mediumSize} componentColor={props => props.theme.Color.rootBrew}>
          {isLogin ? 'Sing Up' : 'Login'}
        </Label>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) =>
            <form style={formStyle} onSubmit={onSubmit}>
              <InputContainer>
                <Label sizeComponent={props => props.theme.Size.normalSize} componentColor={props => props.theme.Color.brown}>Enter your email</Label>
                <Field name="email" placeholder="Email">
                  {({ input, meta }) => (
                    <Input />
                  )}
                </Field>
                <Label sizeComponent={props => props.theme.Size.normalSize} componentColor={props => props.theme.Color.brown}>Enter your password</Label>
                <Field name="password" component={Input} placeholder="Password">
                  {
                    ({ input, meta }) => (
                      <Input />anastastia
                    )
                  }
                </Field>
                <Label sizeComponent={props => props.theme.Size.small}>
                  Forgot password?
                  <Link>Reset it</Link>
                </Label>
              </InputContainer>
              <Button colorComponent={props => props.theme.Color.white} backgroundColor={props => props.theme.Color.brown} sizeComponent="120px">
                {isLogin ? 'Sing Up' : 'Login'}
              </Button>
              <Label sizeComponent={props => props.theme.Size.small}>
                You don't have an account?
                  <Link>Register</Link>
              </Label>
            </form>
          }
        </Form>
      </WrapperContainer>
    </Container>
    <Container />
  </Wrapper>
};

export default Authentification;

const Wrapper = styled.div`
width:100%;
height:85vh;
display:flex;
align-items: center;
justify-content: center;
background:#fff;
`
const Container = styled.div`
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
width:50%;
height:100%;
background: ${props => props.form ? props.theme.Color.white : `url(${CoffeeImage})`};
background-size: cover;
`
const WrapperContainer = styled.div`
width:70%;
height:90%;
display:flex;
align-items:center;
justify-content: space-around;
flex-direction:column;
`;


const InputContainer = styled.div`
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content:space-around;
flex-direction: column;
padding:1rem 0;
`
const formStyle = {
  width: '100%',
  height: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
}
