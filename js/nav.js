/* NAVIGATION ELEMENTS */

const _nav = document.createElement('div'),
    _navscroll = document.createElement('div'),
    _navname = document.createElement('h1'),
    _navlinks = document.createElement('ul'),
    _navtitle = document.createElement('p'),
    _arrow = document.createElement('button'),
    _arrow_img = document.createElement('img');

_nav.id = 'nav-container';
_navscroll.id = 'nav';
_navname.id = 'nameplate';
_navname.innerHTML = '<a href = "index.html" class = "home">Roosevelt Blow</a>';
_navlinks.id = 'nav-links';
_arrow.type = 'button';
_arrow_img.src = 'images/arrow.png';
if(project){
    _navname.innerHTML = '<a href = "../index.html" class = "home">Roosevelt Blow</a>';
    _arrow_img.src = '../images/arrow.png';
}

let linksvisible = false;

_arrow.addEventListener('click', e => {
    //Reveal Navigation Links
    if(linksvisible){
        _arrow_img.style.transform = 'rotate(0)';
        _navscroll.style.left = '0';
        linksvisible = false;
    }else{
        _arrow_img.style.transform = 'rotate(0.5turn)';
        _navscroll.style.left = '-100%';
        linksvisible = true;
    }
});

document.body.appendChild(_nav);
_nav.appendChild(_navscroll);
_nav.appendChild(_arrow);
_navscroll.appendChild(_navname);
_navscroll.appendChild(_navlinks);
_arrow.appendChild(_arrow_img);

for(let link of _sitelinks){
    let li = document.createElement('li'),
        a = document.createElement('a');
    a.className = 'nav-link';
    a.href = link.href;
    if(project)a.href = '../' + link.href;
    a.innerHTML = link.name;
    li.appendChild(a);
    _navlinks.appendChild(li);
}

function revealNav(){

}

/* FOOTER */

const _footer = document.createElement('footer'),
    _footer_link_container = document.createElement('div'),
    _footer_copy = document.createElement('p');

_footer_copy.innerHTML = '&copy 2021 Roosevelt Blow';
_footer.appendChild(_footer_link_container);
_footer.appendChild(_footer_copy);
document.body.appendChild(_footer);

for(let link of _footer_links){
    let a = document.createElement('a');
    a.innerHTML = link.copy;
    a.title = link.title;
    a.href = link.href;
    if(project)a.href = '../'+link.href;
    a.target = link.target;
    a.className = 'flink';
    _footer_link_container.appendChild(a);
}