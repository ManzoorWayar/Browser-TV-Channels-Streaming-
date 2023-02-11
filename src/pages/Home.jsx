import React from 'react'
import { Container } from 'react-bootstrap'
import AfghanTv from '../components/AfghanTv'
import Documentary from '../components/Documentary'
import Kids from '../components/Kids'
import News from '../components/News'
import Sport from '../components/Sport'
import Travel from '../components/Travel'

const Home = () => {
    return (
        <Container>
            <AfghanTv />
            <News />
            <Sport />
            <Kids />
            <Travel />
            <Documentary />
        </Container>
    )
}

export default Home