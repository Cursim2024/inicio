
        const header = document.getElementById('header');
        const nav = document.getElementById('nav');
        const menuToggle = document.getElementById('menuToggle');
        let lastScrollTop = 0;

        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header.style.top = '-100px';
            } else {
                header.style.top = '0';
            }
            lastScrollTop = scrollTop;
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
            }
        });

        document.addEventListener('click', (e) => {
            const isOutsideMenu = !nav.contains(e.target) && !menuToggle.contains(e.target);
            if (isOutsideMenu && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });

        // Blog post data
        const blogPosts = [
            {
                title: "Los 5 nichos de la programación mejor pagados",
                excerpt: "Descubre cuáles son las áreas de la programación con mayor demanda y mejores salarios en la actualidad.",
                image: "https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg",
                link: "https://cursim2024.github.io/Inicio/blog/los-5-nichos-de-la-programacion-mejor-pagados"
            },
        ];

        const blogGrid = document.getElementById('blogGrid');
        const prevPageBtn = document.getElementById('prevPage');
        const nextPageBtn = document.getElementById('nextPage');
        const postsPerPage = 6;
        let currentPage = 1;

        function renderBlogPosts(page) {
            const startIndex = (page - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            const postsToShow = blogPosts.slice(startIndex, endIndex);

            blogGrid.innerHTML = '';

            postsToShow.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'blog-card';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-card-content">
                        <h2>${post.title}</h2>
                        <p>${post.excerpt}</p>
                        <a href="${post.link}">Leer más</a>
                    </div>
                `;
                blogGrid.appendChild(postElement);
            });

            updatePaginationButtons();
        }

        function updatePaginationButtons() {
            prevPageBtn.disabled = currentPage === 1;
            nextPageBtn.disabled = currentPage === Math.ceil(blogPosts.length / postsPerPage);
        }

        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderBlogPosts(currentPage);
            }
        });

        nextPageBtn.addEventListener('click', () => {
            if (currentPage < Math.ceil(blogPosts.length / postsPerPage)) {
                currentPage++;
                renderBlogPosts(currentPage);
            }
        });

        // Initial render
        renderBlogPosts(currentPage);