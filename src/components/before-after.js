import headers from '../images/Headers.png'
import rim_1 from '../images/Rim-1.png'
import rim_2 from '../images/Rim-2.png'
import rim_3 from '../images/Rim-3.png'
import rim_4 from '../images/Rim-4.png'
import rim_5 from '../images/Rim-5.png'
import muffler_del_1 from '../images/Muffler-Delete-1.png'
import muffler_del_2 from '../images/Muffler-Delete-2.png'
import welding from '../images/Welding.png'

const AllPictures = [ headers, rim_1, rim_2, rim_3, rim_4, rim_5, muffler_del_1, muffler_del_2, welding]

const picture = AllPictures.map((pic) => 
    <div className='ba-pic'>
        <img className='img'src={pic} alt='' />
    </div>  
)

const BeforeAfter = () => {
    return(
        <div>
            <h1> Before/After </h1>
            <div className='ba-container'>
                {picture}
            </div>
            
        </div>
    )
}

export default BeforeAfter 