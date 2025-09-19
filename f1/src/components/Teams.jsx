import '../App.css'

export default function Teams() {
    return(
        <>
        <div className='navbar'>
            <img className='logo' src='/src/assets/F1-Logo.svg'></img>
        </div>
        <div className='container'>
            <h1>F1 Teams 2025</h1>
            <div className='team-section'>
                <div className='team-card' id='mclaren1'>
                    <h4>McLaren</h4>
                    <p>Oscar Pisatri</p>
                    <p>Lando Norris</p>
                    <img src='"https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp'/>
                    <img className='team-img' src='https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp'/>
                    
                </div>
                <div className='team-card' id='ferrari1'>
                    <h4>Ferrari</h4>
                    <p>Oscar Pisatri</p>
                    <p>Lando Norris</p>
                    <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp'/>
                    <img className='team-img' src='https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/ferrari/2025ferraricarright.webp'/>
                </div>
            </div>
        </div>
        </>
    )
}