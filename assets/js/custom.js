
"use strict";

function clickToScroll(fromTop) {
    let allLink = document.querySelectorAll('[data-target]');
    
    allLink.forEach(elem => {
        elem.addEventListener('click', function(e) {
            e.preventDefault();
            let dataTarget = e.target.getAttribute('data-target');
            let section = document.querySelector(`[data-section="${dataTarget}"]`);
            let scrollFromTop = dataTarget === '#' ? fromTop : section.offsetTop;

            window.scroll({
                top: scrollFromTop,
                left: 0,
                behavior: 'smooth',
            })
        })
    })
}

clickToScroll(50);

function activeWhenScroll(fromTop) {
    let allSection = document.querySelectorAll('[data-section]');
    let windowOffsetTop = window.scrollY;
    allSection.forEach(elem => {
        let offsetElemFromTop = elem.offsetTop;
        let totalHeight = (offsetElemFromTop + elem.offsetHeight);
        let dataTarget = elem.getAttribute('data-section');
        let targetLink = document.querySelector(`[data-target="${dataTarget}"]`);
        let allLinks = document.querySelectorAll(`[data-target]`);
        
        function activeLink() {
            if(windowOffsetTop + fromTop >= offsetElemFromTop && windowOffsetTop + fromTop < totalHeight) {
                allLinks.forEach(link => {
                    link.classList.remove('active');
                })
                targetLink.classList.add('active')
            } else {
                targetLink.classList.remove('active')
            }
        } activeLink();
        
        window.addEventListener('scroll', function() {
            windowOffsetTop = window.scrollY;
            activeLink();
        });
    })
}

activeWhenScroll(50);
