import React, {useContext} from 'react'
import {Redirect} from 'react-router-dom'
import { Context } from './../Context';



const PrivateRoute = ({component:Component}) => {
    const state = useContext(Context)
    const [isLogged] = state.userApi.isLogged


    if(isLogged) return <Component/>


    return <Redirect to="/"/>
}

export default PrivateRoute
