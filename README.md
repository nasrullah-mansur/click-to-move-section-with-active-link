# click-to-move-section-with-active-link

# HTML 

    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" data-target="banner" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-target="about" href="#">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-target="services" href="#">Services</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-target="team" href="#">Team</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-target="contact" href="#">Contact</a>
        </li>
    </ul>
  
    <section class="bg-primary section" style="height: 800px;" data-section="banner">
        <h1>Banner</h1>
    </section>

    <section class="bg-info section" style="height: 800px;" data-section="about">
        <h1>About</h1>
    </section>
    <section class="bg-danger section" style="height: 600px;" data-section="services">
        <h1>Services</h1>
    </section>
    <section class="bg-success" style="height: 700px;">
        <h1>Portfolio</h1>
    </section>
    <section class="bg-secondary section" style="height: 500px;" data-section="team">
        <h1>Team</h1>
    </section>
    <section class="bg-info section" style="height: 800px;" data-section="contact">
        <h1>Contact</h1>
    </section>
  
  
 # JavaScript
 
    clickToScroll(50);
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
  
    activeWhenScroll(50);
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
