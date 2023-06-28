import React from 'react'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Events from '../../pages/Events'
import EventSingle from '../../pages/EventSingle'
import Contact from '../../pages/Contact'
import { useRoutes } from 'react-router'

const Router = () => {

    const minirouter =[
        {
            path:'/',
            element:<Home />,
            exact:true,
        },
        {
            path:'/about',
            element:<About />,
        },
        {
            path:'/events',
            element:<Events />,
        },
        {
            path:'/events/:slug',
            element:<EventSingle />,
        },
        {
            path:'/contact',
            element:<Contact />,
        }
    ]
    const router =useRoutes(minirouter);
    return <>{router}</>
}

export default Router
