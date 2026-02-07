/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import AINews from './pages/AINews';
import AIStrategyHub from './pages/AIStrategyHub';
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
import ToolsHub from './pages/ToolsHub';
import WorkshopShowcase from './pages/WorkshopShowcase';
import ZAIAudit from './pages/ZAIAudit';
import Hustle from './pages/Hustle';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AINews": AINews,
    "AIStrategyHub": AIStrategyHub,
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
    "ToolsHub": ToolsHub,
    "WorkshopShowcase": WorkshopShowcase,
    "ZAIAudit": ZAIAudit,
    "Hustle": Hustle,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};