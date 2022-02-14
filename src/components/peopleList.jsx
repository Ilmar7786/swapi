import React from 'react'
import { PeoplesCard } from 'components/peoplesCard'

const PeopleList = ({peoples = []}) => {

    return (
        <div className={'d-flex flex-wrap'}>
            {peoples.length ? peoples.map(item => <PeoplesCard key={item.url} {...item}/>) : <p>The browsing history is empty</p>}
        </div>
    )
}

export { PeopleList }