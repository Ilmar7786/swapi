import React from 'react'
import { PeoplesCard } from 'components/peoplesCard'

const PeopleList = ({peoples = []}) => {

    return (
        <div className={'d-flex flex-wrap justify-content-center'}>
            {peoples.map(item => <PeoplesCard key={item.url} {...item}/>)}
        </div>
    )
}

export { PeopleList }