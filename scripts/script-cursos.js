
        const coursesData = [
            {
                 image: "https://i.ytimg.com/vi/4gw9KyEJ0BI/maxresdefault.jpg",
                 title: "BASICO PHOTOSHOP 2024",
                 description: "En este curso vas a aprender lo basico y necesario para incursionar en el mundo del diseño",
                 duration: "5 horas 27 minutos",
                 price: 17,
            },
            
            {
                 image: "https://ataga.es/wp-content/uploads/2023/01/ZnIFn4xCO5Q.jpg?ezimgfmt=rs:412x232/rscb3/ngcb3/notWebP",
                 title: "BASICO FL STUDIO 2024",
                 description: "En este curso vas a aprender lo basico y necesario para empezar en el mundo de la edicion de audio y produccion musical",
                 duration: "1 hora 43 minutos",
                 price: 17,
            },
            
            {
                image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                title: "BASICO ADOBE PREMIERE PRO 2024",
                description: "Aprende las bases de la edición de video profesional con Adobe Premiere Pro",
                duration: "4 horas 15 minutos",
                price: 17,
            }
        ];

        const coursesGrid = document.querySelector('.courses-grid');

        function renderCourses() {
            coursesGrid.innerHTML = '';
            coursesData.forEach((course, index) => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('course-card');
                courseCard.innerHTML = `
                    <img src="${course.image}" alt="${course.title}" class="course-image">
                    <div class="course-content">
                        <h3 class="course-title">${course.title}</h3>
                        <p class="course-description">${course.description}</p>
                        <div class="course-info">
                            <span class="course-price">$${course.price}</span>
                            <span class="course-duration">${course.duration}</span>
                        </div>
                    </div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2kIanXgdzKdZQlWZ2fUSdmnXHJsl8YAm7Zv5G7ko67v6NVg/viewform" class="obtener-curso" target="_blank">OBTENER CURSO</a>
                `;
                
                courseCard.addEventListener('touchstart', function() {
                    this.classList.add('touch-active');
                });
                
                courseCard.addEventListener('touchend', function() {
                    this.classList.remove('touch-active');
                });

                coursesGrid.appendChild(courseCard);
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            renderCourses();
            const menuToggle = document.querySelector('.menu-toggle');
            const mobileNav = document.querySelector('.mobile-nav');
            const header = document.querySelector('header');
            let lastScrollTop = 0;
            
            function toggleMenu() {
                mobileNav.classList.toggle('active');
                document.body.classList.toggle('menu-open');
                
                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }

            menuToggle.addEventListener('click', toggleMenu);

            document.addEventListener('click', function(event) {
                if (!event.target.closest('.header-content') && !event.target.closest('.mobile-nav')) {
                    mobileNav.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });

            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    mobileNav.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });

            window.addEventListener('scroll', function() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop) {
                    header.classList.add('hidden');
                } else {
                    header.classList.remove('hidden');
                }
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }, false);
        });
