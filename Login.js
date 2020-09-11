import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://cdn0.iconfinder.com/data/icons/cool-social-networks-logos-1/512/Whatsapp-512.png' alt='' />
                <div className='login__text'>
                    <h1>Login to WSpot</h1>
                </div>
                <Button onClick={signIn}>Sign in with GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
