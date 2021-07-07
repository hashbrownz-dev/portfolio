/* ABOUT */

const _about = document.createElement('div'),
    _about_title = document.createElement('h3'),
    _about_tech = document.createElement('p'),
    _about_gallery = document.createElement('div'),
    _about_desc = document.createElement('p'),
    _about_view_proj = document.createElement('a'),
    _about_view_code = document.createElement('a'),
    _about_return = document.createElement('a');

_about.className = 'section brief';
_about_title.innerHTML = project.title;
_about_tech.innerHTML = project.tech;
_about_gallery.className = 'gallery';
_about_desc.className = 'proj-desc';
_about_desc.innerHTML = project.descLong;
_about_view_proj.innerHTML = 'View Project';
_about_view_proj.target = '_blank';
_about_view_proj.href = project.linkDemo;
_about_view_code.innerHTML = 'View Code on GitHub';
_about_view_code.target = '_blank';
_about_view_code.href = project.linkCode;
_about_return.innerHTML = 'View Other Projects';
_about_return.target = '_self';
_about_return.href = '../index.html#projects';

document.body.appendChild(_about);
_about.appendChild(_about_title);
_about.appendChild(_about_tech);
_about.appendChild(_about_gallery);
_about.appendChild(_about_desc);
_about.appendChild(_about_view_proj);
_about.appendChild(_about_view_code);
_about.appendChild(_about_return);

/* GALLERY */

const _about_gallery_window = document.createElement('div'),
    _about_gallery_control = document.createElement('div'),
    _about_gallery_prev = document.createElement('button'),
    _about_gallery_next = document.createElement('button'),
    _about_gallery_balls = document.createElement('div');

_about_gallery_prev.innerHTML = '<img src = "../images/gal_prev.png">';
_about_gallery_next.innerHTML = '<img src = "../images/gal_next.png">';
_about_gallery_prev.type = 'button';
_about_gallery_next.type = 'button';
_about_gallery_window.className = 'gallery-window';
_about_gallery_control.className = 'gallery-control';
_about_gallery.appendChild(_about_gallery_window);
_about_gallery.appendChild(_about_gallery_control);
_about_gallery_control.appendChild(_about_gallery_prev);
_about_gallery_control.appendChild(_about_gallery_balls);
_about_gallery_control.appendChild(_about_gallery_next);

_about_gallery_next.addEventListener('click', () => {
    nextImg();
});
_about_gallery_prev.addEventListener('click', () => {
    prevImg();
});
let _images = [],
    _balls = [],
    _current = 0;

//load small images for gallery
for(let image of project.imgS){
    let img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    _images.push(img);
    let ball = document.createElement('div');
    ball.className = 'ball';
    _balls.push(ball);
    _about_gallery_balls.appendChild(ball);
}

//load the first image
_about_gallery_window.appendChild(_images[_current]);
_balls[_current].className = 'ball current';

function nextImg(){
    //Clear Window
    while(_about_gallery_window.firstChild){
        _about_gallery_window.removeChild(_about_gallery_window.firstChild);
    }
    //Update _current
    let last = _current;
    _current++;
    if(_current >= _images.length)_current = 0;
    //Update _balls
    _balls[last].className = 'ball';
    _balls[_current].className = 'ball current';
    //Attach the new image first, and then the last image.
    _images[last].style.zIndex = 2;
    _images[last].style.opacity = 1;
    _images[_current].style.zIndex = 1;
    _images[_current].style.opacity = 1;
    _about_gallery_window.appendChild(_images[last]);
    _about_gallery_window.appendChild(_images[_current]);
    
    //FADE
    fadeImage(_images[last]);
}

function prevImg(){
    //Clear Window
    while(_about_gallery_window.firstChild){
        _about_gallery_window.removeChild(_about_gallery_window.firstChild);
    }
    //Update _current
    let last = _current;
    _current--;
    if(_current < 0)_current = _images.length - 1;
    //Update _balls
    _balls[last].className = 'ball';
    _balls[_current].className = 'ball current';
    //Attach the new image first, and then the last image.
    _images[last].style.zIndex = 2;
    _images[last].style.opacity = 1;
    _images[_current].style.zIndex = 1;
    _images[_current].style.opacity = 1;
    _about_gallery_window.appendChild(_images[last]);
    _about_gallery_window.appendChild(_images[_current]);
    
    //FADE
    fadeImage(_images[last]);
}

function fadeImage(img){
    //img.style.opacity = '0.5';
    let timeStart;
    function update(timeStamp){
        if(timeStart === undefined)timeStart = timeStamp;//establish the starting time
        const elapsed = Math.floor(timeStamp - timeStart);//the elapsed time is the current time - the start time in milliseconds
        const o = Math.max(0, (1-(elapsed/500)));
        img.style.opacity = `${o}`;
        if(elapsed<500)requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

//ok... so we should only ever 2 images attached to the gallery at any give time.  the 'old' image and the 'new' image.  We may not need to... remove the old image after it fades out...
//but we can if we handle the animation using javascript.  So check this out.
//so we need back and forth buttons.  and we'll need little... divs?  lil circles or whatever, based on the amount of images in imgS

/*
01 - boat
02 - coat
03 - float
04 - toe
05 - goes
06 - bow
07 - row
08 - tow
09 - low
10 - slow
a) - nk
b) - cl
c) - e
*/