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
            welcome: "¡Transforma tu juego con Ace Tennis Trainer!",
            discount_offer: "50% de descuento en la primera clase",
            coach_title: "Entrenador",
            coach_description: `
                Una trayectoria dedicada al tenis y la enseñanza. Desde mi primera experiencia como jugador hasta mi carrera como entrenador, 
                he dedicado más de 17 años a este deporte. He trabajado con estudiantes de todas las edades y niveles, desde principiantes hasta jugadores avanzados. 
                Mi enfoque se basa en adaptar el entrenamiento a las necesidades individuales de cada jugador, combinando técnica, táctica y preparación física. 
                Creo firmemente que el tenis es más que un deporte: es una herramienta para el crecimiento personal y el desarrollo de habilidades valiosas como la disciplina, la resiliencia y el trabajo en equipo.
            `,
            services: "Servicios",
            service_video_title: "Técnica Avanzada",
            clase_individual: "Clases individuales personalizadas",
            clase_individual_desc: "Mejora tu técnica con un entrenamiento adaptado solo para ti.",
            clase_grupal: "Clases grupales (máx. 4 personas)",
            clase_grupal_desc: "Entrena en un ambiente social y aprende con otros jugadores.",
            clase_grande: "Clases grupales grandes",
            clase_grande_desc: "Perfecto para quienes disfrutan entrenar en grupo y mejorar juntos.",
            tecnica: "Técnica, táctica y estrategia",
            tecnica_desc: "Aprende a leer el juego, perfeccionar golpes y desarrollar estrategias ganadoras.",
            preparacion_fisica: "Preparación física especializada para el tenis",
            preparacion_fisica_desc: "Mejora tu resistencia, fuerza y movilidad en la cancha.",
            horarios: "Horarios:",
            horarios_desc: "Clases disponibles en las mañanas.",
            lugar: "Lugar:",
            lugar_desc: "A convenir dentro de Hamburgo.",
            tienda: "Tienda",
            tienda_desc: "Explora nuestra colección de productos exclusivos para tenis. Desde raquetas de alta gama hasta accesorios esenciales, todo lo que necesitas para potenciar tu juego está aquí.",
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
            classes_info: `
                Clases de tenis adaptadas a tu nivel y objetivos
                Este espacio está diseñado para ti, que buscas aprender, mejorar y disfrutar del tenis con un entrenamiento adaptado a tus necesidades. 
                A través de este medio, puedes encontrar un entrenador con experiencia internacional que te guiará en tu progreso, 
                ya sea que estés dando tus primeros golpes o quieras perfeccionar tu técnica y estrategia. 
                El tenis es más que un deporte: es una oportunidad para superarte, mantenerte activo y disfrutar cada momento en la cancha. 
                Aquí descubrirás un enfoque personalizado para alcanzar tus objetivos, sin importar tu edad o nivel de juego. 
                Además, cuentas con una tienda online donde podrás encontrar productos exclusivos para mejorar tu experiencia en la cancha. 
                Desde equipamiento hasta accesorios esenciales, todo lo que necesitas para potenciar tu juego está aquí. 
                Si estás listo para entrenar con pasión, mejorar tu rendimiento y equiparte con lo mejor, este es el medio para comenzar. 
                ¡Bienvenido a tu próximo desafío en la cancha!
            `,
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
            welcome: "Transform Your Game with Ace Tennis Trainer!",
            discount_offer: "50% off your first class",
            coach_title: "Coach",
            coach_description: `
                A career dedicated to tennis and teaching. From my first experience as a player to my career as a coach, 
                I have dedicated over 17 years to this sport. I have worked with students of all ages and levels, from beginners to advanced players. 
                My approach is based on adapting training to the individual needs of each player, combining technique, tactics, and physical preparation. 
                I firmly believe that tennis is more than just a sport: it is a tool for personal growth and the development of valuable skills such as discipline, resilience, and teamwork.
            `,
            services: "Services",
            service_video_title: "Advanced Technique",
            clase_individual: "Personalized Individual Lessons",
            clase_individual_desc: "Improve your technique with training tailored just for you.",
            clase_grupal: "Group Lessons (max. 4 people)",
            clase_grupal_desc: "Train in a social environment and learn with other players.",
            clase_grande: "Large Group Lessons",
            clase_grande_desc: "Perfect for those who enjoy training in a group and improving together.",
            tecnica: "Technique, Tactics, and Strategy",
            tecnica_desc: "Learn to read the game, refine your strokes, and develop winning strategies.",
            preparacion_fisica: "Specialized Physical Training for Tennis",
            preparacion_fisica_desc: "Improve your endurance, strength, and mobility on the court.",
            horarios: "Schedules:",
            horarios_desc: "Classes available in the mornings.",
            lugar: "Location:",
            lugar_desc: "To be arranged within Hamburg.",
            tienda: "Store",
            tienda_desc: "Explore our collection of exclusive tennis products. From high-end rackets to essential accessories, everything you need to enhance your game is here.",
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
            classes_info: `
                Tennis classes adapted to your level and goals
                This space is designed for you, who wants to learn, improve, and enjoy tennis with training adapted to your needs. 
                Through this medium, you can find an instructor with international experience who will guide you in your progress, 
                whether you're taking your first swings or want to perfect your technique and strategy. 
                Tennis is more than a sport: it's an opportunity to challenge yourself, stay active, and enjoy every moment on the court. 
                Here you will find a personalized approach to achieve your goals, regardless of your age or skill level. 
                Additionally, you have an online store where you can find exclusive products to enhance your experience on the court. 
                From equipment to essential accessories, everything you need to boost your game is here. 
                If you're ready to train with passion, improve your performance, and equip yourself with the best, this is the place to start. 
                Welcome to your next challenge on the court!
            `,
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
            welcome: "Transformieren Sie Ihr Spiel mit Ace Tennis Trainer!",
            discount_offer: "50% Rabatt auf die erste Klasse",
            coach_title: "Trainer",
            coach_description: `
                Eine Karriere, die dem Tennis und dem Lehren gewidmet ist. Von meiner ersten Erfahrung als Spieler bis zu meiner Karriere als Trainer 
                habe ich mehr als 17 Jahre diesem Sport gewidmet. Ich habe mit Schülern aller Altersstufen und Leistungsniveaus gearbeitet, 
                von Anfängern bis hin zu fortgeschrittenen Spielern. Mein Ansatz basiert darauf, das Training den individuellen Bedürfnissen jedes Spielers anzupassen, 
                indem ich Technik, Taktik und körperliche Vorbereitung kombiniere. Ich glaube fest daran, dass Tennis mehr als nur ein Sport ist: 
                Es ist ein Werkzeug für persönliches Wachstum und die Entwicklung von wertvollen Fähigkeiten wie Disziplin, Resilienz und Teamarbeit.
            `,
            services: "Dienstleistungen",
            service_video_title: "Fortgeschrittene Technik",
            clase_individual: "Personalisierte Einzelstunden",
            clase_individual_desc: "Verbessern Sie Ihre Technik mit einem auf Sie zugeschnittenen Training.",
            clase_grupal: "Gruppenstunden (max. 4 Personen)",
            clase_grupal_desc: "Trainieren Sie in einer sozialen Umgebung und lernen Sie mit anderen Spielern.",
            clase_grande: "Große Gruppenstunden",
            clase_grande_desc: "Perfekt für diejenigen, die gerne in der Gruppe trainieren und gemeinsam besser werden möchten.",
            tecnica: "Technik, Taktik und Strategie",
            tecnica_desc: "Lernen Sie, das Spiel zu lesen, Schläge zu perfektionieren und gewinnende Strategien zu entwickeln.",
            preparacion_fisica: "Spezialisiertes Fitnesstraining für Tennis",
            preparacion_fisica_desc: "Verbessern Sie Ihre Ausdauer, Kraft und Beweglichkeit auf dem Platz.",
            horarios: "Zeitpläne:",
            horarios_desc: "Kurse sind am Vormittag verfügbar.",
            lugar: "Ort:",
            lugar_desc: "Nach Vereinbarung innerhalb Hamburgs.",
            tienda: "Geschäft",
            tienda_desc: "Entdecken Sie unsere exklusive Tennisproduktkollektion. Von hochwertigen Schlägern bis hin zu unverzichtbarem Zubehör – alles, was Sie brauchen, um Ihr Spiel zu verbessern, finden Sie hier.",
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
            classes_info: `
                Tennisunterricht angepasst an Ihr Niveau und Ihre Ziele
                Dieses Angebot ist für Sie konzipiert, die lernen, verbessern und Tennis genießen möchten - mit einem Training, das auf Ihre Bedürfnisse zugeschnitten ist. 
                Über dieses Medium können Sie einen Trainer mit internationaler Erfahrung finden, der Ihnen bei Ihrem Fortschritt hilft, 
                ob Sie Ihre ersten Schläge machen oder Ihre Technik und Strategie perfektionieren möchten. 
                Tennis ist mehr als nur ein Sport: Es ist eine Gelegenheit, sich zu überwinden, aktiv zu bleiben und jeden Moment auf dem Platz zu genießen. 
                Hier finden Sie einen individualisierten Ansatz, um Ihre Ziele zu erreichen, unabhängig von Ihrem Alter oder Ihrem Spielniveau. 
                Zusätzlich verfügen Sie über einen Online-Shop, in dem Sie exklusive Produkte finden, um Ihre Erfahrung auf dem Platz zu verbessern. 
                Von Ausrüstung bis hin zu unverzichtbarem Zubehör – alles, was Sie brauchen, um Ihr Spiel zu steigern, ist hier. 
                Wenn Sie bereit sind, mit Leidenschaft zu trainieren, Ihre Leistung zu verbessern und sich mit dem Besten auszustatten, ist dies der richtige Ort, um zu beginnen. 
                Willkommen zu Ihrem nächsten Fortschritt auf dem Platz!
            `,
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
