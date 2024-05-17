import { Link } from 'react-router-dom'
import './header.scss'
import React from 'react'

const Header = () => {
return (
    <nav>
        <div className="nav__left">
            <a href="">Tasty</a>
        </div>
        <ul >
            <li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'/basket'}>Basket</Link></li>
            <li>Specaliest</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </nav>
)
}

export default Header
                            