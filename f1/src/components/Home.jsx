import '../App.css' 

export default function Home() {

return(
    <>
    <div className='navbar'>
        <img className='logo' src='/src/assets/F1-Logo.svg'></img>
    </div>
    <div className='container'>
        <h1>F1 Drivers 2025</h1>
        <div className='driver-section'>
            <div className='card' id='mclaren'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp'/>
                <h2>Oscar Pisatri</h2>
                <h2>McLaren</h2>
                <h2>81</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp'/>
                <h2>Lando Norris</h2>
                <h2>McLaren</h2>
                <h2>4</h2>
            </div>
            <div className='card' id='ferrari'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01right.webp'/>
                <h2>Charles Leclerc</h2>
                <h2>Ferrari</h2>
                <h2>16</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01right.webp'/>
                <h2>Lewis Hamilton</h2>
                <h2>44</h2>
                <h2>Ferrari</h2>            
            </div>
            <div className='card' id='mercedes'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01right.webp'/>
                <h2>George Russell</h2>
                <h2>Mercedes</h2>
                <h2>63</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/andant01/2025mercedesandant01right.webp'/>
                <h2>Kimi Antonelli</h2>
                <h2>Mercedes</h2>
                <h2>12</h2>
            </div>
            <div className='card' id='redbull'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp'/>
                <h2>Max Verstappen</h2>
                <h2>Red Bull Racing</h2>
                <h2>1</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/yuktsu01/2025redbullracingyuktsu01right.webp'/>
                <h2>Yuki Tsunoda</h2>
                <h2>Red Bull Racing</h2>
                <h2>22</h2>
            </div>
            <div className='card' id='williams'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/alealb01/2025williamsalealb01right.webp'/>
                <h2>Alexander Albon</h2>
                <h2>Williams</h2>
                <h2>23</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/williams/carsai01/2025williamscarsai01right.webp'/>
                <h2>Carlos Sainz </h2>
                <h2>Williams</h2>
                <h2>55</h2>
            </div>
            <div className='card' id='aston'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/lanstr01/2025astonmartinlanstr01right.webp'/>
                <h2>Lance Stroll</h2>
                <h2>Aston Martin</h2>
                <h2>18</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/astonmartin/feralo01/2025astonmartinferalo01right.webp'/>
                <h2>Fernando Alonso</h2>
                <h2>Aston Martin</h2>
                <h2>14</h2>
            </div>
            <div className='card' id='bulls'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/racingbulls/lialaw01/2025racingbullslialaw01right.webp'/>
                <h2>Liam Lawson</h2>
                <h2>Racing Bulls</h2>
                <h2>30</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/racingbulls/isahad01/2025racingbullsisahad01right.webp'/>
                <h2>Isack Hadjar</h2>
                <h2>Racing Bulls</h2>
                <h2>6</h2>
            </div>
            <div className='card' id='kick'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksauberlogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/nichul01/2025kicksaubernichul01right.webp'/>
                <h2>Nico Hulkenberg</h2>
                <h2>Kick Sauber</h2>
                <h2>27</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/kicksauber/gabbor01/2025kicksaubergabbor01right.webp'/>
                <h2>Gabriel Bortoleto</h2>
                <h2>Kick Sauber</h2>
                <h2>5</h2>
            </div>
            <div className='card' id='haas'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/haas/2025haaslogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/estoco01/2025haasestoco01right.webp'/>
                <h2>Esteban Ocon</h2>
                <h2>Haas</h2>
                <h2>31</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/haas/olibea01/2025haasolibea01right.webp'/>
                <h2>Oliver Bearman</h2>
                <h2>Haas</h2>
                <h2>81</h2>
            </div>
            <div className='card' id='alpine'>
                <img src='https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/alpine/2025alpinelogowhite.webp'/>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/piegas01/2025alpinepiegas01right.webp'/>
                <h2>Pierre Gasly</h2>
                <h2>Alpine</h2>
                <h2>10</h2>
                <img className='driver-img' src='https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/alpine/fracol01/2025alpinefracol01right.webp'/>
                <h2>Franco Colapinto</h2>
                <h2>Alpine</h2>
                <h2>43</h2>
            </div>


            
        </div>
    </div>
    
    </>
)

}