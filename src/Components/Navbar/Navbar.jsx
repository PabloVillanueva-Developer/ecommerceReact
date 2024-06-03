import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Route, Link, useParams } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { useEffect, useState } from 'react'

const Navbar = () => {    

    const [data, setData] = useState(null)
  
    const {id} = useParams()

    useEffect( () => {
        try {
            const fetchData = async () => {
            let response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
            const dataToJSON = await response.json()
           
            const dataToJSONFiltered = [...new Set(dataToJSON.results.map(item => item.attributes[0].value_name))];
            setData(dataToJSONFiltered)
        
            }
            fetchData()
        } catch(err) {console.error('Revise su conexion a internet.', err); console.log('hola')}
    },[])

 /*    useEffect(() => {
        console.log(data)

    },[data]) */


    return (
        <>
            <ul className='navBarStructure'>
                    <div className='firstLevelNavBar'>
                            <Link to='/' href="#">Logo + Nombre de la Tienda</Link>
                            <div></div>
                            <div className='principalMenu'>
                                <Link to='/' type="button" className="btn btn-danger">Catalogo</Link>
                                <a type="button" className="btn btn-danger">Carrito de Compras</a>
                                <a type="button" className="btn btn-danger">Menu</a>
                            </div>
                            <div></div>
                            
                            <CartWidget />
                            </div>
                    <div className='secondLevelNavBar'>
                        {data ? data.map((item, index) => 
                            <div key={index}>
                                  <Link to={`/category/${item}`} type="button" className="btn btn-danger">{item}</ Link>
                            </div>

                        ): 'Cargando...'}
                           
                    </div>
            </ul>
          
        </>
    )
}

export default Navbar