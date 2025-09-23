import '../App.css'
import { Link } from 'react-router-dom'
export default function Store() {
    return(
        <>
        <div className='navbar'>
            <Link to={'/'}>
            <img className='logo' src='/src/assets/F1-Logo.svg'></img>
            </Link>
            <Link to={'/teams'}>
            <button className='teams'>Teams</button>
            </Link>
        </div>
        <div className='container'>
            <img className='poster1' src='https://f1store.formula1.com/content/ws/all/2e29aeac-e20a-42d1-87ee-4e642a0476e1__1600X600.png'/>
            <h6>Verstappen Wins<br/> in Baku</h6>
                <button className='shop-now-poster'>Shop Now</button>
            <h7>Celebrate the victory</h7>
        </div>
        </>
    )
}