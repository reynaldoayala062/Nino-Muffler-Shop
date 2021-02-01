import acura from '../images/Acura.png'
import amg from '../images/Amg.png'
import audi from '../images/Audi.jpg'
import bmw from '../images/Bmw.jpg'
import chrysler from '../images/Chrysler.png'
import corvette from '../images/Corvette.png'
import dodge from '../images/Dodge.png'
import ferrari from '../images/Ferrari.png'
import honda from '../images/Honda.jpg'
import hyundai from '../images/Hyundai.png'
import jeep from '../images/Jeep.jpg'
import lambo from '../images/Lamorghini.png'
import lexus from '../images/Lexus.png'
import mercedes from '../images/Mercedes.png'
import mitsubishi from '../images/Mitsubishi.png'
import mustang from '../images/Mustang.png'
import nissan from '../images/Nissan.png'
import porsche from '../images/Porsche.jpg'
import ram from '../images/Ram.png'
import subaru from '../images/Subaru.png'
import toyota from '../images/Toyota.jpg'
import volkwagen from '../images/Volkswagen.png'

const logos = [ acura, amg, audi, bmw, chrysler, corvette, dodge, ferrari, honda, hyundai, jeep, lambo, lexus, mercedes, mitsubishi, mustang, nissan, porsche, ram, subaru, toyota, volkwagen]

const logo = logos.map((l) => 
    <div className='car'>
        <img className='car-logo' src={l} alt='logo'/>
    </div>
)

const Services = () => {
    return(
        <div className='logo-container'>
            {logo}
        </div>
    )
}

export default Services

