import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import IC from './pages/IC';
import Jobs from './pages/Jobs';
import Lux from './pages/Lux';
import LuxuryRealEstate from './pages/LuxuryRealEstate';
import Resources from './pages/Resources';
import Services from './pages/Services';
import WorkshopShowcase from './pages/WorkshopShowcase';
import ZAIAudit from './pages/ZAIAudit';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "Book": Book,
    "Contact": Contact,
    "Holidays": Holidays,
    "Home": Home,
    "IC": IC,
    "Jobs": Jobs,
    "Lux": Lux,
    "LuxuryRealEstate": LuxuryRealEstate,
    "Resources": Resources,
    "Services": Services,
    "WorkshopShowcase": WorkshopShowcase,
    "ZAIAudit": ZAIAudit,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};