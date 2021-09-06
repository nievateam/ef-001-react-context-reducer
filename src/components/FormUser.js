import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function FormUser() {


    const ctx = useContext(UserContext)

    const { addUser } = ctx


    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    })


    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const sendData = (e) => {
        e.preventDefault()

        addUser(user)

    }


    return (
        <div>
            <h1>Crea un usuario</h1>

            <form onSubmit={ (event) => { sendData(event) } }>
                <h2>Escribe el nombre</h2>
                <input 
                    name="first_name"
                    onChange={ event => { handleChange(event) }}
                />
                <h2>Escribe el apellido</h2>
                <input 
                    name="last_name"
                    onChange={ event => { handleChange(event) }}
                />

                <h2>Escribe tu correo</h2>
                <input 
                    name="email"
                    onChange={ event => { handleChange(event) }}
                />

                <button
                    type="submit"
                >
                    Crear usuario
                </button>

            </form>

        </div>
    )
}
