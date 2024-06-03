import { useEffect, useState } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = ({children}) => {
    
    
    return (
        <div className='mainStructure'>
            {children}
        </div>
      
    )
}

export default Main