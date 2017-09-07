import { PureComponent } from 'react'
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import User from './User'
import { Field, reduxForm } from 'redux-form'
import UserListsContainer from '../../containers/UserListsContainer'
import Router from 'next/router'

class UserForm extends React.PureComponent {
    
    componentDidMount() {
        const {getUser} = this.props
        if (getUser){
            this.props.getUser()
        }
        
    }

    render() {

        const {
            handleSubmit, userCreate, errorMsg, createSussess, user
        } = this.props

        if (createSussess) {
            Router.push('/users')
            return (
                <div>
                    <div>success</div>
                </div>
            )
        }
        return (
            <form onSubmit={handleSubmit(userCreate)} >
                <div>
                    <label htmlFor="username">username</label>
                    <Field id='username' name="username" component="input" type="text" />
                    {errorMsg && errorMsg.username ? <p>{errorMsg.username}</p> : <p></p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field id='email' name="email" component="input" type="email" />
                    {errorMsg && errorMsg.email ? <p>{errorMsg.email}</p> : <p></p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        )

    }
}

UserForm = reduxForm({
    form: 'user'
})(UserForm)


export default UserForm