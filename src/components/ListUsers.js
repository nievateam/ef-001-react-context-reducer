import React, { useEffect, useContext } from 'react'
import UserContext from '../context/UserContext'

export default function ListUsers() {

    const ctx = useContext(UserContext)

    const { users, readUsers } = ctx

    useEffect(() => {

        const getResponse = async () => {
            
            await readUsers()
            return 
        }

        getResponse()

    }, [])

    return (
        <div>
            <h1>Listado de usuarios</h1>
            {
                users.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.first_name}</p>
                            <p>{e.last_name}</p>
                            <p>{e.email}</p>
                        </div>
                    )
                })
            }            
        </div>
    )
}
