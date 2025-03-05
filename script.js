// Funciones para mostrar/ocultar secciones
function togglePrivacyPolicy() {
    const privacyPolicy = document.getElementById('privacy-policy');
    privacyPolicy.classList.toggle('hidden');
}

function toggleCopyright() {
    const copyright = document.getElementById('copyright');
    copyright.classList.toggle('hidden');
}

// Cargar idioma al inicio
document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
    if (!languageSelector) {
        console.error("No se encontró el selector de idioma (#language-selector). Verifica tu HTML.");
        return;
    }

    const translations = {
        es: {
            title: "Ace Tennis Trainer",
            inicio: "Inicio",
            entrenador: "Entrenador",
            servicios: "Servicios",
            tienda: "Tienda",
            contacto: "Contacto",
            welcome: "¡Descubre el tenis a tu medida con Ace Tennis Trainer!",
            discount_offer: "50% de descuento en la primera clase",
            coach_title: "Entrenador",
            coach_description: `
                Un Entrenador con Experiencia y Pasión por el Tenis
                Llevo 17 años dedicándome a la enseñanza del tenis, trabajando en diversos países y contextos con jugadores de todas las edades y habilidades. Desde clubes prestigiosos hasta proyectos comunitarios y colegios internacionales, mi trayectoria me ha permitido desarrollar un método adaptable y efectivo, siempre centrado en las necesidades individuales.
                He aprendido que cada jugador tiene un camino único: unos buscan perfeccionar su técnica, otros priorizan la actividad física, y otros simplemente desean disfrutar del momento. Por eso, mis sesiones integran técnica, táctica y condición física de manera accesible y motivadora, garantizando que cada entrenamiento sea una experiencia enriquecedora.
                Para mí, el tenis es más que un deporte: es una forma de superarse y conectarse con el presente. Mi objetivo es ayudarte a ganar seguridad en la cancha, descubrir tu estilo personal y experimentar lo gratificante que es el tenis cuando se aprende sin presiones.
                Si deseas iniciar o retomar esta aventura, estaré encantado de acompañarte. Nos vemos en la cancha.
            `,
            classes_info: `
                No importa si has jugado antes o si esta es tu primera vez en una cancha: el tenis es un deporte para disfrutar a cualquier edad y nivel. Mis entrenamientos están diseñados para adaptarse a ti, ayudándote a mejorar tu técnica, moverte con confianza y, sobre todo, disfrutar desde el primer día.
                Mi enfoque es flexible y personalizado, pensado para que avances a tu propio ritmo, sin importar tu experiencia previa. Ya sea que busques aprender algo nuevo, mantenerte activo o elevar tu nivel, aquí encontrarás sesiones que te permitirán progresar de manera natural y divertida.
                Además, en mi tienda online descubrirás equipamiento y accesorios seleccionados para potenciar tu experiencia en la cancha.
                🎾 Tu juego, tu ritmo, tu evolución. Empieza hoy y explora todo lo que el tenis tiene para ti.
            `,
            services: "Servicios",
            service_video_title: "Técnica Avanzada",
            clase_individual: "Clases individuales personalizadas",
            clase_individual_desc: "Mejora tu técnica con un entrenamiento adaptado solo para ti.",
            clase_grupal: "Clases grupales",
            clase_grupal_desc: "Entrena en un ambiente social y aprende con otros jugadores.",
            tecnica: "Técnica, táctica y estrategia",
            tecnica_desc: "Aprende a leer el juego, perfeccionar golpes y desarrollar estrategias ganadoras.",
            preparacion_fisica: "Preparación física especializada para el tenis",
            preparacion_fisica_desc: "Mejora tu resistencia, fuerza y movilidad en la cancha.",
            horarios: "Horarios:",
            horarios_desc: "Clases disponibles en las mañanas.",
            lugar: "Lugar:",
            lugar_desc: "A convenir dentro de Hamburgo.",
            tienda: "Tienda",
            tienda_desc: "Descubre nuestra selección de ropa y accesorios de tenis. Ofrecemos una variedad de opciones que incluyen prendas para hombres, mujeres y niños, así como también bolsas de tenis y otros elementos esenciales para el juego. Todo lo que necesitas para mejorar tu desempeño en la cancha está aquí.",
            ir_tienda: "Ir a la Tienda",
            consulta: "Consultas",
            nombre: "Nombre:",
            email: "Email:",
            mensaje: "Mensaje:",
            enviar: "Enviar",
            policy_title: "Política de Privacidad",
            policy_text: "Esta política de privacidad describe cómo Ace Tennis Trainer recopila, utiliza y protege la información personal de sus usuarios.",
            copyright_title: "Derechos de Autor",
            copyright_text: "© 2025 Ace Tennis Trainer. Todos los derechos reservados.",
            discount_offer: "50% de descuento en la primera clase",
            correo: "Contacto:"
        },
        en: {
            title: "Ace Tennis Trainer",
            inicio: "Home",
            entrenador: "Coach",
            servicios: "Services",
            tienda: "Store",
            contacto: "Contact",
            welcome: "Discover Tennis Tailored to You with Ace Tennis Trainer!",
            discount_offer: "50% off your first class",
            coach_title: "Coach",
            coach_description: `
                A Coach with Experience and Passion for Tennis
                I have been dedicated to teaching tennis for 17 years, working in various countries and contexts with players of all ages and abilities. From prestigious clubs to community projects and international schools, my experience has allowed me to develop an adaptable and effective method, always focused on individual needs.
                I have learned that each player has a unique path: some seek to perfect their technique, others prioritize physical activity, and others simply want to enjoy the moment. That's why my sessions integrate technique, tactics, and physical conditioning in an accessible and motivating way, ensuring that each training session is an enriching experience.
                For me, tennis is more than just a sport: it's a way to overcome challenges and connect with the present. My goal is to help you gain confidence on the court, discover your personal style, and experience the satisfaction of learning tennis without pressure.
                If you want to start or resume this adventure, I would be delighted to accompany you. See you on the court.
            `,
            classes_info: `
                No matter if you have played before or if this is your first time on a court: tennis is a sport to enjoy at any age and level. My training sessions are designed to adapt to you, helping you improve your technique, move with confidence, and, above all, enjoy from day one.
                My approach is flexible and personalized, designed for you to progress at your own pace, regardless of your previous experience. Whether you are looking to learn something new, stay active, or elevate your level, you will find sessions here that will allow you to progress naturally and enjoyably.
                Additionally, in my online store, you will discover selected equipment and accessories to enhance your experience on the court.
                🎾 Your game, your pace, your evolution. Start today and explore everything tennis has to offer you.
            `,
            services: "Services",
            service_video_title: "Advanced Technique",
            clase_individual: "Personalized Individual Lessons",
            clase_individual_desc: "Improve your technique with training tailored just for you.",
            clase_grupal: "Group Lessons",
            clase_grupal_desc: "Train in a social environment and learn with other players.",
            tecnica: "Technique, Tactics, and Strategy",
            tecnica_desc: "Learn to read the game, refine your strokes, and develop winning strategies.",
            preparacion_fisica: "Specialized Physical Training for Tennis",
            preparacion_fisica_desc: "Improve your endurance, strength, and mobility on the court.",
            horarios: "Schedules:",
            horarios_desc: "Classes available in the mornings.",
            lugar: "Location:",
            lugar_desc: "To be arranged within Hamburg.",
            tienda: "Store",
            tienda_desc: "Discover our selection of tennis clothing and accessories. We offer a variety of options including apparel for men, women, and children, as well as tennis bags and other essential items for the game. Everything you need to enhance your performance on the court is here.",
            ir_tienda: "Go to Store",
            consulta: "Inquiries",
            nombre: "Name:",
            email: "Email:",
            mensaje: "Message:",
            enviar: "Send",
            policy_title: "Privacy Policy",
            policy_text: "This privacy policy describes how Ace Tennis Trainer collects, uses, and protects user personal information.",
            copyright_title: "Copyright",
            copyright_text: "© 2025 Ace Tennis Trainer. All rights reserved.",
            discount_offer: "50% off your first class",
            correo: "Contact:"
        },
        de: {
            title: "Ace Tennis Trainer",
            inicio: "Startseite",
            entrenador: "Trainer",
            servicios: "Dienstleistungen",
            tienda: "Geschäft",
            contacto: "Kontakt",
            welcome: "Entdecken Sie Tennis auf Ihre Maß mit Ace Tennis Trainer!",
            discount_offer: "50% Rabatt auf die erste Klasse",
            coach_title: "Trainer",
            coach_description: `
                Ein Trainer mit Erfahrung und Leidenschaft für Tennis
                Ich widme mich seit 17 Jahren dem Tennisunterricht und arbeite in verschiedenen Ländern und Kontexten mit Spielern aller Altersgruppen und Fähigkeiten. Von prestigeträchtigen Clubs über kommunale Projekte bis hin zu internationalen Schulen hat meine Karriere mir ermöglicht, eine anpassungsfähige und effektive Methode zu entwickeln, die immer auf individuelle Bedürfnisse zugeschnitten ist.
                Ich habe gelernt, dass jeder Spieler einen einzigartigen Weg hat: Einige suchen die Perfektionierung ihrer Technik, andere priorisieren die körperliche Aktivität und andere möchten einfach den Moment genießen. Deshalb integrieren meine Sitzungen Technik, Taktik und körperliche Konditionierung auf eine zugängliche und motivierende Weise, um sicherzustellen, dass jede Trainingssitzung eine bereichernde Erfahrung ist.
                Für mich ist Tennis mehr als nur ein Sport: Es ist eine Möglichkeit, sich zu überwinden und mit dem Jetzt zu verbinden. Mein Ziel ist es, Ihnen zu helfen, Sicherheit auf dem Platz zu gewinnen, Ihren persönlichen Stil zu entdecken und die Erfüllung zu erleben, wenn man Tennis ohne Druck lernt.
                Wenn Sie beginnen oder diese Abenteuer wieder aufnehmen möchten, freue ich mich, Sie zu begleiten. Bis bald auf dem Platz.
            `,
            classes_info: `
                Es spielt keine Rolle, ob Sie schon gespielt haben oder ob dies Ihr erstes Mal auf einem Platz ist: Tennis ist eine Sportart, die man in jedem Alter und auf jedem Niveau genießen kann. Meine Trainings sind darauf ausgelegt, sich an Sie anzupassen, Ihnen zu helfen, Ihre Technik zu verbessern, mit Selbstvertrauen zu spielen und vor allem von Tag eins an Spaß zu haben.
                Mein Ansatz ist flexibel und personalisiert, damit Sie in Ihrem eigenen Tempo voranschreiten können, unabhängig von Ihrer vorherigen Erfahrung. Ob Sie etwas Neues lernen, aktiv bleiben oder Ihr Niveau anheben möchten, finden Sie hier Sitzungen, die Ihnen ermöglichen, auf natürliche und unterhaltsame Weise voranzukommen.
                Darüber hinaus entdecken Sie in meinem Online-Shop ausgewählte Ausrüstung und Zubehör, um Ihre Erfahrung auf dem Platz zu verbessern.
                🎾 Ihr Spiel, Ihr Tempo, Ihre Entwicklung. Fangen Sie heute an und erkunden Sie alles, was Tennis Ihnen bieten kann.
            `,
            services: "Dienstleistungen",
            service_video_title: "Fortgeschrittene Technik",
            clase_individual: "Personalisierte Einzelstunden",
            clase_individual_desc: "Verbessern Sie Ihre Technik mit einem auf Sie zugeschnittenen Training.",
            clase_grupal: "Gruppenstunden",
            clase_grupal_desc: "Trainieren Sie in einer sozialen Umgebung und lernen Sie mit anderen Spielern.",
            tecnica: "Technik, Taktik und Strategie",
            tecnica_desc: "Lernen Sie, das Spiel zu lesen, Schläge zu perfektieren und gewinnende Strategien zu entwickeln.",
            preparacion_fisica: "Spezialisiertes Fitnesstraining für Tennis",
            preparacion_fisica_desc: "Verbessern Sie Ihre Ausdauer, Kraft und Beweglichkeit auf dem Platz.",
            horarios: "Zeitpläne:",
            horarios_desc: "Kurse sind am Vormittag verfügbar.",
            lugar: "Ort:",
            lugar_desc: "Nach Vereinbarung innerhalb Hamburgs.",
            tienda: "Geschäft",
            tienda_desc: "Entdecke unsere Auswahl an Tenniskleidung und -Zubehören. Wir bieten eine Vielzahl von Optionen, einschließlich Kleidung für Männer, Frauen und Kinder, sowie auch Tennistaschen und andere notwendige Gegenstände für das Spiel. Alles, was Sie brauchen, um Ihre Leistung auf dem Platz zu verbessern, ist hier.",
            ir_tienda: "Zum Geschäft",
            consulta: "Anfragen",
            nombre: "Name:",
            email: "E-Mail:",
            mensaje: "Nachricht:",
            enviar: "Senden",
            policy_title: "Datenschutzrichtlinie",
            policy_text: "Diese Datenschutzrichtlinie beschreibt, wie Ace Tennis Trainer personenbezogene Daten seiner Nutzer sammelt, verwendet und schützt.",
            copyright_title: "Urheberrechte",
            copyright_text: "© 2025 Ace Tennis Trainer. Alle Rechte vorbehalten.",
            discount_offer: "50% Rabatt auf die erste Klasse",
            correo: "Kontakt:"
        }
    };

    function loadLanguage(lang) {
        if (!translations[lang]) lang = "es";
        console.log("Cargando idioma:", lang);

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`No translation found for key: ${key}`);
                element.textContent = key; // Muestra la clave si no hay traducción
            }
        });

        const titleElement = document.querySelector("title");
        if (titleElement && translations[lang].title) {
            titleElement.textContent = translations[lang].title;
        }
    }

    function saveLanguagePreference(lang) {
        localStorage.setItem("preferredLanguage", lang);
    }

    function getSavedLanguage() {
        const savedLang = localStorage.getItem("preferredLanguage");
        return translations[savedLang] ? savedLang : "es";
    }

    const savedLanguage = getSavedLanguage();
    languageSelector.value = savedLanguage;
    loadLanguage(savedLanguage);

    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;
        console.log("Idioma seleccionado:", selectedLang);
        loadLanguage(selectedLang);
        saveLanguagePreference(selectedLang);
    });
});
