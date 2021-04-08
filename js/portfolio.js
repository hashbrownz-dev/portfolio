/* WELCOME */

const _intro = document.createElement('div'),
    _greeting = document.createElement('h2'),
    _intromessage = document.createElement('p');

_intro.className = 'section';
_intro.id = 'intro';
_greeting.appendChild(document.createTextNode(_copy_greeting));
_intromessage.appendChild(document.createTextNode(_copy_intromessage));
/*
_greeting.id = 'greeting';
_intromessage.id = 'intro-message';
*/
document.body.appendChild(_intro);
_intro.appendChild(_greeting);
_intro.appendChild(_intromessage);

/* PROJECTS */

const _portfolio = document.createElement('div'),
    _portfolio_heading = document.createElement('h2');

_portfolio.className = 'section';
_portfolio.id = 'projects';
_portfolio_heading.innerHTML = 'Projects';
document.body.appendChild(_portfolio);
_portfolio.appendChild(_portfolio_heading);

for(let project of _projects){
    let container = document.createElement('div'),
        title = document.createElement('h3'),
        tech = document.createElement('p'),
        short = document.createElement('p'),
        link = project.linkProj;

    container.className = 'project';
    title.innerHTML = project.title;
    tech.innerHTML = project.tech;
    tech.className = 'tech';
    short.innerHTML = project.descShort;
    short.className = 'desc';
    //Background Image?
    container.appendChild(title);
    container.appendChild(tech);
    container.appendChild(short);
    _portfolio.appendChild(container);

    container.addEventListener('click', () => {
        console.log(`Go To: ${link}`);
        window.location.href = link;
    });
}
/* ABOUT */

const _about = document.createElement('div'),
    _about_heading = document.createElement('h2'),
    _about_p = document.createElement('p');

_about.className = 'section';
_about.id = 'about';
_about_heading.innerHTML = 'About Me';
_about_p.innerHTML = _copy_about;
_about.appendChild(_about_heading);
_about.appendChild(_about_p);
document.body.appendChild(_about);

/* RESUME */

const _resume = document.createElement('div'),
    _resume_heading = document.createElement('h2'),
    _resume_experience = document.createElement('div'),
    _resume_experience_heading = document.createElement('h4'),
    _resume_education = document.createElement('div'),
    _resume_education_heading = document.createElement('h4'),
    _resume_skills = document.createElement('div'),
    _resume_skills_heading = document.createElement('h4');

_resume.className = 'section';
_resume.id = 'resume';
_resume_heading.innerHTML = 'Resume';
_resume_experience_heading.innerHTML = 'Experience';
_resume_education_heading.innerHTML = 'Education';
_resume_skills_heading.innerHTML = 'Skills';

document.body.appendChild(_resume);
_resume.appendChild(_resume_heading);
_resume.appendChild(_resume_experience);
_resume.appendChild(_resume_education);
_resume.appendChild(_resume_skills);
_resume_experience.appendChild(_resume_experience_heading);
_resume_education.appendChild(_resume_education_heading);
_resume_skills.appendChild(_resume_skills_heading);

//Education

let econtainer = document.createElement('div'),
    etitlecont = document.createElement('div'),
    etitle = document.createElement('h5'),
    eloc = document.createElement('p'),
    edate = document.createElement('p');

econtainer.className = 'job';
etitlecont.className = 'location';
etitle.innerHTML = 'BFA Illustration';
eloc.innerHTML = 'California College of the Arts - San Francisco, CA';
edate.innerHTML = '2004 - 2009';

_resume_education.appendChild(econtainer);
econtainer.appendChild(etitle);
econtainer.appendChild(etitlecont);
etitlecont.appendChild(eloc);
etitlecont.appendChild(edate);

//Work Experience

for(let job of _jobs){
    let container = document.createElement('div'),
        titlecontainer = document.createElement('div'),
        title = document.createElement('h5'),
        location = document.createElement('p'),
        date = document.createElement('p'),
        description = document.createElement('p'),
        achievments = document.createElement('ul'),
        aheading = document.createElement('h6');

    container.className = 'job';
    titlecontainer.className = 'location';
    title.innerHTML = job.position;
    location.innerHTML = job.location;
    date.innerHTML = job.dates;
    description.innerHTML = job.description;
    aheading.innerHTML = 'Key Achievments:';
    achievments.className = 'achievments';

    _resume_experience.appendChild(container);
    container.appendChild(title);
    container.appendChild(titlecontainer);
    container.appendChild(description);
    container.appendChild(aheading);
    container.appendChild(achievments);
    titlecontainer.appendChild(location);
    titlecontainer.appendChild(date);

    for(let achievment of job.achievments){
        let li = document.createElement('li');
        li.innerHTML = achievment;
        achievments.appendChild(li);
    }
}

//Skills

const _skill_container = document.createElement('div');
_skill_container.className = 'skill-container';

for(let skill of _skills){
    let container = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('h5');
    container.className = 'skill';
    img.src = skill.icon;
    img.title = skill.name;
    img.alt = skill.name;
    p.innerHTML = skill.name;
    container.appendChild(img);
    container.appendChild(p);
    _skill_container.appendChild(container);
}

_resume_skills.appendChild(_skill_container);