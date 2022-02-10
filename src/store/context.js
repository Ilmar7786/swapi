import { createContext, useState } from 'react'

export const CustomContext = createContext()

export const Context = props => {
    const [peoples, setPeoples] = useState([])

    const addPeoples = peoples => {
        setPeoples(peoples)
    }

    const getPeopleById = id => {
        return peoples.filter(people => people.id === id)
    }

    const value = {
        peoples,
        addPeoples,
        getPeopleById,
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}