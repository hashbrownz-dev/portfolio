/*INTRO*/

const _copy_greeting = "Hi, I'm Roosevelt";
const _copy_intromessage = "I'm a web developer with a keen eye for design and a strong passion for creating intuitive and engaging websites and applications. Scroll to view my most recent projects.";

/*ABOUT*/

const _copy_about = `I am a front-end web developer, with more than 7 years of professional experience in the creative sector.  I began my career as a freelance graphic designer, providing illustration and design services for local businesses.  Prior to the pandemic, I worked as an Art Director for an event company that specialized in ice sculptures and water features.  In this role, I was solely responsible for the conceptualization and oversaw the production of all ice products and novelties.  Throughout my professional journey, the developments I've made on a professional and personal level have given me a unique perspective on web development.<br><br>
I began working at Carving Ice in 2014, accepting an entry level position and performing various production related tasks.  Once I had learned the fundamentals of production, from the procurement of raw materials to the completion of a finished product, I turned my attention to the technology behind these processes.  I taught myself how to program and operate the CNC machines used to cut the ice and  refurbished a derelict CNC machine, adding additional productivity during our peak season.  At this point, I took over production, and within a year, I became the Art Director.<br><br>
While at Carving Ice, I fell in love with the technical aspects of production, learning to limit materal waste through effective design, reduce machine time, and develop interactive pieces that combined practicality and functionality with spectacle.  In my personal time, I also began developing my first game, StarCrush.  These two experiences formed the technical foundation for my transition into web development.<br><br>
I enjoy web development because it allows me to use my intelligence and creativity to create digital experiences that can easily be accessed by people all over the world.  I enjoy the challenge of creating web applications that are aesthetically interesting, accesible, and intuitive.`;

/*RESUME*/

const _copy_resume_carvingice = {
    position: 'Art Director',
    location: 'Carving Ice - Placentia, CA',
    dates: '12/2014 - 3/2020',
    description: `Design and direct the production and delivery of ice sculptures and ice novelties.  Meet with clients to discuss project specifications.  Inspect all productions prior to delivery to ensure quality standards are met.  Establish weekly goals and production timelines to ensure all products are completed on time.`,
    achievments: ['Refurbished derelict machinery increasing productivity at no additional cost.',
        'Identified and implemented key process improvments to increase productivity and product quality.',
        'Optimized manufacturing processes, reducing waste material and reducing machine time by 25%.',
        'Provided excellent customer service, improving customer retention.',
        'Created and maintained forms and procedures to assist with production and delivery tasks.']
};
const _copy_resume_aquareign = {
    position: 'Lead Technician',
    location: 'Aqua Reign - Anaheim, CA',
    dates: '6/2015 - 11/2019',
    description: 'Oversee the onsite assembly of temporary digital water curtains.  Design custom performances to client specifications.  Repair and maintain mechanical components.  Perform in house testing of all equipment.',
    achievments: ['Introduced new software for designing water shows improving workflow and image clarity.',
        'Implemented new maintenance routines increasing equipment longevity.']
};
const _copy_resume_freelance = {
    position: 'Freelance',
    location: 'Corona, CA',
    dates: '9/2009 - 11/2014',
    description: 'Provided digital illustrations and designs for print for local clients within Los Angeles and Riverside County',
    achievments: ['Designed a logo and provided branding services for IAVT, San Diego',
        'Provided several clothing designs for the inaugural launch of Kreative Konstructs, Riverside',
        'Designed brochures, booklets, and other printed materials for CakNow, Orange County',
        'Designed digital ads for True Source Funding, Orange County',
        'Designed signage, brochures, and postcards for Wholesale Ice, Orange County']
};

const _jobs = [_copy_resume_carvingice, _copy_resume_aquareign, _copy_resume_freelance];
const _skills = [
    {name: 'Javascript', icon: 'images/skill-icon_js.png'},
    {name: 'HTML', icon: 'images/skill-icon_html.png'},
    {name: 'CSS', icon: 'images/skill-icon_css.png'},
    {name: 'Adobe XD', icon: 'images/skill-icon_xd.png'},
    {name: 'Photoshop', icon: 'images/skill-icon_ps.png'},
    {name: 'Illustrator', icon: 'images/skill-icon_ai.png'}
];

/*PROJECTS*/

