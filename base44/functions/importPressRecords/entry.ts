import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

const PRESS_RECORDS = [
  { sort_order: 47, outlet_name: "Ad Age", article_title: "360i's David Berkowitz to Join MRY as CMO", article_url: "https://adage.com/article/agency-news/360i-s-david-berkowitz-join-mry-cmo/242752/", coverage_date_text: "2013", import_status: "parsed" },
  { sort_order: 48, outlet_name: "Ad Age (DigitalNext)", article_title: "Time to Kill the Agency 'Lunch and Learn'", article_url: "https://adage.com/article/digitalnext/time-kill-agency-lunch-learn/236399/", coverage_date_text: "2013", import_status: "parsed" },
  { sort_order: 49, outlet_name: "Ad Age (DigitalNext)", article_title: "Google's Fight to Kill Search by 2020", article_url: "https://adage.com/article/digitalnext/google-s-fight-kill-search-2020/238362/", coverage_date_text: "2013", import_status: "parsed" },
  { sort_order: 50, outlet_name: "Ad Age (DigitalNext)", article_title: "What If the Real 'Winner' of SXSW Was … AmEx?", article_url: "https://adage.com/article/digitalnext/real-winner-sxsw-amex/233301/", coverage_date_text: "2013", import_status: "parsed" },
  { sort_order: 51, outlet_name: "Ad Age (DigitalNext)", article_title: "Five Trends Marketers Need to Watch at CES", article_url: "https://adage.com/article/digitalnext/trends-marketers-watch-ces/238998/", coverage_date_text: "2014", import_status: "parsed" },
  { sort_order: 52, outlet_name: "ClickZ", article_title: "MRY's Berkowitz Says Marketers Drinking Their Own Kool-Aid for Super Bowl", article_url: "https://clickz.com/video-mrys-berkowitz-says-marketers-drinking-their-own-kool-aid-for-super-bowl/33743/", coverage_date_text: "2014", import_status: "parsed" },
  { sort_order: 53, outlet_name: "ClickZ", article_title: "Facebook Analytics War Heats Up", article_url: "https://www.clickz.com/facebook-analytics-war-heats-up/79565/", coverage_date_text: "2010", import_status: "parsed" },
  { sort_order: 54, outlet_name: "ClickZ", article_title: "What Would Twitter Search Ads Mean to Marketers?", article_url: "https://www.clickz.com/what-would-twitter-search-ads-mean-to-marketers/86470/", coverage_date_text: "2011", import_status: "parsed" },
  { sort_order: 55, outlet_name: "Marketing Land", article_title: "Marketers Respond to Google Chrome Cookie Decision with Mixture of Hope and Fear", article_url: "https://marketingland.com/marketers-respond-to-google-chrome-cookie-decision-with-mixture-of-hope-and-fear-274792", coverage_date_text: "2019", import_status: "parsed" },
  { sort_order: 56, outlet_name: "VentureBeat", article_title: "Why You Should Fear Take-Your-Drone-to-Work Day", article_url: "https://venturebeat.com/ai/why-you-should-fear-take-your-drone-to-work-day", coverage_date_text: "2015", import_status: "parsed" },
  { sort_order: 57, outlet_name: "VentureBeat", article_title: "The 10 Plagues of Marketing and How to Cure Them", article_url: "https://venturebeat.com/technology/the-10-plagues-of-marketing-and-how-to-cure-them", coverage_date_text: "Dec 2016", import_status: "parsed" },
  { sort_order: 58, outlet_name: "VentureBeat", article_title: "7 New Ways Brands Will Get Attention at the 2016 Olympics", article_url: "https://venturebeat.com/ai/7-new-ways-brands-will-get-attention-at-the-2016-olympics", coverage_date_text: "2016", import_status: "parsed" },
  { sort_order: 59, outlet_name: "VentureBeat", article_title: "100 People to Watch in the Chatbot Space", article_url: "https://venturebeat.com/business/100-people-to-watch-in-the-chatbot-space", coverage_date_text: "Aug 2016", import_status: "parsed" },
  { sort_order: 60, outlet_name: "Chatbots Magazine", article_title: "100 Bot People to Watch #BotWatch", article_url: "https://chatbotsmagazine.com/100-bot-people-to-watch-botwatch-aa3fac1ef06", coverage_date_text: "2016", import_status: "parsed" },
  { sort_order: 61, outlet_name: "AdExchanger", article_title: "Specific Media Plots (Yet Another) Myspace Comeback", article_url: "https://www.adexchanger.com/social-media/specific-media-plots-yet-another-myspace-comeback/", coverage_date_text: "2011", import_status: "parsed" },
  { sort_order: 62, outlet_name: "AdExchanger", article_title: "Serial Marketers and AI Marketers Guild Join Marketecture", article_url: "https://www.adexchanger.com/daily-news-roundup/wednesday-21052025/", coverage_date_text: "May 2025", import_status: "parsed" },
  { sort_order: 63, outlet_name: "MediaVillage", article_title: "Unlocking the Future of Leadership with Jack Myers and David Berkowitz on AIMG's AI Insider", article_url: "https://www.mediavillage.com/article/unlocking-the-future-of-leadership-with-jack-myers-and-david-berkowitz-on-aimgs-ai-insider/", coverage_date_text: "2023", import_status: "parsed" },
  { sort_order: 64, outlet_name: "MediaVillage", article_title: "How to Use ChatGPT's Best Hidden Feature", article_url: "https://www.mediavillage.com/article/temperature-check-how-to-use-chatgpts-best-hidden-feature/", coverage_date_text: "2023", import_status: "parsed" },
  { sort_order: 65, outlet_name: "Humans + AI Podcast", article_title: "David Berkowitz on AI in Marketing, Gaining Superpowers, Amplifying Marketers, and the Future of Agencies", article_url: "https://humansplus.ai/podcast/david-berkowitz-ai-marketing-gaining-superpowers-amplifying-marketers-future-agencies-ac-ep12/", coverage_date_text: "Sep 2023", import_status: "parsed" },
  { sort_order: 66, outlet_name: "Speakerpedia", article_title: "David Berkowitz — Public Speaking & Appearances Profile", article_url: "https://speakerpedia.com/speakers/david-berkowitz", coverage_date_text: "ongoing", import_status: "parsed" },
  { sort_order: 67, outlet_name: "Digiday", article_title: "Most Innovative Product Launched at SXSW", article_url: "https://digiday.com/media/most-innovative-product-launched-at-sxsw/", coverage_date_text: "2012", import_status: "parsed" },
  { sort_order: 68, outlet_name: "Josh Steimle / Top CMOs", article_title: "2016 Top 100 Most-Followed CMOs on Twitter", article_url: "https://joshsteimle.com/marketing/top-100-most-followed-cmos-on-twitter.html", coverage_date_text: "2016", import_status: "parsed" },
  { sort_order: 69, outlet_name: "The New York Times", article_title: "Losing Popularity Contest, MySpace Tries a Makeover", article_url: "https://www.nytimes.com/2009/05/04/technology/companies/04myspace.html", coverage_date_text: "May 2009", import_status: "parsed" },
  { sort_order: 70, outlet_name: "Business Insider", article_title: "Foursquare Plots Its Business Model", article_url: "https://www.businessinsider.com/foursquare-plots-its-business-model-2010-2", coverage_date_text: "Feb 2010", import_status: "parsed" },
  { sort_order: 71, outlet_name: "Business Insider", article_title: "Facebook Is About to Rake in Huge Ecommerce Dollars", article_url: "https://www.businessinsider.com/how-much-ad-money-can-facebook-get-from-diaper-and-flower-sales-on-the-site-2010-3", coverage_date_text: "Mar 2010", import_status: "parsed" },
  { sort_order: 72, outlet_name: "Ad Age (DigitalNext)", article_title: "What You Need to Know About Facebook Buying FriendFeed", article_url: "https://adage.com/article/digitalnext/social-media-marketing-facebook-turns-friendfeed-bff/138390/", coverage_date_text: "Aug 2009", import_status: "parsed" },
  { sort_order: 73, outlet_name: "Ad Age (DigitalNext)", article_title: "The Next Social Network? Your Car", article_url: "https://adage.com/article/digitalnext/social-network-car/133891/", coverage_date_text: "2008", import_status: "parsed" },
  { sort_order: 74, outlet_name: "Ad Age (DigitalNext)", article_title: "Cuil Needs a Chill Pill", article_url: "https://adage.com/article/digitalnext/cuil-a-chill-pill/129959/", coverage_date_text: "2008", import_status: "parsed" },
  { sort_order: 75, outlet_name: "Ad Age", article_title: "Meet Your DigitalNext Bloggers", article_url: "https://adage.com/article/digitalnext/meet-digitalnext-bloggers/126355/", coverage_date_text: "2007", import_status: "parsed" },
  { sort_order: 76, outlet_name: "MediaPost", article_title: "Look Who's Searching", article_url: "https://www.mediapost.com/publications/article/19447/look-whos-searching.html", coverage_date_text: "Aug 2004", import_status: "parsed" },
  { sort_order: 77, outlet_name: "MediaPost", article_title: "Ten Predictions for 2005", article_url: "https://www.mediapost.com/publications/article/26015/ten-predictions-for-2005.html", coverage_date_text: "Jan 2005", import_status: "parsed" },
  { sort_order: 78, outlet_name: "MediaPost", article_title: "A Day in the Evolution of Search Media", article_url: "https://www.mediapost.com/publications/article/33441/a-day-in-the-evolution-of-search-media.html", coverage_date_text: "Aug 2005", import_status: "parsed" },
  { sort_order: 79, outlet_name: "MediaPost", article_title: "David Berkowitz Joins 360i from Unicast/Viewpoint", article_url: "https://www.mediapost.com/publications/article/40408/david-berkowitz.html", coverage_date_text: "Feb 2006", import_status: "parsed" },
  { sort_order: 80, outlet_name: "The Morning Call", article_title: "Virus Strikes Google as It Files for IPO", article_url: "https://www.mcall.com/2004/07/27/virus-strikes-google-as-it-files-for-ipo/", coverage_date_text: "Jul 2004", import_status: "parsed" },
  { sort_order: 81, outlet_name: "Baltimore Sun", article_title: "Google Trading May Begin Today", article_url: "https://www.baltimoresun.com/2004/08/19/google-trading-may-begin-today/", coverage_date_text: "Aug 2004", import_status: "parsed" },
  { sort_order: 82, outlet_name: "Ad Age", article_title: "Online Ad Demand Bumps Up Prices", article_url: "https://adage.com/article/news/online-ad-demand-bumps-prices/99504/", coverage_date_text: "2004", import_status: "parsed" },
  { sort_order: 83, outlet_name: "HispanicAd.com", article_title: "Keeping Up With the Yellow Pages?", article_url: "https://hispanicad.com/news/keeping-yellow-pages/", coverage_date_text: "2004", import_status: "parsed" },
  { sort_order: 84, outlet_name: "MarketingSherpa", article_title: "Wisdom — Marketing Tactics", article_url: "https://marketingsherpa.com/article/blog/wisdom-marketing-tactics-38", coverage_date_text: "2003", import_status: "parsed" },
  { sort_order: 85, outlet_name: "Forbes", article_title: "The Best-Ever Social Media Campaigns", article_url: "https://www.forbes.com/2010/08/17/facebook-old-spice-farmville-pepsi-forbes-viral-marketing-cmo-network-social-media.html", coverage_date_text: "Aug 2010", import_status: "parsed" },
  { sort_order: 86, outlet_name: "Inc. Magazine", article_title: "30 Fluff-Free Digital Experts to Follow in 2015", article_url: "https://www.inc.com/jeremy-goldman/30-fluff-free-digital-experts-to-follow-in-2015.html", coverage_date_text: "Jan 2015", import_status: "parsed" },
  { sort_order: 87, outlet_name: "Jaffe Juice Podcast", article_title: "Jaffe Juice #190 — Built to Suck Q&A with Serial Marketer's David Berkowitz", article_url: "https://podcasts.apple.com/us/podcast/jaffe-juice/id93639319", coverage_date_text: "2019", import_status: "parsed" },
  { sort_order: 88, outlet_name: "Adweek", article_title: "Brand Safety in 2023: Marketers Are Feeling the Danger Rising", article_url: "https://www.adweek.com/brand-marketing/brand-safety-in-2023-marketers-publishers-and-platforms-feel-the-danger-rising/", coverage_date_text: "2023", import_status: "parsed" },
  { sort_order: 89, outlet_name: "eMarketer / Mediaocean", article_title: "Featured in eMarketer's 2022 Digital Shelf for CPG Brands Report", article_url: "https://www.mediaocean.com/node?page=74", coverage_date_text: "2022", import_status: "parsed" },
  { sort_order: 90, outlet_name: "ITVT", article_title: "Announcing the Schedule of Sessions for TVoT SF 2022", article_url: "https://itvt.com/updates/announcing-the-schedule-of-sessions-for-tvot-sf-2022/", coverage_date_text: "2022", import_status: "parsed" },
  { sort_order: 91, outlet_name: "Revry News", article_title: "Digital Entertainment World — Youth & Entertainment Marketing Mix Panel", article_url: "https://revry.squarespace.com/news/tag/David+Berkowitz", coverage_date_text: "Feb 2022", import_status: "parsed" },
  { sort_order: 92, outlet_name: "Adweek", article_title: "Advertising Walks Down the Aisle", article_url: "https://www.adweek.com/agencyspy/advertising-walks-down-the-aisle", coverage_date_text: "Dec 2007", import_status: "parsed" },
  { sort_order: 93, outlet_name: "Adweek / Mediaweek", article_title: "Microsoft's Bing Issues Ad 'Manifesto'", article_url: "https://www.adweek.com/brand-marketing/microsofts-bing-issues-ad-manifesto-105888/", coverage_date_text: "2009", import_status: "parsed" },
  { sort_order: 94, outlet_name: "Adweek", article_title: "Facebook Decentralizes Mobile Team in Strategic Move", article_url: "https://www.adweek.com/performance-marketing/facebook-decentralizes-mobile-team-strategic-move-142215/", coverage_date_text: "2011", import_status: "parsed" },
  { sort_order: 95, outlet_name: "Adweek", article_title: "Viral Complexity", article_url: "https://www.adweek.com/brand-marketing/viral-complexity-107212/", coverage_date_text: "2009", import_status: "parsed" },
  { sort_order: 96, outlet_name: "Adweek", article_title: "Year In Review: Five Important PR Innovations of 2009", article_url: "https://www.adweek.com/performance-marketing/year-in-review-five-important-pr-innovations-of-2009/", coverage_date_text: "Dec 2009", import_status: "parsed" },
  { sort_order: 97, outlet_name: "ClickZ", article_title: "Google Posts Q4 Profit, Plans to Expand Advertising Options", article_url: "https://www.clickz.com/google-posts-q4-profit-plans-to-expand-advertising-options/82141/", coverage_date_text: "2008", import_status: "parsed" },
  { sort_order: 98, outlet_name: "ClickZ", article_title: "Online Content: The 2002 Report", article_url: "https://www.clickz.com/online-content-the-2002-report/76405/", coverage_date_text: "2002", import_status: "parsed" },
  { sort_order: 99, outlet_name: "Anyreach Roundtable", article_title: "AI Marketing Revolution: Interview with David Berkowitz", article_url: "https://www.youtube.com/watch?v=yOyYDgHBWqc", coverage_date_text: "Jun 2025", import_status: "parsed" },
  { sort_order: 100, outlet_name: "Genius Steals (Substack)", article_title: "AI Generated Garbage is Polluting Our Culture — Guest Curated by David Berkowitz", article_url: "https://geniussteals.substack.com/p/strands-of-genius-ai-generated-garbage", coverage_date_text: "May 2024", import_status: "parsed" },
  { sort_order: 101, outlet_name: "Genius Steals (Substack)", article_title: "Going Viral, Social Media Patterns — Guest Curated by David Berkowitz", article_url: "https://geniussteals.substack.com/p/strands-of-genius-going-viral-social", coverage_date_text: "2024", import_status: "parsed" },
  { sort_order: 102, outlet_name: "Sword and the Script", article_title: "40 Marketing and Comms Predictions for 2025", article_url: "https://www.swordandthescript.com/2024/12/marketing-comms-predictions-2025/", coverage_date_text: "Dec 2024", import_status: "parsed" },
  { sort_order: 103, outlet_name: "Barn Raisers", article_title: "100 Ways to Measure Social Media", article_url: "https://barnraisersllc.com/2010/08/30/100-reasons-measure-roi-social-media-bunch-bs/", coverage_date_text: "Aug 2010", import_status: "parsed" },
  { sort_order: 104, outlet_name: "Business Insider", article_title: "Thanks to All Those Shills on Twitter and Facebook, You Don't Trust Your Friends Anymore", article_url: "https://www.businessinsider.com/you-dont-trust-your-friends-anymore-2010-2", coverage_date_text: "Feb 2010", import_status: "parsed" },
];

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const results = [];
    for (const record of PRESS_RECORDS) {
      const created = await base44.entities.PressCoverage.create(record);
      results.push({ sort_order: record.sort_order, id: created.id });
    }

    return Response.json({ ok: true, inserted: results.length, records: results });
  } catch (error) {
    console.error('Import error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});