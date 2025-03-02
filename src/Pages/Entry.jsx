import CountDown from '../Components/CountDown'
import { useContext } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function Entry(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
            <div className="fleurs-entry">
                <img src="fleur-m5-droite.png" className='fleur-entry-droite' />
                <img src="logo-m5.png" className='logo-m5-entry' />
                <img src="fleur-m5-gauche.png" className='fleur-entry-gauche' />
                <p className='entry-date'>03 . 06 . 2024</p>
            </div>
            <CountDown />
            <Link to='/home' className='invit-link'>Voir l'invitation</Link>
        </div>

    )
}

export default Entry