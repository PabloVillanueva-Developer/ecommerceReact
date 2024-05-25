import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Route, Link } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const Navbar = () => {    
    return (
        <>
            <ul className='navBarStructure'>
                    <div className='firstLevelNavBar'>
                            <Link to='/' href="#">Logo + Nombre de la Tienda</Link>
                            <div></div>
                            <div className='principalMenu'>
                                <Link to='/category/:id' type="button" className="btn btn-danger">Catalogo</Link>
                                <a type="button" className="btn btn-danger">Carrito de Compras</a>
                                <a type="button" className="btn btn-danger">Menu</a>
                            </div>
                            <div></div>
                            
                            <CartWidget />
                            </div>
                    <div className='secondLevelNavBar'>
                            <p>hola</p>
                            <p>chau</p>
                    </div>
            </ul>
          
        </>
    )
}

export default Navbar