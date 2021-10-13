import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'

import Routes from '../routes'
import Sidebar from '../sidebar/sedebar'
import Navbar from '../navbar/navbar'

import '../../assets/css/layout.css'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
               <div className='layout'>
                <Sidebar {...props} />
                <div className='layout__content'>
                   <Navbar />
                    <div className='layout__content__main'>
                        <Routes />
                    </div>
                </div>
               </div>
            )} />
        </BrowserRouter>
    )
}

export default Layout
