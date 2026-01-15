// ...existing code...
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MeetingRegistrationForm from '../../components/forms/MeetingRegistrationForm';
import { jsPDF } from "jspdf"; // Certifique-se de que esta linha esteja presente

export default function AgendaPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Events data (mover aqui para não usar `events` antes de ser declarado)
  const events = [
    {
      id: 1,
      title: "THE FEMALE-LED INAUGURATION",
      subtitle: "Africa Women Forum",
      date: "February 26-27, 2026 ",
      location: "Kinshasa, DRC (AEF Host Country)",
      objestive: "Establish the women's economic leadership agenda as the cornerstone of continental sovereignty",
      theme: "The Architects of Sovereignty: Women Forging Africa's Economic Future",
      image:
        "/images/africa-lead.jpg",
      description:
        `True sovereignty cannot be achieved without the full participation of women.This forum moves beyond empowerment rhetoric to focus on women as essential architects of economic resilience, strategic decision-makers, and drivers of inclusive growth. The agenda is designed to secure tangible leadership roles, investment capital, and procurement opportunities for women, integrating their influence directly into the continent's sovereign agenda.
Key Outcomes: Board Appointments to Sovereign & Corporate Entities, Launch of the "Women-Backed Enterprises" Investment Fund, Signed Procurement Contracts for Women-Owned Businesses.
Our Positioning
The Africa Women Forum serves as THE African table where global capital meets African women's opportunities. We are the definitive platform for shaping continental gender policies, forging strategic alliances, and accelerating investments in women-led initiatives.
Core Value Proposition
· Policy Architecture: Where continental gender agendas are designed
· Capital Connectivity: Global investors meet vetted women-led opportunities
· Alliance Building: Strategic partnerships across sectors and borders
· Agenda Setting: Defining Africa's gender cooperation priorities

PROGRAM ARCHITECTURE

DAY 1: THE POLICY & GOVERNANCE ARCHITECTURE

08:00 - 09:30 | CONTINENTAL LEADERSHIP BREAKFAST
"Designing Africa's Gender Economic Agenda"

· Closed-door session with African Union gender ministers, central bank governors, and global institutional partners
· Output: Framework for continental women's economic empowerment policy

10:00 - 11:30 | OPENING PLENARY
"The African Table: Setting the Continental Gender Cooperation Agenda"

· Keynote: DRC Presidency on Africa's leadership in gender economics
· Global Partners: UN Women, African Development Bank, World Economic Forum
· Launch: "African Women's Economic Sovereignty Framework"

12:00 - 13:30 | POLICY LABS
Parallel working sessions shaping specific policy areas

Lab A: Financial Inclusion Architecture

· Designing pan-African women's access to capital frameworks
· Output: Model regulation for gender-lens investing

Lab B: Trade & Economic Integration

· Implementing AfCFTA through women's economic participation
· Output: Cross-border trade protocols for women entrepreneurs

Lab C: Digital Economy Governance

· Ensuring women's leadership in Africa's digital transformation
· Output: Digital inclusion policy framework

14:30 - 16:30 | CAPITAL CONNECTIONS
Structured investment matchmaking

Global Capital Roundtables:

· Sovereign wealth funds & women-led infrastructure projects
· Private equity & women-owned scale-ups
· Venture capital & female tech founders
· Impact investors & social enterprises

17:00 - 18:30 | STRATEGIC ALLIANCE BUILDING
Sector-specific partnership negotiations

Alliance Tracks:

· Energy & Infrastructure: Women in renewable energy development
· Technology & Innovation: Building Africa's female tech ecosystem
· Finance & Investment: Creating gender-smart financial products
· Agriculture & Manufacturing: Women in value chain transformation

19:30 - 21:30 | GLOBAL PARTNERSHIP GALA
Signing ceremonies for major continental initiatives

---

DAY 2: IMPLEMENTATION & DEAL-MAKING

08:30 - 10:00 | INVESTORS PLENARY
"The Capital Allocation: Investing in Africa's Women"

· Featured: Global pension funds, development finance institutions, family offices
· Announcement: New gender-lens investment vehicles for Africa

10:30 - 12:30 | THE DEAL MAKING HUB
Concurrent deal rooms across sectors

Deal Room 1: Infrastructure & Energy

· Project presentations: Women-led renewable energy, construction, transport
· Target: €100M+ project financing

Deal Room 2: Technology & Digital

· Scale-up pitches: Female-led fintech, edtech, healthtech, cleantech
· Target: €50M+ venture funding

Deal Room 3: Manufacturing & Trade

· Export-ready women-owned manufacturing businesses
· Target: €75M+ trade financing and off-take agreements

13:30 - 15:00 | POLICY ADOPTION SESSION
"From Dialogue to Implementation"

Ministerial Roundtables:

· Finance Ministers: Adopting women's access to capital policies
· Trade Ministers: Implementing gender-responsive trade agreements
· ICT Ministers: Scaling digital inclusion initiatives

15:30 - 17:00 | CLOSING LEADERSHIP ASSEMBLY
"The Kinshasa Consensus & Forward Agenda"

Key Outcomes:

1. African Women's Economic Charter - Continental policy framework
2. Global Alliance for African Women's Economic Empowerment - Partnership structure
3. Women's Investment Facility - Dedicated funding mechanism
4. 2026-2027 Implementation Roadmap - Concrete action plan
INTEGRATED SECURITY & RIGHTS COMPONENT
(As one strategic element among many)
16:00 - 17:00 | STRATEGIC ROUNDTABLE
"Economic Security as an Enabler for Women's Economic Participation"
· Focus: Practical solutions for safe economic environments
· Positioning: One essential element within broader economic framework
· Output: Integrated recommendations for mainstream policies`,
      participants:
        "Women leaders top government officials, corporate board members, investors, and entrepreneurs from across Africa and the globe to shape the continent's within the broader sovereign agenda and drive tangible economic outcomes for better inclusion and growth.",
      outcomes:
        "Board Appointments to Sovereign & Corporate Entities, Launch of the Women-Backed Enterprises Investment Fund, Signed Procurement Contracts for Women-Owned Businesses.",
      submitUrl:
        "https://readdy.ai/api/form/infrastructure-summit-registration",
    },


    {
      id: 2,
      title: "THE GREAT INAUGURATION:Setting the Sovereign Agenda",
      date: "April 14-15, 2026",
      location: "Luanda, Angola (In partnership with the African Union)",
      theme: "Africa Economic Forum Cooperation Summit (Africa's Davos)",
      objective: "#",
      image: "/images/annual.jpg",
      description: `
This is the strategic launchpad for the year, where we convene at the diplomatic heart of Africa. 
The Cooperation Summit integrates macroeconomic strategy with the core pillars of sovereignty—
fiscal policy, security, energy independence, and food security.

The focus is on defining the "rules of the game" for the year ahead: how African nations leverage their assets 
to negotiate from a position of strength in a realigning world.

Key Outcomes:
- The Addis Ababa Consensus (a strategic framework for investment & sovereignty)
- Bilateral Cooperation Agreements
- Sovereign Wealth Fund Strategies
- Regional Security Pacts

Integrated Side Event:
- Africa Youth Forum on Leadership & Sovereignty

---------------------------------------------------------
PROGRAM AGENDA – DAY 1
---------------------------------------------------------

08:00 – 09:00 | Welcome & Strategic Networking
- Diplomatic Breakfast: Ministers, Gulf investors, and CEOs meet in curated 1:1 sessions  
- Deal Matchmaking: AI-powered app connects attendees based on investment interests (tech, energy, infrastructure)

09:00 – 10:30 | Opening Session: Africa in the Geopolitics of Investment
Theme: How Africa Can Leverage US–China–Gulf Rivalries for Capital Flows  
Moderator: Economic Strategist, Africa Advisors

Speakers:
- Post-2024 US investor sentiment on Africa
- Dubai as Africa’s deal-making hub
- Avoiding debt traps & attracting equity
- Africa’s tech unicorn potential

Action:
- Launch of the “Africa–Gulf Investment Pipeline” (50 pre-vetted high-impact projects)

10:30 – 12:00 | Panel 1: Currency Wars & Financial Sovereignty
Theme: Dollar, Yuan, Crypto – How Africa Can Hedge Risks

Speakers:
- Gold & tangible assets  
- Blockchain for African currencies  
- Role of development banks  

Deal Component:
- Signing Ceremony: African central banks × Gulf sovereign funds – gold-backed trade agreements

12:00 – 14:00 | VIP Luncheon: Closed-Door Deal Tables
- 10 curated deal roundtables (e.g., Tech Exit Strategies, Infrastructure PPPs)  
- Pitch Zone: 5-minute startup pitches to Gulf sovereign funds (Founders Fund & Saudi PIF)

14:00 – 15:30 | Panel 2: Technology & Digital Sovereignty
Theme: Can Africa Bypass Western Tech Giants?

Speakers:
- Local vs global tech dominance  
- Patient capital for startups  
- Why Silicon Valley bets on Africa  

Deal Component:
- MoU Signing: African fintechs × (institution)

15:30 – 17:00 | Panel 3: Energy & New Alliances
Theme: Oil, Green Gas, Nuclear – Who Will Fund Africa’s Transition?

Speakers:
- Fossil fuels vs renewables  
- Africa’s natural gas race  
- Solar partnerships  

Deal Component:
- Live Auction: 3 African renewable energy projects

17:00 – 18:30 | The Grand African Deal
Keynote:
- Industrialization & self-reliance  

Announcements:
1. Africa–Gulf Infrastructure Fund ($5B commitment – Saudi PIF + AfDB)  
2. Deal Room Results: e.g., “Nigeria signs $1.2B rail PPP with DP World”

18:30 – 21:00 | Celebration & Closed-Door Signings
- Deal Room remains open (final negotiations with notaries on-site)  
- Performance: Burna Boy or Youssou N’Dour  

------------------------------------------------
PROGRAM AGENDA – DAY 2: SECTOR DEEP DIVES
---------------------------------------------------------

08:00 – 09:00 | Sector-Specific Breakfasts
- Agriculture: Hosted by (institution)  
- Critical Minerals: Hosted by DRC Mining Ministry  
- Health: Hosted by (institution)  
- Infrastructure: Hosted by (institution)  
- Tourism: Hosted by (institution)

09:00 – 10:30 | Plenary: Intra-African Trade Revolution
Moderator: (Name)

Speakers:
- Pan-African payment systems  
- Border modernization  
- Digital trade corridors  

Action:
- Launch of Africa Trade Gateway digital platform

10:30 – 12:00 | Parallel Sector Sessions

AGRICULTURE & AGRI-TECH
Theme: “Feeding 2 Billion by 2050”

Speakers:
- Climate-smart agriculture  
- Gulf–Africa partnerships  
- Vanilla & spice value chains  

Deal:
- $200M agri-processing zone announcement

CRITICAL MINERALS
Theme: “From Extraction to Batteries”

Speakers:
- Lithium processing  
- Local value addition  
- Processing joint ventures  

Deal:
- Rare earths refinery MoU

HEALTH SOVEREIGNTY
Theme: “Vaccines to Pharma 4.0”

Speakers:
- Manufacturing partnerships  
- mRNA tech transfer  
- Vaccine logistics hubs  

Deal:
- African mRNA consortium launch

INFRASTRUCTURE
Theme: “Connecting the Next 500 Million”

Speakers:
- Desert-to-power initiative  
- Port modernization  
- Belt & Road 2.0  

Deal:
- Trans-African rail feasibility signing

TOURISM
Theme: “Luxury Safari to Space Tourism”

Speakers:
- Visa-free Africa  
- Future tourism trends  
- Island resort investments  

Deal:
- $1B eco-tourism fund launch

12:00 – 14:00 | Deal Making Lunches
- Country-specific investment roundtables  
- Startup pitch battles judged by:  
  - Y Combinator  
  - Saudi PIF Ventures  
  - Norrsken Foundation  

14:00 – 15:30 | Commerce Wars Panel
Theme: “AfCFTA vs US/China Trade Blocs”

Speakers:
- Multilateralism  
- US Trade Representative – AGOA renewal  
- BRI priorities  

Action:
- Live poll on trade alliance preferences

15:30 – 17:00 | Future Sessions

Agriculture:
- Lab-grown meat demo  

Minerals:
- Asteroid mining talk – UAE Space Agency  

Health:
- AI diagnostics showcase  

Infrastructure:
- Hyperloop prototype reveal  

Tourism:
- Virtual reality safari experience  

17:00 – 18:30 | Closing Deal Rally
- Rapid-fire deal announcements (2 minutes each)  
- Africa Investment Scoreboard reveal  
- Unicorn Cup award for top startup  

18:30+ | Cultural Closing
- Live art auction featuring African futurism  
- Afrobeats beach party`,

      participants: "Government ministers, infrastructure investors, development banks, construction companies, and engineering firms",
      outcomes: "The Addis Ababa Consensus (a strategic framework for investment & sovereignty), Bilateral Cooperation Agreements, Sovereign Wealth Fund Strategies, Regional Security Pacts.",
      submitUrl: "https://readdy.ai/api/form/infrastructure-summit-registration",
    },
    {
      id: 3,
      title: "THE BEDROCK: Financing the Extractives Transition",
      theme: "Africa Mining & Minerals Forum",
      date: "May 26-27, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "/images/miningafrica.jpg",
description: `
Africa's minerals are the bedrock of the global energy transition. 
This forum is dedicated to moving the continent from mere extraction to value-chain dominance. 
We focus on local beneficiation, ESG-compliant mining, and financing mineral processing plants.

The forum directly connects African Mining Ministers with battery manufacturers, EV automakers, 
and green-tech investors to negotiate deals that retain value and jobs on the continent. 
This forum will be hosted by a leading mineral-rich nation.

Key Outcomes:
- Mine-to-Manufacture Joint Ventures  
- ESG Compliance & Green Mining Agreements  
- Critical Minerals Supply Contracts  

---------------------------------------------------------
PROGRAM | APRIL 22–23, 2026
---------------------------------------------------------

DAY 1: FROM EXTRACTION TO VALUE-CHAIN DOMINANCE

08:00 – 09:30 | Sovereign Strategy Breakfast  
Theme: “The Continental Minerals Strategy: Leveraging Critical Resources for Industrialization.”  
Featuring Ministers of Mines from key resource-rich nations.

09:30 – 11:00 | Opening Plenary  
Theme: “The Great Realignment: Can the World’s Green Transition Succeed Without African Value Addition?”

11:30 – 13:00 | Deep-Dive Sessions  
Track A: The Battery Revolution – From Mine to Gigafactory (Cobalt, Lithium, Graphite)  
Track B: ESG as a Competitive Advantage – Green Mining & Community Trust  
Track C: Sovereign Management – Optimizing Royalty Regimes & State Participation  

14:00 – 17:00 | The Pitch Arena  
Mineral Projects of Scale: Live presentations of pre-vetted mining and beneficiation projects  
to a global panel of off-takers and investors (EV manufacturers, battery giants).

19:00 – 21:00 | Exclusive Gala Dinner  
Hosted by the Government of Zambia.

---------------------------------------------------------
DAY 2: NEGOTIATING THE DEALS
---------------------------------------------------------

09:00 – 11:00 | Off-Taker & Investor Perspectives  
Global battery consortia, automotive OEMs, and trading houses outline their supply chain 
strategies and investment criteria.

11:00 – 13:00 | Structured Matchmaking  
Pre-scheduled meetings between project sponsors, mining majors, and industrial off-takers.

13:00 – 14:00 | Leadership Luncheon  
Fireside Chat with CEOs of global mining giants and African sovereign wealth funds.

14:00 – 16:00 | Deal Clinics  
Clinic 1: Structuring Beneficiation JVs – Term Sheets & Local Content  
Clinic 2: Financing Mine-to-Market Infrastructure (Rail, Power, Ports)  
Clinic 3: Insurance & Risk Mitigation for Jurisdictional Challenges  

16:00 – 17:00 | Closing Ceremony & Deal Announcements  
Public signing of MoUs for new processing plants and supply agreements.`,
      participants:
        "Energy ministers, renewable energy companies, oil and gas executives, and climate finance institutions, forming the continent from mere extraction to value-chain dominance. We focus on local beneficiation, ESG-compliant mining, and financing mineral processing plants.",
      outcomes:
        "Mine-to-Manufacture Joint Ventures, ESG Compliance & Green Mining Agreements, Critical Minerals Supply Contracts.",
      submitUrl:
        "https://readdy.ai/api/form/energy-conference-registration",
    },
    {
      id: 4,
      title: "THE BACKBONE: Powering Growth & Connectivity",
      theme: "Africa Energy & Infrastructures Forum",
      date: "June 23-24, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "/images/africaenergi.jpg",
description: `
Energy and infrastructure are the non-negotiable backbones of economic sovereignty. 
This forum is a dedicated deal-making hub for bankable projects in power, transport, 
and digital infrastructure. We showcase integrated projects—from renewable energy 
mega-grids and smart cities to ports and fibre-optic networks—to a global audience 
of construction firms, private equity, and multilateral development banks, with a 
strong emphasis on PPPs. This forum will be hosted by a nation driving major 
infrastructure development.

Key Outcomes:
- Signed Power Purchase Agreements (PPAs)
- Infrastructure PPP Contracts
- Project Financing Closes

---------------------------------------------------------
PROGRAM
---------------------------------------------------------

DAY 1: THE STRATEGIC FRAMEWORK & PROJECT SHOWCASE

08:00 – 09:30 | Leadership Breakfast  
Ministerial Dialogue on National Energy Master Plans.

09:30 – 11:00 | Opening Plenary  
Theme: “The Sovereign Infrastructure Agenda: Financing Africa's Backbone.”

11:30 – 13:00 | Deep-Dive Sessions  
Track A: The Green Hydrogen Revolution  
Track B: Transcontinental Rail & Port Corridors  
Track C: Digital Infrastructure as a Public Good  

14:00 – 17:00 | The Project Pitch Arena  
Live presentations of 15 pre-vetted, bankable infrastructure projects to a panel 
of global financiers.

19:00 – 21:00 | Gala Dinner & Deal-Making Reception

---------------------------------------------------------
DAY 2: THE DEAL-DOING & INVESTMENT CLINICS
---------------------------------------------------------

09:00 – 11:00 | Investor Perspectives  
Global Private Equity and Development Finance Institutions outline their 
investment criteria.

11:00 – 13:00 | Structured Matchmaking  
Pre-scheduled one-on-one meetings between project sponsors and investors.

13:00 – 14:00 | Leadership Luncheon  
Fireside Chat with the CEOs of leading global energy corporations.

14:00 – 16:00 | Deal Clinics  
Clinic 1: Structuring Bankable PPPs  
Clinic 2: Navigating ESG Compliance  
Clinic 3: Risk Mitigation Instruments  

16:00 – 17:00 | Closing Ceremony & Outcomes Report  
Summary of MoUs and deals announced.
`,
      participants:
        "Trade ministers, manufacturers, exporters, logistics companies, and trade finance institutions focused on building Africa's economic backbone through strategic energy and infrastructure development. and digital infrastructure—to a global audience of construction firms, private equity, and multilateral development banks, with a strong emphasis on PPPs. This forum will be hosted by a nation driving major infrastructure development.",
      outcomes:
        "Outcomes: Signed Power Purchase Agreements (PPAs), Infrastructure PPP Contracts, Project Financing Closes.",
      submitUrl: "https://readdy.ai/api/form/trade-expo-registration",
    },


    {
      id: 5,
      title: "THE SUSTENANCE: Building Resilient Food Systems",
      theme: "Africa Agriculture & Food Security Forum",
      date: "July- 21-22, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "/images/africafood.jpg",
description: `
This forum is dedicated to transforming Africa into the world's next breadbasket. 
We focus on integrating smallholder farmers into global value chains through 
cutting-edge technology and innovative finance. The agenda features live AgTech 
demonstrations and structured meetings between agribusiness giants, commodity traders, 
logistics firms, and African producers to structure deals for large-scale commercial 
farming and processing facilities. This forum will be hosted by a nation at the 
forefront of agricultural innovation.

Key Outcomes:
- Long-term Off-take Agreements
- AgTech Deployment Contracts
- Investments in Processing and Logistics Infrastructure

---------------------------------------------------------
PROGRAM | July 21–22, 2026
---------------------------------------------------------

DAY 1: FEEDING THE FUTURE — TECHNOLOGY & SCALE

08:00 – 09:30 | Leadership Breakfast  
Theme: “Food as Sovereignty — National Strategies for Self-Sufficiency and Export.”  
With Ministers of Agriculture and Food Security.

09:30 – 11:00 | Opening Plenary  
“Africa's Breadbasket Potential: Closing the Productivity Gap with Technology and Finance.”

11:30 – 13:00 | Deep-Dive Sessions  
Track A: The AgTech Revolution — Precision Farming, IoT & Drones for Smallholder Integration  
Track B: Logistics & Cold Chains — Unlocking Intra-African Trade under AfCFTA  
Track C: Climate-Resilient Agriculture — Water Management & Drought-Resistant Crops  

14:00 – 17:00 | The Pitch Arena  
Agribusiness Projects of Scale: Presentations of commercial farming, processing, 
and logistics ventures to global commodity traders and agri-investors.

19:00 – 21:00 | Gala Dinner  
“Taste of Africa” Experience

---------------------------------------------------------
DAY 2: STRUCTURING THE SUPPLY CHAINS
---------------------------------------------------------

09:00 – 11:00 | Off-Taker & Investor Perspectives  
Global food conglomerates, commodity traders, and supermarket chains outline 
sourcing needs and partnership models.

11:00 – 13:00 | Structured Matchmaking  
Pre-scheduled meetings between agribusinesses, commercial farmers, and off-takers/financiers.

13:00 – 14:00 | Leadership Luncheon  
Fireside Chat with CEOs of global agribusinesses and fintech platforms.

14:00 – 16:00 | Deal Clinics  
Clinic 1: Negotiating Long-Term Off-Take Agreements  
Clinic 2: Blended Finance Models for Smallholder Farmer Aggregation  
Clinic 3: Agri-Export Standards, Certification & Market Access  

16:00 – 17:00 | Closing Ceremony & Outcomes Report  
Announcements of major supply contracts and investments in processing facilities.`,
      participants:
        "Central bank governors, commercial banks, investment funds, insurance companies, and fintech startups focused on financing Africa's agricultural transformation through innovative financial solutions and risk mitigation strategies.",
      outcomes:
        "Long-term Off-take Agreements, AgTech Deployment Contracts, Investments in Processing and Logistics Infrastructure.Financial sector reforms, capitaKey Outcomes: Fund Launches, Capital Commitments to African-focused Funds, Direct Family Office Investments.l market integration, and financial inclusion programs",
      submitUrl:
        "https://readdy.ai/api/form/financial-summit-registration",
    },


    {
      id: 6,
      title: "THE WEALTH: Managing & Multiplying Capital",
      theme: "Africa Wealth Forum",
      date: "August 18-19, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "/images/africawelth.jpeg",
description: `
This is Africa's premier gathering for the guardians of capital.
The Wealth Forum is where African pension funds, sovereign wealth funds, and family offices meet global private equity, venture capital, and asset managers. 
The focus is on de-risking African investments and presenting curated, vetted opportunities from the sectors covered in our previous forums, translating project pipelines into investment-ready vehicles. 
This forum will be hosted by a leading financial hub.

Key Outcomes: Fund Launches, Capital Commitments to African-focused Funds, Direct Family Office Investments.

PROGRAM

DAY 1: THE NEW AFRICAN CAPITAL LANDSCAPE
· 08:00 - 09:30 | Sovereign Capital Breakfast: "Mobilizing African Capital for African Development: The Role of Pension and Sovereign Funds." (Closed-door session
· 09:30 - 11:00 | Opening Plenary: "De-risking Africa: Investment Vehicles for the Next Decade (Private Equity, VC, Infrastructure Debt, Public Markets)."
· 11:30 - 13:00 | Deep-Dive Sessions:
  · Track A: Private Equity & Venture Capital – Scaling African Champions.
  · Track B: Infrastructure as an Asset Class – Yield and Impact.
  · Track C: Capital Markets Deepening – Securitization and Local Currency Financing.
· 14:00 - 17:00 | The Pitch Arena: Curated Investment Opportunities. 
  General Partners (GPs) of top African-focused funds present strategies and pipeline deals to Limited Partners (LPs) and family offices.
· 19:00 - 21:00 | Exclusive Gala Dinner at a premier estate.

DAY 2: CAPITAL CONNECTIONS
· 09:00 - 11:00 | LP Perspectives: Global and African pension funds, sovereign funds, and large family offices share allocation strategies for Africa.
· 11:00 - 13:00 | Structured Capital Connections: Pre-scheduled one-on-one meetings between GPs (fund managers) and LPs (investors in funds).
· 13:00 - 14:00 | Leadership Luncheon: Fireside Chat with CIOs of the world's largest sovereign wealth funds on their Africa thesis.
· 14:00 - 16:00 | Deal Clinics:
  · Clinic 1: Co-Investment Structures – Going Direct with GPs.
  · Clinic 2: ESG and Impact Measurement Frameworks for Limited Partners.
  · Clinic 3: Navigating Currency and Exit Risks.
· 16:00 - 17:00 | Closing Ceremony: Announcements of new fund launches and capital commitments.
`,

      participants:
        "Government ministers, agribusiness companies, commodity traders, logistics firms, and agricultural technology providers, vetted opportunities from the sectors covered in our previous forums, translating project pipelines into investment-ready vehicles. This forum will be hosted by a leading financial hub. focused on building Africa's agricultural transformation through innovative financial solutions and risk mitigation strategies.",
      outcomes:
        "Outcomes: Fund Launches, Capital Commitments to African-focused Funds, Direct Family Office Investments.",
      submitUrl:
        "https://readdy.ai/api/form/agriculture-forum-registration",
    },


    {
      id: 7,
      title: "THE FUTURE: Igniting the Digital Economy",
      theme: "Africa Tech Forum",
      date: "Sept 22-23, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:"/images/tech.jpg",
description: `
Africa's tech revolution is reshaping its economic destiny. 
This forum is a dynamic, high-energy showcase of innovation, from FinTech and EdTech to HealthTech and CleanTech. 
It is designed as a massive platform for startups to pitch to global VCs, for corporates to find tech solutions, and for governments to articulate their digital economy strategies. 
Expect live investment announcements on stage. 
This forum will be hosted by a nation recognized as a digital innovation leader.

Key Outcomes: Venture Capital Funding Rounds, Tech Startup Acquisitions, Government Tech Procurement Deals.
Integrated Side Event: Africa Youth Innovation Challenge & Summit.

PROGRAM

DAY 1: THE DIGITAL ECONOMY IGNITED

· 08:00 - 09:30 | Founder & Investor Breakfast: "Building Unicorns: Scaling from Lagos to the World."
· 09:30 - 10:30 | Opening Plenary: "Africa's Digital Sovereignty: Building Platforms, Not Just Using Them."
· 10:30 - 12:00 | Deep-Dive Sessions:
  · Track A: FinTech & the Future of Finance – Payments, Lending, and Blockchain.
  · Track B: HealthTech & EdTech – Solving Human Capital Challenges at Scale.
  · Track C: ClimateTech – AI for Agriculture, Green Energy, and ESG Data.
· 14:00 - 17:00 | The Pitch Arena: The Next Wave of African Tech. 
  High-growth startups pitch to top-tier global VCs and corporate venture arms. 
  (Integrated Side Event: Africa Youth Innovation Challenge Finals)
· 19:00 - 21:00 | Tech Innovation Gala & Awards.

DAY 2: SCALING THROUGH PARTNERSHIPS

· 09:00 - 11:00 | Corporate & VC Perspectives: 
  Multinational corporations and leading VCs outline their acquisition, partnership, and investment targets.
· 11:00 - 13:00 | Structured Matchmaking: 
  Pre-scheduled meetings between startups, scale-ups, VCs, and corporate M&A teams.
· 13:00 - 14:00 | Leadership Luncheon: 
  Fireside Chat with "exited" African tech founders and the VCs who backed them.
· 14:00 - 16:00 | Deal Clinics:
  · Clinic 1: Series A/B Term Sheets and Venture Debt.
  · Clinic 2: Government Tech Procurement – How to Win Large Contracts.
  · Clinic 3: Preparing for Due Diligence and M&A Exits.
· 16:00 - 17:00 | Closing Ceremony & Live Funding Announcements: 
  On-stage announcements of investment rounds.`,

      participants:
        "Telecom ministers, tech startups, venture capitalists, and technology corporations promoting digital innovation in Africa and building the continent's tech ecosystem with a focus on sovereignty and local capacity building for long-term growth. and for governments to articulate their digital economy strategies. Expect live investment announcements on stage. This forum will be hosted by a nation recognized as a digital innovation leader.",
      outcomes:
        "Outcomes: Venture Capital Funding Rounds, Tech Startup Acquisitions, Government Tech Procurement Deals.",
      submitUrl:
        "https://readdy.ai/api/form/healthcare-summit-registration",
    },


    {
      id: 8,
      title: "THE BRAND: Showcasing the African Experience",
      theme: "Africa Tourism & Trade Forum",
      date: "October 20-21, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "/images/africatourism.jpg",
description: `
This forum is dedicated to selling the African experience to the world and dismantling barriers to intra-African trade. 
We target global hotel chains, airlines, tour operators, and retail giants, focusing on high-value tourism (eco, cultural, luxury) and the practical implementation of the AfCFTA. 
The agenda includes exclusive site visits and one-on-one deal-making sessions between tourism ministers and international investors. 
This forum will be hosted by a premier tourism destination.

Key Outcomes: Hotel Management and Development Agreements, New Air Route Launches, Cross-border Trade and Retail Partnerships.

PROGRAM

DAY 1: SELLING THE AFRICAN EXPERIENCE

· 08:00 - 09:30 | Ministerial Breakfast: "Destination Africa: A Unified Continental Tourism Strategy."
· 09:30 - 11:00 | Opening Plenary: "Beyond Safari: High-Value Tourism, Cultural Assets, and the AfCFTA Opportunity."
· 11:30 - 13:00 | Deep-Dive Sessions:
  · Track A: Luxury Eco-Tourism and Conservation-Led Development.
  · Track B: Film, Music, and Cultural Festivals as Economic Drivers.
  · Track C: The Single African Air Transport Market – Making Travel Seamless.
· 14:00 - 17:00 | The Pitch Arena: Destination Development Projects. 
  Presentations of integrated tourism resorts, hotel chains, and logistics hubs to global investors. 
  (Integrated Side Event: Africa Women Forum on Leadership in Tourism & Trade)
· 19:00 - 21:00 | Gala Dinner at a legendary Marrakech palace.

DAY 2: SIGNING THE DEALS

· 09:00 - 11:00 | Investor & Operator Perspectives: 
  Global hotel brands, airline executives, and retail giants present their African expansion plans.
· 11:00 – 13:00 | Structured Matchmaking: 
  Pre-scheduled meetings between Tourism Ministers, project developers, and hotel/airline/retail chains.
· 13:00 – 14:00 | Leadership Luncheon: 
  Fireside Chat with CEOs of global luxury hospitality groups.
· 14:00 – 16:00 | Deal Clinics:
  · Clinic 1: Hotel Management Agreement Negotiations.
  · Clinic 2: Financing Tourism Infrastructure with ESG-Linked Loans.
  · Clinic 3: Navigating Customs and Standards for Intra-African Trade.
· 16:00 – 17:00 | Closing Ceremony: 
  Signing of new air service agreements, hotel management contracts, and cross-border trade partnerships.`,

      participants:
        "Tourism ministers, hotel chains, tour operators, airlines, and tourism technology companies celebrating Africa's unique experiences and promoting cross-border trade and tourism partnerships to the world. And Trade ministers, exporters, logistics companies, and trade finance institutions focused on building Africa's economic brand through strategic tourism development and trade facilitation.",
      outcomes:
        "Key Outcomes: Hotel Management and Development Agreements, New Air Route Launches, Cross-border Trade and Retail Partnerships.",
      submitUrl:
        "https://readdy.ai/api/form/education-conference-registration",
    },


    {
      id: 9,
      title: "THE CORE: Investing in Human Capital",
      theme: "Africa Health Forum",
      date: "Nov, 21-22, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "/images/africahealth.jpg",
description: `
A healthy population is the core of economic productivity and sovereignty. 
This forum addresses Africa's healthcare infrastructure gap and its burgeoning pharmaceutical market. 
It brings together hospital groups, pharma manufacturers, medical tech companies, and impact investors to forge partnerships for building diagnostic centers, local vaccine production, and deploying scalable health-tech solutions. 
This forum will be hosted by a nation pioneering health sector reforms and innovation.

Key Outcomes: Hospital Construction and Management Contracts, Pharmaceutical Manufacturing Joint Ventures, Health Tech Platform Investments.

PROGRAM

DAY 1: BUILDING RESILIENT HEALTH SYSTEMS

· 08:00 - 09:30 | Ministerial & Director-General Breakfast: "Health Security as Economic Security: Post-Pandemic Priorities."
· 09:30 - 11:00 | Opening Plenary: "Health Sovereignty: Local Vaccine Production, Pharmaceutical Manufacturing, and Universal Health Coverage."
· 11:30 - 13:00 | Deep-Dive Sessions:
  · Track A: The Hospital of the Future – PPPs for Tertiary Care and Diagnostic Centers.
  · Track B: Pharma & Vaccines – Building Local Manufacturing Capacity.
  · Track C: Telehealth and AI – Democratizing Access to Quality Care.
· 14:00 - 17:00 | The Pitch Arena: Health Infrastructure Projects. 
  Presentations of hospital projects, pharma plant plans, and scalable health-tech solutions to investors and global health organizations.
· 19:00 - 21:00 | Gala Dinner.

DAY 2: PARTNERING FOR HEALTH

· 09:00 - 11:00 | Investor & Partner Perspectives: 
  Pharmaceutical multinationals, medical equipment giants, and impact investors outline African partnership and investment strategies.
· 11:00 - 13:00 | Structured Matchmaking: 
  Pre-scheduled meetings between health ministries, hospital operators, pharma companies, and investors.
· 13:00 - 14:00 | Leadership Luncheon: 
  Fireside Chat with CEOs of global pharma companies and African health innovators.
· 14:00 - 16:00 | Deal Clinics:
  · Clinic 1: Structuring PPPs for Hospital Construction and Management.
  · Clinic 2: Technology Transfer and Licensing Agreements for Local Pharma.
  · Clinic 3: Supply Chain Financing for Medical Equipment and Commodities.
· 16:00 - 17:00 | Closing Ceremony & Outcomes Report: 
  Announcements of new manufacturing JVs and healthcare infrastructure investments.`,

      participants:
        "People ministers, healthcare providers, pharmaceutical companies, and health technology firms focused on strengthening Africa's healthcare systems and promoting health sovereignty through local manufacturing and innovative health solutions transforming Africa into a hub for quality, affordable healthcare services and products. and dismantling barriers to intra-African trade. We target global hotel chains, airlines,",
      outcomes:
        "Hospital Construction and Management Contracts, Pharmaceutical Manufacturing Joint Ventures, Health Tech Platform Investments.",
      submitUrl:
        "https://readdy.ai/api/form/tourism-forum-registration",
    },


    {
      id: 10,
      title: "THE GRAND FINALE: Ratifying the Year of Deals",
      theme: "AEF Grand Finale & Global Inspiration Awards",
      date: "December 9-10, 2026",
      location: "UAE (A Global Nexus for Africa)",
      image:
        "/images/awardsend.jpg",
    description: `
The culminating event of the AEF journey. 
This is not a talking shop but a grand celebration of the year's achievements and a look ahead to 2027. 
The centerpiece is the launch of the AEF 2026 Deal Book, a comprehensive portfolio of partnerships and investments initiated through our forums. 
The prestigious Global Inspiration Awards will honor visionary leaders across business, philanthropy, climate action, and innovation who are shaping a positive future for Africa and the world.

Key Outcomes: Signature of Major Cross-Sectoral Deals, Launch of the Annual Deal Book, Recognition of Global Changemakers, Strategic Vision for 2027.

PROGRAM

THE HOST COUNTRY PARTNER ADVANTAGE

By partnering with the AEF as a Host Country, nations gain an unparalleled platform to:

· Showcase National Investment Priorities to a curated global audience  
· Position themselves as continental leaders in a specific sector (e.g., Mining, Tech, Health)  
· Accelerate flagship projects through direct access to global investors and developers  
· Shape continental policy and regulatory frameworks  

For information on becoming a Host Country Partner, contact the Head of Global Partnerships.

WHY PARTNER WITH THE AFRICA ECONOMIC FORUM?

· Unmatched Access & Influence: Engage in closed-door sessions with Cabinet Ministers, Central Bank Governors, CEOs, and global institutional investors  
· Curated Deal-Flow Pipeline: Gain priority access to a year-long, vetted pipeline of investment opportunities across all key sectors  
· Strategic Narrative Alignment: Align your brand with the most powerful economic story of the 21st century: The Rise of Africa  
· Maximized ROI: An integrated, year-round partnership across multiple high-impact forums provides continuous brand visibility and business development opportunities  

SPONSORSHIP TIERS & BENEFITS

We offer tailored partnership packages designed for maximum impact. Tiering includes:

1. GLOBAL STRATEGIC PARTNER (Exclusive)  
   - Maximum brand visibility across all AEF forums  
   - Priority access to closed-door sessions with Ministers, Central Bank Governors, and CEOs  
   - Lead role in keynote presentations and panel discussions  

2. SECTORAL FORUM LEAD PARTNER  
   - Exclusive association with a specific sector forum (e.g., Mining, Tech, Health)  
   - Branding across sessions, pitch arenas, and collateral materials  
   - Access to sector-specific deal-making tables  

3. HOST COUNTRY PARTNER  
   - Showcase national investment priorities to a curated global audience  
   - Accelerate flagship projects with direct access to global investors  
   - Influence continental policy and regulatory frameworks  

4. KNOWLEDGE PARTNER  
   - Highlight thought leadership in reports, research, and workshops  
   - Participation in content curation and panel moderation  
   - Visibility in sector-focused publications  

5. OFFICIAL INNOVATION PARTNER  
   - Branding across technology showcases, startup pitch arenas, and innovation sessions  
   - Access to Africa Youth Innovation Challenge & Summit  
   - Networking with global venture capital and corporate investors  

CONTACT & INQUIRIES

- Strategic Partnerships: [Name], Head of Global Partnerships  
  Email: partnerships@africaecoforum.org  

- Speaker Inquiries: [Name], Head of Content & Curation  
  Email: speakers@africaecoforum.org  

- General Information:  
  Website: www.africaef.com/2026  

Join us at The African Table. Let's redesign the future, together.`,

      participants:
        "Government ministers, multinational corporations, institutional investors, and global changemakers celebrating Africa's achievements in 2026 and setting the strategic vision for 2027 through cross-sectoral partnerships and inspirational leadership. And Trade ministers, exporters, logistics companies, and trade finance institutions focused on building Africa's economic brand through strategic tourism development and trade facilitation.",
      outcomes:
        "Signature of Major Cross-Sectoral Deals, Launch of the Annual Deal Book, Recognition of Global Changemakers, Strategic Vision for 2027.",
      submitUrl:
        "https://readdy.ai/api/form/tourism-forum-registration",
    },

    
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);
  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    title: '',
    date: '',
    submitUrl: '',
  });

  // Modal state (added for completeness)
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showChairmanModal, setShowChairmanModal] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    setIsProfileDropdownOpen(false);
  };

  const handleViewProfile = () => {
    navigate("/profile");
    setIsProfileDropdownOpen(false);
  };

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  // Dummy handlers (replace with real implementations)
  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement sign‑in logic here
    setShowSignInModal(false);
  };

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement create‑account logic here
    setShowSignInModal(false);
  };

  const switchToCreateAccount = () => setShowCreateAccount(true);
  const switchToSignIn = () => setShowCreateAccount(false);

  // Filter events based on selected category
  // NOTE: The current data set does not contain a `category` field.
  // This guard ensures the code does not break if `category` is undefined.
  const filteredEvents = selectedCategory === "all"
    ? events
    : events.filter((event) => (event as any).category === selectedCategory);

  const openEventDetails = (event: any) => setSelectedEventId(event.id);
  const closeEventDetails = () => setSelectedEventId(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRegister = (event: any, submitUrl: string) => {
    setRegistrationData({
      title: event.title,
      date: event.date,
      submitUrl: submitUrl,
    });
    setIsRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
    setRegistrationData({
      title: "",
      date: "",
      submitUrl: "",
    });
  };

  const downloadAgenda = () => {
    const doc = new jsPDF();
    
    // Adicione a logo da AEF
    // replace path with real logo path in public folder, e.g. /logo.png
    // doc.addImage requires base64 or Image element for remote images in some setups
    // keeping a simple header for now
    doc.text("THE AFRICA ECONOMIC FORUM 2026", 10, 20);
    doc.text("ANNUAL THEME: Africa and Global Realignments: Investments, Alliances, and Strategic Opportunities", 10, 30);
    
    // Add simple footer
    const pageHeight = doc.internal.pageSize.height;
    doc.text("www.africaef.com | info@africaef.com", 10, pageHeight - 10);

    doc.save("agenda_aef_2026.pdf");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://static.readdy.ai/image/849a2f489cee8d6814d30c5afad3a84a/55c329d4d58fb687f70c222c549f7ec1.png"
                  alt="AEF Logo"
                  className="w-10 h-10 object-contain"
                />
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/initiatives"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Initiatives
              </Link>
              <Link
                to="/stakeholders"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Stakeholders
              </Link>
              <Link
                to="/agenda"
                className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600"
              >
                Agenda
              </Link>
              <Link
                to="/publications"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Publications
              </Link>
              <Link
                to="/meetings"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Meetings
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsProfileDropdownOpen(!isProfileDropdownOpen)
                    }
                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title={user.user_metadata?.full_name || user.email}
                  >
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {getInitials(
                          user.user_metadata?.full_name ||
                            user.email?.charAt(0) ||
                            "U"
                        )}
                      </div>
                    )}
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                        <div className="font-medium">
                          {user.user_metadata?.full_name || "User"}
                        </div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                      <button
                        onClick={handleViewProfile}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </Link>
              )}
            </div>

            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i
                className={`ri-${isMobileMenuOpen ? "close" : "menu"}-line text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/initiatives"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Initiatives
              </Link>
              <Link
                to="/stakeholders"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stakeholders
              </Link>
              <Link
                to="/agenda"
                className="block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link
                to="/publications"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                to="/meetings"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 pb-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 px-3 py-2">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {getInitials(
                            user.user_metadata?.full_name ||
                              user.email?.charAt(0) ||
                              "U"
                          )}
                        </div>
                      )}
                      <span className="text-gray-700 font-medium">
                        {user.user_metadata?.full_name || "User"}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleViewProfile();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium mb-2"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/signin"
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20conference%20agenda%20with%20African%20leaders%20and%20international%20delegates%20presenting%20on%20stage%2C%20large%20audience%20in%20modern%20conference%20hall%20with%20presentation%20screens%20and%20formal%20diplomatic%20setting&width=1920&height=800&seq=agenda-hero-2026&orientation=landscape')`,
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">THE AFRICA ECONOMIC FORUM 2026</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ANNUAL THEME: Africa and Global Realignments: Investments, Alliances, and Strategic Opportunities <br/>
            Our Mantra: We Don't Just Talk. We Deal.
          </p>
          <a 
            href="/Brochure.pdf"
            download="AEF-2026-Full-Agenda.pdf"
            className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer"
          >
            Download Full Agenda
          </a>
        </div>
      </section>

      {/* Chairman Message Button & Modal */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">A Message from the Chairman</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the vision and strategic direction shaping The Africa Economic Forum 2026
          </p>
          <button
            onClick={() => setShowChairmanModal(true)}
            className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer transition-colors"
          >
            Read the Full Message
          </button>
        </div>
      </section>

      {/* Chairman Modal */}
      {showChairmanModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowChairmanModal(false)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-teal-700 text-white p-8 flex justify-between items-start border-b-4 border-blue-800">
              <div>
                <h3 className="text-3xl font-bold mb-2">A Message from the Chairman</h3>
                <p className="text-blue-100 text-lg">The Vision Behind The Africa Economic Forum 2026</p>
              </div>
              <button
                onClick={() => setShowChairmanModal(false)}
                className="text-white hover:text-gray-200 ml-4 flex-shrink-0"
                aria-label="Close"
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8 text-gray-700 leading-relaxed">
              <div className="text-lg space-y-6">
                <p className="text-gray-800 font-medium text-justify">
                  The world is recalibrating. The old paradigms are shifting, and in this new geopolitical and economic landscape, Africa emerges not as a spectator but as the definitive arena of opportunity. The Africa Economic Forum is the platform where this new reality is forged.
                </p>

                <p className="text-justify">
                  We are <strong>The African Table</strong>. It is Africa that extends the invitation, sets the agenda, and defines the terms of a truly strategic, win-win cooperation. Our model is deliberate: a perpetual, year-long journey across the continent, diving deep into each critical sector. We move from high-level consensus to granular deal-making, ensuring that every conversation is purpose-driven and outcome-oriented.
                </p>

                <p className="text-justify">
                  A cornerstone of our model is <strong>strategic co-creation</strong>. Each forum is hosted by a sovereign nation that is a leading partner and sponsor, demonstrating its commitment to leading the continental agenda in that specific sector. This ensures the highest level of government engagement and deal-making potential.
                </p>

                <p className="text-justify">
                  In 2026, we confront the theme of <strong>'Global Realignments'</strong> head-on. This is more than a topic; it is our operational reality. We will connect global capital with Africa's immense opportunities, build the alliances that matter, and unlock strategic value that has been waiting for the right moment—and the right platform.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
                  <p className="text-justify text-gray-800">
                    <strong className="text-blue-900">This is not just another forum. This is where the future of Africa is designed, deal by deal.</strong> I invite you to join us at The Table.
                  </p>
                </div>

                <div className="pt-6 border-t-2 border-gray-200">
                  <p className="font-bold text-lg text-blue-900">— Chairman</p>
                  <p className="text-gray-600">Africa Economic Forum</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t p-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowChairmanModal(false)}
                className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 font-medium cursor-pointer transition-colors"
              >
                Close
              </button>
              <a
                href="/Brochure.pdf"
                download="AEF-2026-Full-Agenda.pdf"
                className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 font-medium cursor-pointer transition-colors"
              >
                Download Full Agenda
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2026 Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              THE 2026 JOURNEY: A YEAR OF STRATEGIC ACTION
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Discover the strategic journey through Africa's economic transformation in 2026. Join us as we navigate critical sectors, forge transformational partnerships, and unlock unprecedented opportunities across the continent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date.split(",")[0]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span className="text-sm">{event.location}</span>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed max-h-16 overflow-hidden">
                    {event.description}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => openEventDetails(event)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() =>
                        handleRegister(event, event.submitUrl)
                      }
                      className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 font-medium text-sm whitespace-nowrap cursor-pointer"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join The African Table</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of the conversations that are shaping Africa's economic
            future. Join us for a year of strategic action, deal‑making, and
            transformational partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer"
            >
              Become a Strategic Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 font-medium whitespace-nowrap cursor-pointer">
              Download 2026 Program
            </button>
          </div>
        </div>
      </section>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {showCreateAccount ? "Create Account" : "Sign In"}
                </h3>
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {!showCreateAccount ? (
                <>
                  <form onSubmit={handleSignInSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="remember_me"
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">
                          Remember me
                        </span>
                      </label>
                      <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Sign In
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?
                      <button
                        onClick={switchToCreateAccount}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Create Account
                      </button>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <form
                    onSubmit={handleCreateAccountSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Create a password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Create Account
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?
                      <button
                        onClick={switchToSignIn}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </>
              )}

              {!showCreateAccount && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-google-fill text-red-500 text-lg"></i>
                      <span className="ml-2">Google</span>
                    </button>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-linkedin-fill text-blue-600 text-lg"></i>
                      <span className="ml-2">LinkedIn</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-6">About us</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our mission</Link></li>
                <li><Link to="/framework" className="text-gray-300 hover:text-white cursor-pointer">Our Institutional Framework</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-white cursor-pointer">History</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Leadership and governance</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our Impact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li><Link to="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Centres</Link></li>
                <li><Link to="/meetings" className="text-gray-300 hover:text-white cursor-pointer">Meetings</Link></li>
                <li><Link to="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">Stakeholders</Link></li>
                <li><Link to="/agenda" className="text-gray-300 hover:text-white cursor-pointer">Forum Stories</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Press releases</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-white cursor-pointer">Photo gallery</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Podcasts</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Videos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                {user ? (
                  <>
                    <li>
                      <button onClick={handleViewProfile} className="text-gray-300 hover:text-white cursor-pointer">
                        View Profile
                      </button>
                    </li>
                    <li>
                      <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/signin" className="text-gray-300 hover:text-white cursor-pointer">Sign In</Link>
                  </li>
                )}
                <li><a href="mailto:info@africaef.com" className="text-gray-300 hover:text-white">info@africaef.com</a></li>
                <li><a href="https://www.africaef.com" className="text-gray-300 hover:text-white">www.africaef.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/17Jr8NpqZJ/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/the-africa-economic-forum/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="https://www.instagram.com/theafricaeconomicforum?igsh=MWowNmw1NjdueXNkbQ==" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy &amp; Terms of Service</Link>
                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Meeting Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeEventDetails}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedEvent.title}
          >
            <div className="flex justify-between items-start p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h3>
                {selectedEvent.subtitle && (
                  <p className="text-sm text-gray-700 mt-1 font-medium">{selectedEvent.subtitle}</p>
                )}
                <p className="text-sm text-gray-600 mt-1">
                  {selectedEvent.date} • {selectedEvent.location}
                </p>
              </div>
              <button
                onClick={closeEventDetails}
                className="text-gray-400 hover:text-gray-600 ml-4"
                aria-label="Close"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {selectedEvent.image && (
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-56 object-cover rounded-md"
                />
              )}

              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {/* theme */}
                {selectedEvent.theme && (
                  <>
                    <h4 className="font-semibold text-gray-900">Theme</h4>
                    <p className="text-gray-600 mb-4">{selectedEvent.theme}</p>
                  </>
                )}

                {/* objective (compatível com 'objective' ou 'objestive' typo) */}
                {((selectedEvent as any).objective || (selectedEvent as any).objestive) && (
                  <>
                    <h4 className="font-semibold text-gray-900">Objective</h4>
                    <p className="text-gray-600 mb-4">{(selectedEvent as any).objective ?? (selectedEvent as any).objestive}</p>
                  </>
                )}

                {/* full description */}
                <h4 className="font-semibold text-gray-900 mt-2">Description</h4>
                <p className="mb-4">{selectedEvent.description}</p>

                <h4 className="font-semibold text-gray-900 mt-4">Target Participants</h4>
                <p className="text-gray-600 mb-4">{selectedEvent.participants}</p>

                <h4 className="font-semibold text-gray-900 mt-4">Expected Outcomes</h4>
                <p className="text-gray-600 mb-4">{selectedEvent.outcomes}</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    handleRegister(selectedEvent, selectedEvent.submitUrl);
                    closeEventDetails();
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium text-sm"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Meeting Registration Form */}
       <MeetingRegistrationForm
         isOpen={isRegistrationOpen}
         onClose={closeRegistration}
         meetingTitle={registrationData.title}
         meetingDate={registrationData.date}
         submitUrl={registrationData.submitUrl}
       />
     </div>
   );
 }
 // ...existing code...