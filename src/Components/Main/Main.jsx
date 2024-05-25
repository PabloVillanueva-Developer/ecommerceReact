import { useEffect } from 'react'
import './Main.css'

const Main = ({children}) => {

    useEffect( () => {
        try {
        const fetchData = async () => {
        let response = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
        const data = await response.json()
        console.log(data)
        }
        fetchData()

    } catch(err) {console.error(err)}

    })

    return (
        <div>
            {children}
        </div>
      
    )
}

export default Main