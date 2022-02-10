import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap'

import { HomePage } from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HistoryPage } from './pages/HistoryPage'
import { NotFound } from './pages/NotFoundPage'
import { Header } from './components/header'
import PeopleCardPage from './pages/PeopleCardPage'
import { Context } from './store/context'

const App = () => {
    return (
        <Context>
            <BrowserRouter>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='history' element={<HistoryPage/>}/>
                        <Route path='people/:id' element={<PeopleCardPage/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </Context>
    )
}

export { App }
