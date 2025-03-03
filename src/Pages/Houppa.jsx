import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Houppa(){

    const { language } = useContext(Context)

    return(
            <>
            <div className="card">
            <div className="fleurs-title">
                    <img src="fleur-m5-droite.png" className='fleur-title-droite' />
                    <h1 className='title'>La Houppa</h1>
                    <img src="fleur-m5-gauche.png" className='fleur-title-gauche' />
                </div>
                <img src="kol-sasson-gris.png" className='kol-sasson' />
                <div className="parents">
                    <div className="parents-fille">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                    <div className="parents-garcon">
                        <p>Mr et Mme John Doe</p>
                        <p>Mr et Mme John Doe</p>
                    </div>
                </div>
                <p className='houppa-text1'>Ont la joie de vous faire part du mariage de leurs petits enfants et enfants</p>
                <div className="noms">
                    <h1 className='nom-1'>YAEL</h1>
                    <h1 className='and'>&</h1>
                    <h1 className='nom-2'>LEVY</h1>
                </div>
                <p className='houppa-text2'>et vous prient de bien vouloir assister a la houppa ainsi qu’a la soiree  qui aura lieu le</p>
                <p className='date'>Lundi 3 juin 2024 <br />כו’באייר תשפה <br />A partir de 18h00   </p>
                <p className='endroit'>A la salle Emeralde Garden <br /> Park Taassit Shourak, Beth Shemesh </p>
                <p className="pensee">"Une tendre pensée pour nos grands parents toujours presents dans nos coeurs"</p>
                <Waze name={'waze'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#292B2D' />
                <SaveTheDate name={'save-the-date'} date={[2024, 6, 3, 12, 0]} iconColor='#292B2D' iconHeight='18px' iconWidth='21px'/>
            </div>
        </>
    )
}

export default Houppa