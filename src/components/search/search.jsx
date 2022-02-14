import React, { useEffect, useState } from 'react'
import style from './search.module.css'

import { PeopleList } from 'components/peopleList'
import { searchPeople } from 'api'
import { Preloader } from 'components/Preloader'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const [resultSearch, setResultSearch] = useState([])
    const [value, setValue] = useState('')
    const [isActive, setIsActive] = useState(false)
    const [loading, setLoading] = useState(true)
    const {pathname} = useLocation()

    useEffect(() => {
        setIsActive(false)
    }, [pathname])

    const onChangeSearch = e => {
        setValue(e.target.value)
    }

    const onSubmitSearch = e => {
        e.preventDefault()
        if (value) {
            setLoading(true)
            setIsActive(true)
            searchPeople(value).then(data => {
                setResultSearch(data.results)
                setLoading(false)
            })
            setValue('')
        }
    }

    const onClose = () => {
        setIsActive(!isActive)
    }

    return (
        <div className='my-2 my-lg-0'>
                <form onClick={onSubmitSearch} className='d-flex'>
                <input
                    className='form-control mr-sm-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    onChange={onChangeSearch}
                    value={value}
                />
                <button className='btn btn-outline-success my-2 my-sm-0' >Search</button>
            </form>
            <div
                className={style.searchResult}
                style={{display: isActive ? 'flex' : 'none'}}
            >
                <div className={style.container}>
                    {
                        loading
                            ? <Preloader/>
                            : (
                                <>
                                    <h1 className={style.title}>Search result:</h1>
                                    {resultSearch.length ? <PeopleList peoples={resultSearch}/> : <p>Nothing found</p>}
                                </>
                            )
                    }
                    <span
                        className={style.close}
                        onClick={onClose}
                    >X</span>
                </div>
            </div>
        </div>
    )
}

export { Search }