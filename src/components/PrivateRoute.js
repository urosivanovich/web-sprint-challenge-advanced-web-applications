import React from "react";
import { Route, Redirect } from "react-router-dom";

const  PrivateRoute = (props) => {
  const {component:Component, ...rest} = props

  return (<Route {...rest} render={() => {
    if(localStorage.getItem('token')){
      return (<Component {...rest} />)
    }else{
      return <Redirect to='/' />
    }
  }}/>);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute