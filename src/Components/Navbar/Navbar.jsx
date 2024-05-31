import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Route, Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { useEffect, useState } from 'react'

const Navbar = () => {    

    const [data, setData] = useState(null)

    useEffect( () => {
        try {
            const fetchData = async () => {
            let response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
                
            const dataToJSON = await response.json()
            const data = setData(dataToJSON)
            console.log(dataToJSON)
            }
            fetchData()
        } catch(err) {console.error('Revise su conexion a internet.', err); console.log('hola')}
    },[])
    
    



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
                        {data ? data.results.map(item => 
                            <div key={item.id}>
                                  {item.attributes && item.attributes[0] ? <a type="button" className="btn btn-danger">{item.attributes[0].value_name}</a> : 'N/A'}
                            </div>

                        ): 'Cargando...'}
                            <p>hola</p>
                            <p>chau</p>
                    </div>
            </ul>
          
        </>
    )
}

export default Navbar