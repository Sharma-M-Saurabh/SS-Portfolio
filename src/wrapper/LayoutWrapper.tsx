import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

interface LayoutProps {
    children : ReactNode
}

const LayoutWrapper : React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default LayoutWrapper