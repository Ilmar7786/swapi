import React from 'react'
import { Card } from 'react-bootstrap'
import { useMoment } from 'hooks/moment'
import { useNavigate } from 'react-router-dom'

const PeoplesCard = (props) => {
    const moment = useMoment()
    const navigate = useNavigate()

    const onShowCard = people => {
        const id = +/\d+/.exec(people.url)
        navigate(`/people/${id}`)
    }

    return (
        <Card style={{width: '280px', margin: '10px 0'}} className='m-3'>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
            <button
                className='btn btn-primary m-2'
                onClick={() => {
                    onShowCard(props)
                }}
            >show
            </button>
            <Card.Footer>
                <Card.Subtitle className={'mb-2'}>Date creation: {moment(props.created)}</Card.Subtitle>
                <Card.Subtitle>Date edited: {moment(props.edited)}</Card.Subtitle>
            </Card.Footer>
        </Card>
    )
}

export { PeoplesCard }