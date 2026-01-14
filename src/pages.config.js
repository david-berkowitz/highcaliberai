import AIAudit from './pages/AIAudit';
import About from './pages/About';
import Contact from './pages/Contact';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import IC from './pages/IC';
import Lux from './pages/Lux';
import Resources from './pages/Resources';
import Services from './pages/Services';
import WorkshopShowcase from './pages/WorkshopShowcase';
import Book from './pages/Book';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AIAudit": AIAudit,
    "About": About,
    "Contact": Contact,
    "Holidays": Holidays,
    "Home": Home,
    "IC": IC,
    "Lux": Lux,
    "Resources": Resources,
    "Services": Services,
    "WorkshopShowcase": WorkshopShowcase,
    "Book": Book,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};