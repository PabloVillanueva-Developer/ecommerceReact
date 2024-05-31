import { useEffect, useState } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = ({children}) => {
    const [data, setData] = useState(null)

    useEffect( () => {
        try {
        const fetchData = async () => {
        let response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
            
        const dataToJSON = await response.json()
        const data = setData(dataToJSON)
        }
        fetchData()
    } catch(err) {console.error('Revise su conexion a internet.', err); console.log('hola')}
    })

    
    return (
        !data ? <div>Cargando...</div> : 
        <div>
            {data.results.map( item => 
                <div key={item.id}>
                    <Link to={`/item/${item.id}`} >
                    <img src={item.thumbnail} alt="Imagen de producto" />
                    {item.title}
                    </Link>
                </div>
                
            )}
        </div>
      
    )
}

export default Main