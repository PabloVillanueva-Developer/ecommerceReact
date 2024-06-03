import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ItemListContainer = () => {
    const [data, setData] = useState(null)
    const [categoryData, setCategoryData] = useState(null)
    const {id} = useParams()
    
    useEffect( () => {
        try {
        const fetchData = async () => {
        let response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
            
        const dataToJSON = await response.json()
        const data = setData(dataToJSON)
        }
        fetchData()
    } catch(err) {console.error('Revise su conexion a internet.', err); console.log('hola')}
    },[])

    useEffect (() => {
        try{
         
            if (id === undefined) {
                setCategoryData(null)
            } else {
            const categoryDataFiltered = data.results.filter(item => item.attributes[0].value_name === id)
            setCategoryData(categoryDataFiltered)
            }

        }catch(err) {console.error(err)}
    },[id])


    return (
       /*  <h1 className='ItemListaContainerStructure'>Probando </h1> */
        !data ? <div>Cargando...</div> : 
                 categoryData ? 
                            <div>
                                {categoryData.map( item => 
                                    <div key={item.id}>
                                        <Link to={`/item/${item.id}`} >
                                            <img src={item.thumbnail} alt="Imagen de producto" />
                                            {item.title}
                                        </Link>
                                    </div>  
                                )}
                            </div>

                         : <div>
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

export default ItemListContainer