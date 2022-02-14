import React, { useState } from 'react'
import { PeopleList } from 'components/peopleList'


const HomePage = () => {
    const [history] = useState(JSON.parse(sessionStorage.getItem('browsingHistory')) ?? [])

    return (
        <div>
            <h1 className='text-center m-3'>The Star Wars </h1>
            <p className='fs-3'>History</p>

            <PeopleList peoples={history}/>
        </div>
    )
}

export { HomePage }