import { useContext } from 'react';
import { Context} from '../Context';
import Musique from '../Components/Musique'
import Mairie from './Mairie'
import Henne from './Henne'
import Houppa from './Houppa'
import BeachParty from './BeachParty';
import Chabat from './Chabat';
import Response from './Response';

function Home(){

    const { language, setLanguage } = useContext(Context)

    return(

        <div className="home">
            <p className='bsd'>בס"ד</p>
            <Musique />
            <Mairie />
            <Henne />
            <Houppa />
            <Chabat />
            <Response />
            <img src="fleur-m5-droite.png" className='fleur-bas' />
            <p className='noms-bas'>YAEL <span className='and-bas'>&</span> LEVY</p>
        </div>

    )
}

export default Home