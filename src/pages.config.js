import AINews from './pages/AINews';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Book from './pages/Book';
import CPG from './pages/CPG';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import ContentUploader from './pages/ContentUploader';
import FOAF from './pages/FOAF';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import IC from './pages/IC';
import Jobs from './pages/Jobs';
import Lux from './pages/Lux';
import LuxuryRealEstate from './pages/LuxuryRealEstate';
import Offsite from './pages/Offsite';
import Partners from './pages/Partners';
import Politics from './pages/Politics';
import Resources from './pages/Resources';
import SOS from './pages/SOS';
import Services from './pages/Services';
import Speaking from './pages/Speaking';
import WorkshopShowcase from './pages/WorkshopShowcase';
import ZAIAudit from './pages/ZAIAudit';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AINews": AINews,
    "About": About,
    "Blog": Blog,
    "BlogPost": BlogPost,
    "Book": Book,
    "CPG": CPG,
    "CaseStudies": CaseStudies,
    "Contact": Contact,
    "ContentUploader": ContentUploader,
    "FOAF": FOAF,
    "Holidays": Holidays,
    "Home": Home,
    "IC": IC,
    "Jobs": Jobs,
    "Lux": Lux,
    "LuxuryRealEstate": LuxuryRealEstate,
    "Offsite": Offsite,
    "Partners": Partners,
    "Politics": Politics,
    "Resources": Resources,
    "SOS": SOS,
    "Services": Services,
    "Speaking": Speaking,
    "WorkshopShowcase": WorkshopShowcase,
    "ZAIAudit": ZAIAudit,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};