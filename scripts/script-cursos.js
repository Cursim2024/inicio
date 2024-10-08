
        const coursesData = [
            {
                 image: "https://i.ytimg.com/vi/4gw9KyEJ0BI/maxresdefault.jpg",
                 title: "BASICO PHOTOSHOP 2024",
                 description: "En este curso vas a aprender lo basico y necesario para incursionar en el mundo del diseño",
                 duration: "5 horas 27 minutos",
                 price: 17,
                 modules: [
                     "1. Básicos de Photoshop",
                     "2. Conceptos de imagen digital",
                     "3. Layers y máscaras",
                     "4. Selecciones y composiciones",
                     "5. Herramientas de corte y transformación",
                     "6. Capas de ajuste",
                     "7. Tipografías, guías y grillas",
                     "8. Objetos inteligentes",
                     "9. Vectores",
                     "10. Tipografías avanzado",
                     "11. Selecciones avanzadas",
                     "12. Layers Styles",
                     "13. Artboards",
                     "14. Opciones de exportación",
                     "15. Filtros",
                     "16. Acciones",
                     "17. Temas random"
                   ],

                 syllabus: "Temario Basico de Photoshop\n1. Fundamentos\n2. Básicos de Photoshop: Interfaz, herramientas principales, creación de documentos.\n3. Conceptos de imagen digital: Resolución, formatos, espacio de color, profundidad de bits.\n4. Edición y Organización\n5. Layers y máscaras: Creación, gestión, modos de fusión, máscaras de capa.\n6. Selecciones y composiciones: Herramientas de selección, creación de composiciones, recorte.\n7. Herramientas de corte y transformación: Recortar, escalar, rotar, distorsionar.\n8. Ajustes y Efectos\n10. Capas de ajuste: Brillo/contraste, curvas, niveles, color selectivo.\n11. Tipografías, guías y grillas: Aplicación de texto, creación de guías y grillas.\n12. Objetos inteligentes: Edición no destructiva, escalado sin pérdida de calidad.\n13. Vectores: Creación de formas vectoriales, conversión a píxeles.\n14. Tipografías avanzado: Estilos de párrafo, efectos de texto avanzados.\n15. Selecciones avanzadas: Perfeccionar bordes, gama de colores.\n16. Layers Styles: Sombra paralela, bisel y relieve, resplandor interior.\n17. Artboards: Creación de múltiples diseños en un mismo documento.\n18. Optimización y Producción\n19. Opciones de exportación: Guardar para web, exportar como PDF, PNG, JPEG.\n18. Filtros: Aplicación de filtros artísticos, de ruido, de desenfoque.\n20. Acciones: Grabación y reproducción de tareas repetitivas.\n21. Temas random: Trucos, consejos y técnicas avanzadas."
            },
            
            {
                 image: "https://ataga.es/wp-content/uploads/2023/01/ZnIFn4xCO5Q.jpg?ezimgfmt=rs:412x232/rscb3/ngcb3/notWebP",
                 title: "BASICO FL STUDIO 2024",
                 description: "En este curso vas a aprender lo basico y necesario para empezar en el mundo de la edicion de audio y produccion musical",
                 duration: "1 hora 43 minutos",
                 price: 17,
                 modules: ["1. Barra de Herramientas",
                           "2. Menu de Opciones",
                           "3. Configuración MIDI",
                           "4. Configuración de AUDIO",
                           "5. Playlist",
                           "6. Channel Rack",
                           "7. Piano Roll",
                           "8. Mixer" 
                   ],

                 syllabus:"\n1. Barra de Herramientas\n2. Menu de Opciones\n3. Configuración MIDI\n4. Configuración de AUDIO\n5. Playlist\n6. Channel Rack\n7. Piano Roll\n8. Mixer"
            },
            
            {
                image: "https://i.ytimg.com/vi/mOE9fE72QLg/maxresdefault.jpg",
                title: "BASICO ADOBE PREMIERE PRO 2024",
                description: "Aprende las bases de la edición de video profesional con Adobe Premiere Pro",
                duration: "4 horas 15 minutos",
                price: 17,
                modules: [
                    "1. Introducción a la interfaz",
                    "2. Importación y organización de medios",
                    "3. Edición básica",
                    "4. Transiciones y efectos",
                    "5. Audio en Premiere Pro",
                    "6. Corrección de color",
                    "7. Titulación",
                    "8. Exportación de proyectos"
                ],
                syllabus: "1. Introducción a la interfaz\n   - Configuración del espacio de trabajo\n   - Paneles principales\n   - Personalización de la interfaz\n\n2. Importación y organización de medios\n   - Importar archivos\n   - Organizar el panel de proyecto\n   - Crear bins y subclips\n\n3. Edición básica\n   - Crear secuencias\n   - Herramientas de edición\n   - Recortar y ajustar clips\n\n4. Transiciones y efectos\n   - Aplicar transiciones\n   - Efectos de video básicos\n   - Keyframing\n\n5. Audio en Premiere Pro\n   - Edición de audio básica\n   - Ajuste de niveles\n   - Efectos de audio\n\n6. Corrección de color\n   - Herramientas de corrección de color\n   - Ajustes básicos\n   - LUTs\n\n7. Titulación\n   - Crear títulos\n   - Animación de texto\n   - Gráficos esenciales\n\n8. Exportación de proyectos\n   - Ajustes de exportación\n   - Formatos de archivo\n   - Optimización para diferentes plataformas"
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