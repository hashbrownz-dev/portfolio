/*INTRO*/

const _copy_greeting = "Hi, I'm Roosevelt";
const _copy_intromessage = "I'm a web developer with a keen eye for design and a strong passion for creating intuitive and engaging websites and applications. Scroll to view my most recent projects.";

/*ABOUT*/

const _copy_about = 'About Me';

/*RESUME*/

const _copy_resume_carvingice = {
    position: 'Art Director',
    location: 'Carving Ice - Placentia, CA',
    dates: '1/1/2000  - 1/2/2000',
    description: 'A brief Description of the position held.',
    achievments: ['achievment 1',
        'achievment 2',
        'achievment 3']
};
const _copy_resume_aquareign = {
    position: 'Lead Technician',
    location: 'Aqua Reign - Anaheim, CA',
    dates: '1/1/2000 - 1/2/2000',
    description: 'A brief Description of the position held.',
    achievments: ['achievment 1',
        'achievment 2',
        'achievment 3']
};
const _copy_resume_freelance = {
    position: 'Freelance',
    location: 'Corona, CA',
    dates: '1/1/2000 - 1/2/2000',
    description: 'A brief Description of the position held.',
    achievments: ['achievment 1',
        'achievment 2',
        'achievment 3']
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
    {copy: 'Home', title: 'Return to Homepage', href: '/index.html', target: '_self'},
    {copy: 'Contact', title: 'Email Me', href: 'mailto:rooseveltblow@gmail.com', target: '_blank'},
    {copy: 'Github', title: 'View my Github repositories', href: 'https://github.com/hashbrownz-dev/', target: '_blank'}
];

const _projects = [_proj_spacecat, _proj_SWP, _proj_SLG, _proj_blackjack],
    _sitelinks = [{name: 'Projects', href: '/index.html#projects'},{name: 'About', href: '/index.html#about'},{name: 'Resume', href: '/index.html#resume'}];