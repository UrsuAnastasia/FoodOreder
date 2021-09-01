//styled-components
import styled from 'styled-components'

//react-hooks
import React, { useState } from 'react';

//react router 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

//constants
import { Auth, App as ProtectedRoutes } from "./CONSTANTS";

//redux
import { useSelector } from "react-redux";

//logical-components
import Authentification from '../components/authentification/authentification'
import HomePage from '../components/home/homePage'

const PublicRoutes = () => {
  const [isLoggedIn, setIsLogin] = useState(false);
  return <Wrapper>
    <Switch>
      <Route path={Auth.LOGIN}>
        {
          isLoggedIn ? <Redirect to="/" /> : <Authentification />
        }
      </Route>
      <Route path="/Home">
        {
          isLoggedIn ? <Redirect to="/" /> : <HomePage />
        }
      </Route>
    </Switch>
  </Wrapper>
}


export default PublicRoutes;

const Wrapper = styled.div`
width:100%;
height:100vh;
background:${props => props.theme.Color.White};
`
