import React, { useContext, useEffect, useState } from 'react'
import { getAllPeople } from '../api'
import { PeopleList } from 'components/peopleList'
import { CustomContext } from 'store/context'
import { Preloader } from 'components/Preloader';


const HomePage = () => {
    const [loading, setLoading] = useState(false)
    const {peoples, addPeoples} = useContext(CustomContext)

    useEffect(() => {
        if (!peoples.length) {
            setLoading(true)
            getAllPeople().then(data => {
                addPeoples(data.results)
                setLoading(false)
            })
        }
    }, [])

    if (loading) return <Preloader/>

    return (
        <>
            <h1>The Star Wars</h1>
            {peoples.length
                ? <PeopleList peoples={peoples}/>
                : <p>The list is empty</p>
            }

        </>
    )
}

export { HomePage }