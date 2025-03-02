import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(
            <>
                <div className="response-title">
                    <div className="fleurs-title">
                        <img src="fleur-m5-droite.png" className='fleur-title-droite' />
                        <h1 className='title'>Réponse</h1>
                        <img src="fleur-m5-gauche.png" className='fleur-title-gauche' />
                    </div>
                </div>
                <Form />
            </>
    )
}

export default Response