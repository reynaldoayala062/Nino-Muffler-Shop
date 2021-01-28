import logo from '../images/cartoon-mechanic-man-icon-vector-19277413.png' 

const Header = () => {
    return(
        <div className="header-container">
      
            <img src={logo} className="logo" alt='logo' />
            
            <div className='phone'> 
                <p> 281-495-6055 </p>
            </div>
        </div>
    )
}

export default Header