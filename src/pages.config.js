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
import AIMGFAQ from './pages/AIMGFAQ';
import AINews from './pages/AINews';
import AIStrategyHub from './pages/AIStrategyHub';
import About from './pages/About';
import AdminHub from './pages/AdminHub';
import AdminRoadmap from './pages/AdminRoadmap';
import AgenticAgency from './pages/AgenticAgency';
import AgenticAssessment from './pages/AgenticAssessment';
import AgenticClientScorecard from './pages/AgenticClientScorecard';
import AgenticQuickStart from './pages/AgenticQuickStart';
import AgenticROICalculator from './pages/AgenticROICalculator';
import AgenticUseCaseLibrary from './pages/AgenticUseCaseLibrary';
import Article from './pages/Article';
import Audit from './pages/Audit';
import BD from './pages/BD';
import Baruch from './pages/Baruch';
import Bing from './pages/Bing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Book from './pages/Book';
import Bylines from './pages/Bylines';
import CPG from './pages/CPG';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import ContentMarketingTools from './pages/ContentMarketingTools';
import ContentUploader from './pages/ContentUploader';
import CourseAccess from './pages/CourseAccess';
import CourseHome from './pages/CourseHome';
import CourseSuccess from './pages/CourseSuccess';
import Cricket from './pages/Cricket';
import EnterpriseWorkshop from './pages/EnterpriseWorkshop';
import Events from './pages/Events';
import FOAF from './pages/FOAF';
import GuestLectures from './pages/GuestLectures';
import Holidays from './pages/Holidays';
import Home from './pages/Home';
import Hustle from './pages/Hustle';
import IC from './pages/IC';
import ICE from './pages/ICE';
import Jobs from './pages/Jobs';
import Lux from './pages/Lux';
import LuxuryRealEstate from './pages/LuxuryRealEstate';
import Mensch from './pages/Mensch';
import Offsite from './pages/Offsite';
import PartnerFAQ from './pages/PartnerFAQ';
import PartnerListingsAdmin from './pages/PartnerListingsAdmin';
import PartnerSubmit from './pages/PartnerSubmit';
import PartnerSubmitSuccess from './pages/PartnerSubmitSuccess';
import Partners from './pages/Partners';
import Politics from './pages/Politics';
import Press from './pages/Press';
import PressCoverageAdmin from './pages/PressCoverageAdmin';
import Progress from './pages/Progress';
import ResourceSubmit from './pages/ResourceSubmit';
import Resources from './pages/Resources';
import SOS from './pages/SOS';
import SaaSFractionalCMO from './pages/SaaSFractionalCMO';
import Services from './pages/Services';
import SmallTeamTraining from './pages/SmallTeamTraining';
import Speaking from './pages/Speaking';
import SubscribersAdmin from './pages/SubscribersAdmin';
import ToolsHub from './pages/ToolsHub';
import Training from './pages/Training';
import Vibe from './pages/Vibe';
import WorkingWithDavid from './pages/WorkingWithDavid';
import WorkshopShowcase from './pages/WorkshopShowcase';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AIMGFAQ": AIMGFAQ,
    "AINews": AINews,
    "AIStrategyHub": AIStrategyHub,
    "About": About,
    "AdminHub": AdminHub,
    "AdminRoadmap": AdminRoadmap,
    "AgenticAgency": AgenticAgency,
    "AgenticAssessment": AgenticAssessment,
    "AgenticClientScorecard": AgenticClientScorecard,
    "AgenticQuickStart": AgenticQuickStart,
    "AgenticROICalculator": AgenticROICalculator,
    "AgenticUseCaseLibrary": AgenticUseCaseLibrary,
    "Article": Article,
    "Audit": Audit,
    "BD": BD,
    "Baruch": Baruch,
    "Bing": Bing,
    "Blog": Blog,
    "BlogPost": BlogPost,
    "Book": Book,
    "Bylines": Bylines,
    "CPG": CPG,
    "CaseStudies": CaseStudies,
    "Contact": Contact,
    "ContentMarketingTools": ContentMarketingTools,
    "ContentUploader": ContentUploader,
    "CourseAccess": CourseAccess,
    "CourseHome": CourseHome,
    "CourseSuccess": CourseSuccess,
    "Cricket": Cricket,
    "EnterpriseWorkshop": EnterpriseWorkshop,
    "Events": Events,
    "FOAF": FOAF,
    "GuestLectures": GuestLectures,
    "Holidays": Holidays,
    "Home": Home,
    "Hustle": Hustle,
    "IC": IC,
    "ICE": ICE,
    "Jobs": Jobs,
    "Lux": Lux,
    "LuxuryRealEstate": LuxuryRealEstate,
    "Mensch": Mensch,
    "Offsite": Offsite,
    "PartnerFAQ": PartnerFAQ,
    "PartnerListingsAdmin": PartnerListingsAdmin,
    "PartnerSubmit": PartnerSubmit,
    "PartnerSubmitSuccess": PartnerSubmitSuccess,
    "Partners": Partners,
    "Politics": Politics,
    "Press": Press,
    "PressCoverageAdmin": PressCoverageAdmin,
    "Progress": Progress,
    "ResourceSubmit": ResourceSubmit,
    "Resources": Resources,
    "SOS": SOS,
    "SaaSFractionalCMO": SaaSFractionalCMO,
    "Services": Services,
    "SmallTeamTraining": SmallTeamTraining,
    "Speaking": Speaking,
    "SubscribersAdmin": SubscribersAdmin,
    "ToolsHub": ToolsHub,
    "Training": Training,
    "Vibe": Vibe,
    "WorkingWithDavid": WorkingWithDavid,
    "WorkshopShowcase": WorkshopShowcase,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};