import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import IC from './pages/IC';
import Jobs from './pages/Jobs';
import Lux from './pages/Lux';
import LuxuryRealEstate from './pages/LuxuryRealEstate';
import Politics from './pages/Politics';
import Resources from './pages/Resources';
import Services from './pages/Services';
import WorkshopShowcase from './pages/WorkshopShowcase';
import ZAIAudit from './pages/ZAIAudit';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
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
    "Politics": Politics,
    "Resources": Resources,
    "Services": Services,
    "WorkshopShowcase": WorkshopShowcase,
    "ZAIAudit": ZAIAudit,
    "Blog": Blog,
    "BlogPost": BlogPost,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};