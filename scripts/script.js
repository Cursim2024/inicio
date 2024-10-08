const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        const header = document.querySelector('header');
        let lastScrollTop = 0;

        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header.style.transform = 'translateY(-100%)';
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('section').forEach((section) => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            observer.observe(section);
        });

        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });