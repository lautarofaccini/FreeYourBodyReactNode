import { createContext, useEffect, useState } from 'react'
import { users as data } from '../app/data/users'

const UsersContext = createContext()

function UsersContextProvider({ children }) {


    const [users, setUsers] = useState([])
    let newObj = {}
    function createUser(lim) {
        if (lim < users.length){
            for (let i = lim; i < users.length; i++) {
                users.pop()
            } 
            if (users.length != lim){
                createUser(lim)
            }
        } else if (lim > users.length){
            for (let i = users.length; i < lim; i++) {
                newObj = {
                    id: i,
                    form: [
                        {
                            paragraph: ["Nombre"],
                            name: "input_text",
                            type: "text",
                            values: [""],
                            required: true,
                        },
                        {
                            paragraph: ["Apellido"],
                            name: "input_text",
                            type: "text",
                            values: [""],
                            required: true,
                        },
                        {
                            paragraph: ["Dni"],
                            name: "input_text",
                            type: "text",
                            values: [""],
                            required: true,
                        },
                ]}
                users.push(newObj)
            } 
        }
    }

    function deleteUser(id) {
        setUsers(users.filter(user => user.id >= id))
    }
    function deleteAll() {
        setUsers(users.filter(user => user.id === 99))
    }

    useEffect(() => {
        setUsers(data)
    }, [])

    return (
        <UsersContext.Provider value={{
            users,
            createUser,
            deleteUser,
            deleteAll
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider
export { UsersContext };