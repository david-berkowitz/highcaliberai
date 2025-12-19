import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Holidays from './pages/Holidays';
import WorkshopShowcase from './pages/WorkshopShowcase';
import Resources from './pages/Resources';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Services": Services,
    "Contact": Contact,
    "Holidays": Holidays,
    "WorkshopShowcase": WorkshopShowcase,
    "Resources": Resources,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};