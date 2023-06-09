import { createContext, useEffect, useState } from 'react'
import { users as data } from '../app/data/users'

const UsersContext = createContext()

function UsersContextProvider({ children }) {


    const [users, setUsers] = useState([])
    let newObj = {}
    function createUser(lim) {
        if (lim < users.length) {
            for (let i = lim; i < users.length; i++) {
                users.pop()
            }
            if (users.length != lim) {
                createUser(lim)
            }
        } else if (lim > users.length) {
            for (let i = users.length; i < lim; i++) {
                newObj = {
                    id: i,
                    form: [
                        {
                            paragraph: "Nombre",
                            value: "",
                        },
                        {
                            paragraph: "Apellido",
                            value: "",
                        },
                        {
                            paragraph: "DNI",
                            value: 0,
                        },
                    ]
                }
                users.push(newObj)
            }
        }
    }


    function editUser(id, newValue) {
        users[id].form[0].value = newValue[0]
        users[id].form[1].value = newValue[1]
        users[id].form[2].value = newValue[2]
        console.log(users)
    }

    useEffect(() => {
        setUsers(data)
    }, [])

    return (
        <UsersContext.Provider value={{
            users,
            createUser,
            editUser,
            clearUsers
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContextProvider
export { UsersContext };