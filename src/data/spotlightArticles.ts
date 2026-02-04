// Spotlight Article Types and Data

export interface SpotlightArticle {
    id: string;
    slug: string;
    category: 'Institutional Partnership' | 'Strategic Architecture' | 'Capital & Execution' | 'Continuity & Institutional Memory' | 'Flagship Platform' | 'Strategic Frameworks' | 'Policy Architecture';
    title: string;
    summary: string;
    intro: string;
    content: string[];
    date: string;
    featured: boolean;
    image?: string;
}

export const spotlightArticles: SpotlightArticle[] = [
    {
        id: '1',
        slug: 'afdb-technical-partner-africa-women-forum',
        category: 'Institutional Partnership',
        title: 'African Development Bank Becomes Technical Partner of the Africa Women Forum',
        summary: 'The Africa Economic Forum announces the African Development Bank (AfDB) as the official technical partner of the Africa Women Forum (AWF), marking a major institutional milestone to strengthen women\'s leadership, policy alignment, and investment-driven economic transformation across Africa.',
        intro: 'The Africa Economic Forum is honored to announce that the African Development Bank (AfDB) has formally joined the Africa Women Forum (AWF) as an official technical partner.',
        content: [
            'This partnership represents a significant institutional milestone for the Africa Women Forum and reinforces its positioning as a premier continental platform for women\'s economic leadership, policy engagement, and investment-driven transformation.',
            'The African Development Bank, as Africa\'s leading multilateral development finance institution, brings unparalleled technical expertise, policy knowledge, and sectoral depth across infrastructure, financial systems, private sector development, governance, and sustainable growth. Its engagement with the Africa Women Forum strengthens AWF\'s capacity to translate high-level dialogue into credible, scalable, and policy-aligned outcomes.',
            'This collaboration reflects a shared strategic vision: placing African women at the center of economic architecture, not as peripheral participants, but as architects of Africa\'s development strategies, capital deployment, and governance reforms. The partnership reinforces the principle that women\'s leadership is not a social add-on to development — it is a structural pillar of economic sovereignty, institutional resilience, and long-term growth.',
            'Through this technical partnership, the Africa Women Forum will integrate AfDB\'s analytical frameworks, policy instruments, and development experience into its programming, ensuring that AWF initiatives are grounded in rigorous economic analysis and aligned with continental and national priorities. This elevates the Forum from a convening space into a platform of execution, policy coherence, and institutional credibility.',
            'For the Africa Economic Forum, this partnership sends a strong signal to governments, investors, and global institutions: the Africa Women Forum is not symbolic. It is a serious platform where gender, capital, policy, and sovereign development intersect to produce measurable outcomes.',
            'The Africa Economic Forum views this partnership as a cornerstone in building a continental ecosystem where women\'s leadership is structurally embedded in Africa\'s economic future.'
        ],
        date: '2026-01-31',
        featured: true,
        image: '/images/africa-women.jpg'
    },
    {
        id: '2',
        slug: 'african-table-rebuilding-africa-seat-global-decision-making',
        category: 'Strategic Architecture',
        title: 'The African Table: How AEF Is Rebuilding Africa\'s Seat in Global Economic Decision-Making',
        summary: 'AEF\'s core strategic architecture positions Africa not as a participant but as the host, setting the agenda and defining the terms of global economic engagement.',
        intro: 'The Africa Economic Forum was founded on a strategic conviction: Africa must not only participate in global economic conversations, Africa must host them, shape them, and define their terms.',
        content: [
            'This conviction is embodied in AEF\'s core strategic architecture: The African Table.',
            'The African Table is more than a symbolic concept. It is a structural redesign of how Africa engages with global capital, institutions, and governments. It represents a shift from externally framed engagement toward Africa-centered agenda-setting, where priorities, frameworks, and cooperation models are defined from African strategic interests and sovereign development goals.',
            'At the African Table, Africa is not a guest. Africa is the host.',
            'By curating the space, setting the agenda, and defining the terms of engagement, Africa reclaims agency over how partnerships are structured, how priorities are ranked, and how cooperation translates into execution.',
            'The African Table moves beyond episodic conferences and transactional meetings. It establishes a perpetual architecture of engagement, where Africa leads continuous dialogue across governments, investors, institutions, and global partners throughout the year.',
            'This model transforms Africa\'s role from reactive to architectural. Instead of responding to externally designed frameworks, Africa becomes a co-author of global economic arrangements, shaping how cooperation, investment, and policy alignment are structured.',
            'Through the African Table, AEF positions Africa not as a market to be evaluated, but as a strategic co-leader shaping the future of global economic cooperation.',
            'This is a fundamental repositioning, from participation to authorship, from inclusion to leadership, from attendance to architecture.'
        ],
        date: '2026-01-30',
        featured: false,
        image: '/images/spotlight/african-table.jpg'
    },
    {
        id: '3',
        slug: 'from-access-to-alignment-aef-deal-rooms',
        category: 'Capital & Execution',
        title: 'From Access to Alignment: Why AEF\'s Deal Rooms Matter More Than Networking',
        summary: 'AEF Deal Rooms are structured execution environments where governments and investors engage on the conditions required for projects to move forward, transforming engagement from protocol to performance.',
        intro: 'In many global forums, engagement between investors and governments remains largely social. Panels, receptions, and informal meetings dominate the interaction, creating visibility but often leaving execution risks unresolved.',
        content: [
            'The Africa Economic Forum was designed to move beyond this model.',
            'At AEF, Deal Rooms are not pitch sessions — they are structured execution environments.',
            'AEF Deal Rooms are purpose-built negotiation spaces where governments, investors, and project sponsors engage directly on the conditions required for projects to move forward. This includes regulatory clarity, policy alignment, political commitment, institutional coordination, and execution pathways.',
            'For serious investors, the greatest risks are rarely technical. They are institutional: uncertainty around policy direction, regulatory stability, political priorities, and administrative bottlenecks.',
            'AEF Deal Rooms allow investors to test assumptions directly with decision-makers. Rather than guessing how policies will evolve, investors can validate political support, clarify regulatory frameworks, and assess execution readiness before deploying capital.',
            'This transforms government engagement from protocol to performance.',
            'Deal Rooms allow capital to understand how governments think, what they prioritize, and where policy support will be strongest. This creates a rare form of clarity in emerging markets: a clearer investment map shaped through direct institutional alignment.',
            'At AEF, capital does not meet governments socially. Capital meets governments structurally.',
            'This alignment reduces uncertainty, strengthens investor confidence, and accelerates the transition from interest to execution. It is not networking. It is risk management and execution architecture.'
        ],
        date: '2026-01-29',
        featured: false,
        image: '/images/spotlight/access-to-alignment.png'
    },
    {
        id: '4',
        slug: 'multi-sector-continuity-aef-institutional-memory',
        category: 'Continuity & Institutional Memory',
        title: 'Why Multi-Sector Does Not Mean Fragmented: How AEF Creates Continuity for Investors and Governments',
        summary: 'AEF ensures continuity through institutional relationships, policy frameworks, and project pipelines rather than thematic repetition, creating long-term value for investors and sovereign partners.',
        intro: 'At first glance, AEF\'s multi-sector structure can appear fragmented. Each forum focuses on a different thematic area. However, this interpretation misunderstands how serious capital and sovereign partners operate.',
        content: [
            'Continuity at AEF is not sector-based. It is relationship-based, policy-based, and pipeline-based.',
            'Investors do not build strategies around conferences. They build strategies around governments, institutional relationships, and long-term capital mandates.',
            'AEF ensures continuity by maintaining the same core government counterparts across multiple forums: finance ministries, investment agencies, regulators, presidential offices, and key public institutions. Even as sector themes rotate, the institutional relationships remain constant.',
            'This allows trust to accumulate, political intelligence to deepen, and institutional memory to form.',
            'From an investor perspective, this is far more valuable than remaining within a single sector. Capital mandates — such as infrastructure, energy transition, healthcare systems, food systems, and digital infrastructure — naturally span multiple sectors. AEF\'s architecture allows investors to pursue the same capital thesis across different thematic forums with the same sovereign partners.',
            'In addition, projects do not mature in a single meeting. They evolve over time. A project may be introduced at one forum, refined through policy dialogue, and return later in Deal Rooms for execution alignment and closure.',
            'AEF thus becomes a project maturation pipeline, not a one-time pitching environment.',
            'This creates a rare institutional advantage: continuity through relationships, policies, and execution logic, rather than through thematic repetition.',
            'AEF continuity is institutional, not thematic. This is precisely what long-term capital and sovereign partners value most.'
        ],
        date: '2026-01-28',
        featured: false,
        image: '/images/spotlight/multi-sector-continuity.png'
    },
    {
        id: '5',
        slug: 'africa-women-forum-2026-architects-sovereign-economic-future',
        category: 'Flagship Platform',
        title: 'Africa Women Forum 2026: Women as Architects of Africa\'s Sovereign Economic Future',
        summary: 'AWF 2026 will convene women leaders, policymakers, and investors to design concrete strategies for women\'s leadership in governance, finance, and sovereign development.',
        intro: 'The Africa Women Forum (AWF) stands as one of the flagship platforms of the Africa Economic Forum, designed to position women at the center of Africa\'s economic, political, and strategic transformation.',
        content: [
            'AWF 2026 will convene women leaders, heads of state, policymakers, investors, entrepreneurs, and global institutions to shape concrete strategies for women\'s leadership in governance, finance, entrepreneurship, and sovereign development.',
            'The Forum will bring together high-level voices including former President of the Republic of Mauritius, Ameenah Gurib-Fakim, and former Vice President of Costa Rica, Ana Helena Chacón Echeverría, alongside senior African government officials, multilateral institutions, and global investors.',
            'With the African Development Bank joining as a technical partner, AWF is positioned as a serious continental platform where women\'s leadership intersects directly with investment strategies, policy frameworks, and institutional reform.',
            'The Africa Economic Forum views AWF as a strategic pillar of Africa\'s future. It is a platform where women are not only represented, but where they actively design systems, institutions, and capital flows that shape Africa\'s sovereignty and long-term competitiveness.',
            'AWF is a central engine of Africa\'s economic architecture.',
            'Through AWF, the Africa Economic Forum reinforces a simple truth: Africa\'s future will be built by women who lead, govern, invest, and architect transformation at scale.'
        ],
        date: '2026-01-27',
        featured: false,
        image: '/images/spotlight/africa-women-forum.jpg'
    }
];

export const getArticleBySlug = (slug: string): SpotlightArticle | undefined => {
    return spotlightArticles.find(article => article.slug === slug);
};

export const getFeaturedArticle = (): SpotlightArticle | undefined => {
    return spotlightArticles.find(article => article.featured);
};

export const getArticlesByCategory = (category: string): SpotlightArticle[] => {
    if (category === 'All') return spotlightArticles;
    return spotlightArticles.filter(article => article.category === category);
};
