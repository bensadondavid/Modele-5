import { useContext } from 'react'
import { Context } from '../Context'
import Waze from '../Buttons/Waze'
import SaveTheDate from '../Buttons/SaveTheDate'

function Mairie(){

    const { language } = useContext(Context)

    return(
            <div className="card">
                <div className="fleurs-title">
                    <img src="fleur-m5-droite.png" className='fleur-title-droite' />
                    <h1 className='title'>La Mairie</h1>
                    <img src="fleur-m5-gauche.png" className='fleur-title-gauche' />
                </div>
                    <div className="noms">
                        <h1 className='nom-1'>YAEL</h1>
                        <h1 className='and'>&</h1>
                        <h1 className='nom-2'>LEVY</h1>
                    </div>
                    <p className='text'>Se diront</p>
                    <h2 className='oui'>"Oui"</h2>
                    <p className='date'>Le dimanche 3 juin 2O24 <br /> à 12h00</p>
                    <p className='endroit'>A la mairie de Saint Brice sous foret <br />95350</p>
                    <p className='suite'>A issue de la cérémonie, un vin d'honneur seras servi sur place </p>
                    <Waze name={'waze'} lat={48.8525} long={2.3372} iconWidth='18px' iconHeight='25px' iconColor='#292B2D' />
                    <SaveTheDate name={'save-the-date'} date={[2024, 6, 3, 12, 0]} iconColor='#292B2D' iconHeight='18px' iconWidth='21px'/>
            </div>
    )
}

export default Mairie