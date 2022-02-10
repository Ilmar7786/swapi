import React, { useState } from 'react'
import { PeopleList } from 'components/peopleList'
import { Button } from 'react-bootstrap';

const HistoryPage = () => {
    const [history, setHistory] = useState(JSON.parse(sessionStorage.getItem('browsingHistory')) ?? [])

    return (
        <div>
            <h1>History</h1>
            <div className='text-end'>
                <Button
                    variant='danger'
                    size='lg'
                    className='mb-5 mt-2'
                    onClick={() => {
                        setHistory([])
                        sessionStorage.removeItem('browsingHistory')
                    }}
                >Clear history</Button>
            </div>

            {history.length ? <PeopleList peoples={history}/> : <p>The browsing history is empty</p>}
        </div>

    )
}

export { HistoryPage }