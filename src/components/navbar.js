import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-container'>

            <div className='navbar'>
        
                <NavLink to='/home' className='nav-item'> Home </NavLink>

                <NavLink to='/about-us' className='nav-item'> About Us </NavLink>

                <NavLink to='/services' className='nav-item'> Services </NavLink>

                <NavLink to='/before-after' className='nav-item'> Before and After </NavLink>

                <NavLink to='/located' className='nav-item'> Located </NavLink>

            </div>

        </div>
    )
}

export default Navbar