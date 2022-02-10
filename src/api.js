import { API_URL } from './config'


const getAllPeople = async () => {
    const response = await fetch(API_URL)
    return await response.json()
}

const getPeopleById = async id => {
    const response = await fetch(`${API_URL}/${id}`)
    return await response.json()
}

const searchPeople = async peopleName => {
    const response = await fetch(`${API_URL}?search=${peopleName}`)
    return await response.json()
}

export { getPeopleById, searchPeople, getAllPeople }