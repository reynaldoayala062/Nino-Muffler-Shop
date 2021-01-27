import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <NavLink to='/home'> Home </NavLink>

            <NavLink to='/about-us'> About Us </NavLink>

            <NavLink to='/services'> Services </NavLink>

            <NavLink to='/reviews'> Home </NavLink>

            <NavLink to='/before-after'> Before and After </NavLink>

            <NavLink to='/located'> Located </NavLink>

        </div>
    )
}

export default Navbar