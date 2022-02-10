import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPeopleById } from '../api'
import { Button } from 'react-bootstrap'
import { Preloader } from '../components/Preloader'

const PeopleCardPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const storeHistory = JSON.parse(sessionStorage.getItem('browsingHistory')) ?? []

        const addHistory = data => {
            if (!storeHistory.filter(people => people.name === data.name).length)
                storeHistory.push(data)
            sessionStorage.setItem('browsingHistory', JSON.stringify(storeHistory))
        }


        setLoading(true)
        getPeopleById(id).then(data => {
            setPeople(data)
            setLoading(false)
            addHistory(data)
        })
    }, [id])

    if (loading) return <Preloader/>

    return (
        <div className='fs-5'>
            <h1>{people.name}</h1>
            <div><span className='fw-bold'>Year:</span> {people.birth_year}</div>
            <div><span className='fw-bold'>Gender:</span> {people.gender}</div>
            <div><span className='fw-bold'>Eye color:</span> {people.eye_color}</div>
            <div><span className='fw-bold'>Hair color:</span> {people.hair_color}</div>
            <div><span className='fw-bold'>Height:</span> {people.height}</div>
            <div><span className='fw-bold'>Mass:</span> {people.mass}</div>
            <div><span className='fw-bold'>Skin color:</span> {people.skin_color}</div>

            <Button
                variant='primary'
                size='lg'
                className='mt-5'
                onClick={() => navigate('/')}
            >Home</Button>
        </div>
    )
}

export default PeopleCardPage