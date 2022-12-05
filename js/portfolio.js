/* WELCOME */

const _intro = document.createElement('div'),
    _portrait = document.createElement('img'),
    _messageContainer = document.createElement('div'),
    _greeting = document.createElement('h2'),
    _intromessage = document.createElement('p');

_intro.className = 'section';
_intro.id = 'intro';
_portrait.id = 'portrait';
_portrait.src = './images/portrait.jpg';
_greeting.appendChild(document.createTextNode(_copy_greeting));
_intromessage.appendChild(document.createTextNode(_copy_intromessage));

document.body.appendChild(_intro);
_intro.appendChild(_portrait);
_intro.appendChild(_messageContainer);
_messageContainer.appendChild(_greeting);
_messageContainer.appendChild(_intromessage);

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
    _resume_skills_heading = document.createElement('h4'),
    _resume_summary = document.createElement('div');

_resume.className = 'section';
_resume.id = 'resume';
_resume_heading.innerHTML = 'Resume';
_resume_experience_heading.innerHTML = 'Experience';
_resume_education_heading.innerHTML = 'Certifications & Education';
_resume_skills_heading.innerHTML = 'Skills';

document.body.appendChild(_resume);
_resume.appendChild(_resume_heading);
_resume.appendChild(_resume_summary);
_resume.appendChild(_resume_skills);
_resume.appendChild(_resume_education);
_resume.appendChild(_resume_experience);


_resume_experience.appendChild(_resume_experience_heading);
_resume_education.appendChild(_resume_education_heading);
_resume_skills.appendChild(_resume_skills_heading);

// Executive Summary

const summaryElement = document.createElement('p');

summaryElement.id = 'summary';
summaryElement.innerHTML = _summary;

_resume_summary.appendChild(summaryElement);



//Education

const _perscholas = {
    award: 'Software Engineer Certification',
    location: 'PerScholas',
    date: '2022 - 2023'
}

const _cca = {
    award: 'BFA Illustration',
    location: 'California College of the Arts - San Francisco, CA',
    date: '2004 - 2009'
}

const appendEducation = (education) => {
    const { award, location, date } = education;

    // define elements
    const eContainer = document.createElement('div'),
        eAwardContainer = document.createElement('div'),
        eAward = document.createElement('h5'),
        eLocation = document.createElement('p'),
        eDate = document.createElement('p');

    eContainer.className = 'job';
    eContainer.classList.add('education');
    eAwardContainer.className = 'location';

    eAward.innerHTML = award;
    eLocation.innerHTML = location;
    eDate.innerHTML = date;

    _resume_education.appendChild(eContainer);
    eContainer.appendChild(eAward);
    eContainer.appendChild(eAwardContainer);
    eAwardContainer.appendChild(eLocation)
    eAwardContainer.appendChild(eDate)
}

appendEducation(_perscholas);
appendEducation(_cca);

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
    aheading.innerHTML = 'Key Achievments:';
    achievments.className = 'achievments';

    _resume_experience.appendChild(container);
    container.appendChild(title);
    container.appendChild(titlecontainer);
    container.appendChild(achievments);
    titlecontainer.appendChild(location);
    titlecontainer.appendChild(date);

    for(let bullet of job.bullets){
        let li = document.createElement('li');
        li.innerHTML = bullet;
        achievments.appendChild(li);
    }
}

//Skills

const _skill_container = document.createElement('ul');
_skill_container.className = 'skill-container';

for(let skill of _skills){
    const skillElement = document.createElement('li');
    skillElement.className = 'skill';
    skillElement.innerHTML = skill;
    _skill_container.appendChild(skillElement);
}

_resume_skills.appendChild(_skill_container);