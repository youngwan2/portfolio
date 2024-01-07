
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import AboutMePage from "../pages/AboutMePage";
import ProjectPage from "../pages/ProjectPage";
import Contact from "../pages/ContactPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />

    },
    {
        path: '/about',
        element: <AboutMePage />
    },
    {
        path: '/projects',
        element: <ProjectPage />
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])

export default router