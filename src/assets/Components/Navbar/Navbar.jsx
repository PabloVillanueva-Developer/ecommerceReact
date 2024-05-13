import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    
    return (
        <ul className='navBarStructure'>
            <a href="#">Logo + Nombre de la Tienda</a>
            <div></div>
            <div className='principalMenu'>
                <a type="button" class="btn btn-danger">Productos</a>
                <a type="button" class="btn btn-danger">Carrito de Compras</a>
                <a type="button" class="btn btn-danger">Menu</a>
            </div>
            <div></div>
            <CartWidget/>
        </ul>
    )
}

export default Navbar