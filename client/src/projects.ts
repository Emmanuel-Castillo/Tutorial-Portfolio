export type Link = {
    name: string;
    url: string;
}

export type Project = {
    title: string;
    subTitle: string;
    description: string;
    image: string;
    links: Link[]
}


export const projects: Project[] = [
    {
        title: "Quick Chat",
        subTitle: "React.js, TailwindCSS, TypeScript, Node.js, Express.js, MongoDB, Cloudinary, Socket.io",
        description: "Developed a messaging platform where users can communicate messages and images with each other in real time. Modeled schemas for users and messages into a MongoDB Atlas cluster, which connects to a Node.js environment to perform CRUD operations for user messaging, profile editing, and account registration and login. Added image uploading into the cloud using Cloudinary API, allowing images to be accessed via public URLs. Designed a responsive frontend interface using React.js with TailwindCSS for enhanced UI/UX. Implemented real-time messaging by utilizing Socket.io to share new messages inside a client-server architecture. Introducing GitHub Actions to create CI/CD pipelines for integration and deployment using Vercel.",
        image: "/quick-chat.png",
        links: [
            {
                name: "Vercel Link",
                url: "https://quick-chat-theta-tawny.vercel.app/"
            }
        ]
    },
    {
        title: "Medical Appointment Booking System",
        subTitle: "ASP.NET Web API, C#, React.js, TypeScript, Boostrap, GitHub Actions, Azure App Services",
        description: "Developed a full-stack web application that mimics an appointment booking system for a medical clinic. Designed a .NET API backend where users with authorized roles (doctors, patients, admins) can perform REST operations such as retrieving patient data, booking a patient’s appointment, and setting a doctor’s availability. Implemented a frontend ReactJS with TypeScript to fetch data from the backend endpoints and display appointment bookings, and available time slots in a professional display, integrating Bootstrap for a responsive web design. Introducing GitHub Actions to create CI/CD pipelines with GitHub Actions to automate testing and deployment for both frontend (Vercel) and backend (Azure) environments",
        image: "/medbooksys.png",
        links: [
            {
                name: "Backend Repo",
                url: "https://github.com/Emmanuel-Castillo/MedicalApptBookingSystem"
            },
            {
                name: "Frontend Repo",
                url: "https://github.com/Emmanuel-Castillo/MedicalApptBookingSystem"
            },
            {
                name: "Vercel Link",
                url: "https://emmanuel-castillo-medical-appt-booking-system.vercel.app/"
            },
        ]
    },
    {
        title: "LivingDexTracker Kotlin App",
        subTitle: "Kotlin, Jetpack Compose, Room, Retrofit, MVVM",
        description: "Developed an Android app that helps users track Pokémon collection progress across all main series games. Integrated PokéAPI using Retrofit to fetch real-time species data, storing over 1000+ Pokémon entries in a local Room database with key stats like type, height, and weight. Implemented clean Jetpack Compose UI for intuitive species navigation and completion tracking. Built a Python-based web scraper to extract game-specific Pokémon encounter data from Serebii.net, converting and storing the results into a structured JSON dataset used in the app.",
        image: "/placeholder-ldt-app.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/Emmanuel-Castillo/LivingDexTracker"
            },
            {
                name: "LivingDexTracker App Apk",
                url: "/LivingDexTracker-app-release.apk"
            },
        ]
    },
    {
        title: "Pizza Ordering Project",
        subTitle: "ReactJS, NextJS, MongoDB, TailwindCSS, AWS, Stripe",
        description: "This project is an online food ordering web application for a pizza restaurant. Users are able to either continue as guests or register accounts using Google account credients using Next Auth providers API, or by email/password. Then, categories of food from the MongoDB public cluster can be selected to the user's cart to be ordered using Stripe payments. Admin roles exist in this application, who are able to edit, create, and delete categories and menu items. They are also able to edit user's admin and address information.",
        image: "/food-ordering-app.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/Emmanuel-Castillo/food-ordering-app"
            },
            {
                name: "Vercel Link",
                url: "https://emmanuel-castillo-food-ordering-app.vercel.app/"
            },
        ]
    },
    {
        title: "Durak",
        subTitle: "React, JavaScript8, HTML5, CSS",
        description: "This project is an client-server online game where a group of 2-4 players can play the Russian card game Durak. It is currently deployed using Heroku, feel free to try it out while the server dyno is currently active! Game instructions not included at the moment..",
        image: "/durak.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/Emmanuel-Castillo/durak"
            },
            {
                name: "Durak Link",
                url: "https://durak-a6f8ab3ff9e1.herokuapp.com/"
            },
        ]
    },
    {
        title: "Texas Tales",
        subTitle: "React, JavaScript8, HTML5, CSS, MySQL",
        description: "This team project redesigns the Texas Historical Commisions ATLAS map into a version that is user friendly. We developed an Android mobile app (built by Emmanuel Castillo) and website with a faster response time (built by Hannah Kane and Andrew Matta). It is functional but also a work in progress. We need to fix some bugs and add more features. Database, project planning, and documentation support was provided by Marc, Grant Holzaepfel and Eric Leal.",
        image: "/texas_tales_web.png",
        links: [
            {
                name: "GitHub",
                url: "https://github.com/hkanehaas/texan-tales-senior-project"
            },
            {
                name: "Website Demo",
                url: "/demo_videos/texas_tales_web_demo.mp4"
            },
            {
                name: "Mobile App Demo",
                url: "/demo_videos/texas_tales_mobile_demo.mp4"
            },
        ]
    }
]

export const languages: Link[] = [
    {
        name: "HTML",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
    },
    {
        name: "CSS",
        url: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
    },
    {
        name: "TypeScript",
        url: "https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
    },
    {
        name: "C#",
        url: "/cSharp.png"
    },
    {
        name: "Python",
        url: "/python.jpg"
    },
    {
        name: "Kotlin",
        url: "/kotlin.png"
    },
    {
        name: "ASP.NET",
        url: "/aspnet.png"
    },
    {
        name: "React.js",
        url: "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
    },
]

export const navLinks: Link[] = [
    {
        name: "Languages",
        url: "#languages"
    },
    {
        name: "Projects",
        url: "#projects"
    },
    {
        name: "Contact",
        url: "mailto:emmanuel.2001alonso.ec@gmail.com"
    },
]

export const footerLinks : Link[] = [
    {
        name: "GitHub",
        url: "https://github.com/Emmanuel-Castillo"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/emmanuel-castillo-897495265"
    },
    {
        name: "Email",
        url: "mailto:emmanuel.2001alonso.ec@gmail.com"
    },
    {
        name: "Resume",
        url: "mailto:emmanuel.2001alonso.ec@gmail.com"
    },
]