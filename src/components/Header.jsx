import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Container>
            <nav className='d-flex align-items-center justify-content-between pt-2'>
                <Link to='/'>
                    <div className='d-flex gap-2 align-items-center'>
                        <h3>RAHA</h3>
                        <sub>TV</sub>
                    </div>
                </Link>
                <Link to='about-us'>About Us</Link>
            </nav>
        </Container>
    )
}

export default Header