const _proj_spacecat = {
    title: 'Space Cat',
    tech: 'Javascript, HTML, CSS',
    descShort: 'A clone of the PC-80 classic, Space Mouse, built with Vanilla Javascript and the canvas',
    descLong: 'Long Description',
    imgS: [
        {src: '../images/screens/Space-Cat_0000.png', alt: 'Space Cat - Title Screen'},
        {src: '../images/screens/Space-Cat_0001.png', alt: 'Space Cat - Exploring the Maze'},
        {src: '../images/screens/Space-Cat_0002.png', alt: 'Space Cat - Use Keys to Open Locked Doors!'},
        {src: '../images/screens/Space-Cat_0003.png', alt: 'Space Cat - Become Super Space Cat and Defeat the Ogres!'},
        {src: '../images/screens/Space-Cat_0004.png', alt: 'Space Cat - Can You Reach the Goal?'}
        ],
    imgL: [],
    linkProj: 'projects/spacecat.html',
    linkDemo: 'https://hashbrownz-dev.github.io/spacecat/',
    linkCode: 'https://github.com/hashbrownz-dev/spacecat'
}

const _proj_SWP = {
    title: 'Sight Word Practice',
    tech: 'Javascript, HTML, CSS',
    descShort: 'Short Description',
    descLong: 'Long Description',
    imgS: [
        {src: '../images/screens/SWP_0000.png', alt: 'Sight Word Practice - Sound Board'},
        {src: '../images/screens/SWP_0001.png', alt: 'Sight Word Practice - Word Selection'},
        {src: '../images/screens/SWP_0002.png', alt: 'Sight Word Practice - Flashcards'},
        {src: '../images/screens/SWP_0003.png', alt: 'Sight Word Practice - Results'},
        {src: '../images/screens/SWP_0004.png', alt: 'Sight Word Practice - Spelling Practice'},
        {src: '../images/screens/SWP_0005.png', alt: 'Sight Word Practice - Word Identification'}
    ],
    imgL: [],
    linkProj: 'projects/sightwords.html',
    linkDemo: 'https://hashbrownz-dev.github.io/SWP/',
    linkCode: 'https://github.com/hashbrownz-dev/SWP'
}

const _proj_SLG = {
    title: 'Shopping List Generator',
    tech: 'Javascript, HTML, CSS',
    descShort: 'A tool for building shopping lists, saving recipes, and keeping track of pantry staples',
    descLong: 'Long Description',
    imgS: [
        {src: '../images/screens/SLG_0002.png', alt: 'Shopping List Generator - Homepage'},
        {src: '../images/screens/SLG_0003.png', alt: 'Shopping List Generator - Build a Shopping List'},
        {src: '../images/screens/SLG_0005.png', alt: 'Shopping List Generator - View and Print Your Shopping List'},
        {src: '../images/screens/SLG_0004.png', alt: 'Shopping List Generator - View and Print Your Recipes'},
        {src: '../images/screens/SLG_0000.png', alt: 'Shopping List Generator - Edit Your Recipes'},
        {src: '../images/screens/SLG_0001.png', alt: 'Shopping List Generator - View and Edit Your Pantry List'}
    ],
    imgL: [],
    linkProj: 'projects/shoppinglistgen.html',
    linkDemo: 'https://hashbrownz-dev.github.io/SLG/',
    linkCode: 'https://github.com/hashbrownz-dev/SLG'
}

const _proj_blackjack = {
    title: 'Blackjack',
    tech: 'Javascript, HTML, CSS',
    descShort: 'A simple game of video Blackjack built with Vanilla Javascript, HTML, and CSS',
    descLong: 'Long Description',
    imgS: [
        {src: '../images/screens/Blackjack_0000.png', alt: 'Blackjack - Good Luck!'},
        {src: '../images/screens/Blackjack_0001.png', alt: 'Blackjack - Better Luck Next Time'},
        {src: '../images/screens/Blackjack_0002.png', alt: 'Blackjack - 21 Winner!'},
        {src: '../images/screens/Blackjack_0003.png', alt: 'Blackjack - Bust!'},
        {src: '../images/screens/Blackjack_0004.png', alt: 'Blackjack - Hit or Stand?'},
        {src: '../images/screens/Blackjack_0005.png', alt: 'Blackjack - Blackjack!'}
    ],
    imgL: [],
    linkProj: 'projects/blackjack.html',
    linkDemo: 'https://hashbrownz-dev.github.io/blackjack/',
    linkCode: 'https://github.com/hashbrownz-dev/blackjack'
}

/* FOOTER */

const _email_address = 'rooseveltblow@gmail.com';
const _footer_links = [
    {copy: 'Home', title: 'Return to Homepage', href: '/portfolio/index.html', target: '_self'},
    {copy: 'Contact', title: 'Email Me', href: 'mailto:rooseveltblow@gmail.com', target: '_blank'},
    {copy: 'Github', title: 'View my Github repositories', href: 'https://github.com/hashbrownz-dev/', target: '_blank'}
];

const _projects = [_proj_spacecat, _proj_SWP, _proj_SLG, _proj_blackjack],
    _sitelinks = [{name: 'Projects', href: '/portfolio/index.html#projects'},{name: 'About', href: '/portfolio/index.html#about'},{name: 'Resume', href: '/portfolio/index.html#resume'}];