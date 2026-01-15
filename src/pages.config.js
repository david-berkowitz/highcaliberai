import AIAudit from './pages/AIAudit';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import IC from './pages/IC';
import Jobs from './pages/Jobs';
import Lux from './pages/Lux';
import Resources from './pages/Resources';
import Services from './pages/Services';
import WorkshopShowcase from './pages/WorkshopShowcase';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AIAudit": AIAudit,
    "About": About,
    "Book": Book,
    "Contact": Contact,
    "Holidays": Holidays,
    "Home": Home,
    "IC": IC,
    "Jobs": Jobs,
    "Lux": Lux,
    "Resources": Resources,
    "Services": Services,
    "WorkshopShowcase": WorkshopShowcase,
}

export const pagesConfig = {
    mainPage: "AIAudit",
    Pages: PAGES,
    Layout: __Layout,
};