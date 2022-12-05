/*INTRO*/

const _copy_greeting = "Hi, I'm Roosevelt";
const _copy_intromessage = "I'm a web developer with a keen eye for design and a strong passion for creating intuitive and engaging websites and applications. Scroll to view my most recent projects.";

/*ABOUT*/

const _copy_about = `<p>I am a front-end web developer, with more than 7 years of professional experience in the creative sector.  I began my career as a freelance graphic designer, providing illustration and design services for local businesses.  Prior to the pandemic, I worked as an Art Director for an event company that specialized in ice sculptures and water features.  In this role, I was solely responsible for the conceptualization and oversaw the production of all ice products and novelties.  Throughout my professional journey, the developments I've made on a professional and personal level have given me a unique perspective on web development.</p>
<p>I began working at Carving Ice in 2014, accepting an entry level position and performing various production related tasks.  Once I had learned the fundamentals of production, from the procurement of raw materials to the completion of a finished product, I turned my attention to the technology behind these processes.  I taught myself how to program and operate the CNC machines used to cut the ice and  refurbished a derelict CNC machine, adding additional productivity during our peak season.  At this point, I took over production, and within a year, I became the Art Director.</p>
<p>While at Carving Ice, I fell in love with the technical aspects of production, learning to limit materal waste through effective design, reduce machine time, and develop interactive pieces that combined practicality and functionality with spectacle.  In my personal time, I also began developing my first game, StarCrush.  These two experiences formed the technical foundation for my transition into web development.</p>
<p>I enjoy web development because it allows me to use my intelligence and creativity to create digital experiences that can easily be accessed by people all over the world.  I enjoy the challenge of creating web applications that are aesthetically interesting, accesible, and intuitive.</p>`;

/*RESUME*/

const _copy_resume_fedex = {
    position: 'Package Handler',
    location: 'FedEx - Aurora, CO',
    dates: '09/2022 - Present',
    bullets:[
        'Coordinate the sealing, labeling, and loading of packages to ensure the correct processing of packages',
        'Inspect inbound packages for hazmat labeling or damaged packaging',
        'Communicate with co-workers to ensure the safe and on-time delivery of goods'
    ]
}

const _copy_resume_medspeed = {
    position: 'Logistics Service Representative',
    location: 'MedSpeed - Aurora, CO',
    dates:'11/2021 - 06/2022',
    bullets:[
        'Transported medical equipment, samples, supplies, and other materials',
        'Maintained professional decorum while interacting with clients',
        'Executed routes according to company protocols'
    ]
}

const _copy_resume_carvingice = {
    position: 'Art Director',
    location: 'Carving Ice - Placentia, CA',
    dates: '12/2014 - 3/2020',
    bullets: [
        'Maintained company website and designed digital marketing materials',
        'Designed and directed the production and delivery of ice sculptures',
        'Met with clients to discuss project specifications and event logistics',
        'Inspected all productions to ensure quality standards were met',
        'Identified and implemented key process improvements to increase productivity and product quality',
        'Optimized manufacturing processes, reducing waste material and machine time by 25%'
    ]
};
const _copy_resume_aquareign = {
    position: 'Lead Technician',
    location: 'Aqua Reign - Anaheim, CA',
    dates: '6/2015 - 11/2019',
    bullets: [
        'Oversaw the onsite assembly of digital water curtains',
        'Designed custom performances to client satisfaction',
        'Tested, repaired, and maintained mechanical components',
        'Introduced new software for designing water shows improving workflow and image clarity'
    ]
};

const _jobs = [_copy_resume_fedex, _copy_resume_medspeed, _copy_resume_carvingice, _copy_resume_aquareign];

const _skills = [
    'Javascript',
    'MongoDB',
    'Express',
    'React',
    'Node.js',
    'HTML5',
    'CSS',
    'Git',
    'Postman',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Project Management',
    'Time Management',
    'Critical Thinking',
    'Troubleshooting',
    'Effective Communication',
    'Creative Problem Solving',
    'Entrepreneurial'
];

const _summary = 'Full Stack Developer with experience developing rich web applications using modern web technology. Former Art Director with proven experience managing multiple projects with various deadlines, communicating project specifications with clients and team members, and quality assurance.'

/*PROJECTS*/

const _proj_spacecat = {
    title: 'Space Cat',
    tech: 'Javascript, HTML, CSS',
    descShort: 'A clone of the PC-80 classic, Space Mouse, built with Vanilla Javascript and the canvas',
    descLong: 'Space Cat is a clone of the PC-80 classic, Space Mouse.  This project was built primarily with Vanilla Javascript and utilizes the canvas element to render graphics.  I create the sprites using Aseprite and the sound effects are assets from various free sound libraries.',
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
    descShort: 'A small collection of games designed to help small children learn High Frequency Words.',
    descLong: 'A small collection of games I designed for my daughter to help her learn her Sight Words.  I made this during the pandemic when her school was shutdown.  This project was built primarily with Vanilla Javascript.  My daughter was the lead visual designer on the project, while I provided spot illustrations and used code to execute her vision.  The sight word lists are based on the First Grade standard for the Corona-Norco Unified School District.  The audio samples were recorded by me.  Additional sound resources are from various free sound libraries.  This app is responsive and can be viewed on multiple devices.',
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
    descLong: 'A tool for building shopping lists, saving recipes, and keeping track of pantry staples.  The Shopping List Generator (SLG) saves recipes, a shopping list, and a pantry list to localStorage to be accessed at a later time on the same device.  Shopping list can be quickly created by adding recipes (which will automatically add their ingredients to the list) and pantry items from a stored list.  Additional items can be added using a text box.  This app is responsive and can be viewed on multiple devices.',
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
    descLong: 'A simple game of video Blackjack built with Vanilla Javascript, HTML, and CSS.  The game is rendered using DOM elements.',
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
    {copy: 'Home', title: 'Return to Homepage', href: 'index.html', target: '_self'},
    {copy: 'Contact', title: 'Email Me', href: 'mailto:rooseveltblow@gmail.com', target: '_blank'},
    {copy: 'Github', title: 'View my Github repositories', href: 'https://github.com/hashbrownz-dev/', target: '_blank'}
];

const _projects = [_proj_SLG, _proj_spacecat, _proj_SWP, _proj_blackjack],
    _sitelinks = [{name: 'Projects', href: 'index.html#projects'},{name: 'About', href: 'index.html#about'},{name: 'Resume', href: 'index.html#resume'}];