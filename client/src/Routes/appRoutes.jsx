import Home from "../Pages/Home/Home"
import Admin from "../Pages/Admin/Admin"
import Navbar from "../Components/Navbar"
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Briefs from "../Pages/Briefs/Briefs"
import Login from "../Pages/Login/Login"
const routes=[
    {
        path:'/',
        element:(
            <>
            <Navbar/>
            <Home/>
            </>
        )
    },
    {
        path:'/admin/dashboard',
        element:(
            <>
            <Admin/>
            </>
        )
    },
    {
        path:'/about',
        element:(
            <>
            <Navbar/>
            <About/>
            </>
        )
    },
    {
        path:'/contact',
        element:(
            <>
            <Navbar/>
            <Contact/>
            </>
        )
    },
    {
        path:'/image/:id',
        element:(
            <>
            <Navbar/>
            <Briefs/>
            </>
        )
    },
     {
        path:'/login',
        element:(
            <>
            
            <Login/>
            </>
        )
    },
]

export default routes