import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'RouteMaster - Logistic Management System',
        description: "Designed and developed RESTful API using Spring Boot framework to streamline logistics operations, encompassing Customer, Route, Parcel, and Track-Parcel functionalities for efficient management. Implemented MySQL database schema to organize and maintain critical logistics data, including Customer details, Route information, Parcel attributes, and Parcel tracking.",
        tools: ['Java', 'Spring Boot', 'MySQL', 'Postman', 'AWS S3', 'Git', 'GitHub'],
        role: 'Backend Developer',
        code: 'https://github.com/toindranildutta/Logistic-Management-System-Backend',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Student Management System with AI Chat Client',
        description: 'I have Created a REST API for a Student Management System featuring an AI Chat Client capable of performing CRUD operations, serving as the culmination of my coursework',
        tools: ['Java', 'Spring Boot', 'MySQL', 'Postman', 'AWS S3', 'Git', 'GitHub', 'OpenAI API'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Room Finder Web App',
        description: 'Led a three-member team in developing a room-sharing platform using React.js for frontend development and Appwrite for backend support, enabling streamlined CRUD operations. Developed an interactive map-based interface for listing, showing details, updating, and deleting rooms.',
        tools: ['React', 'Tailwind', 'Appwrite', 'Git', 'GitHub', 'Vercel'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Open Source Collaboration Platform',
        description: "Created an project collaboration platform, focusing on account creation, GitHub profile integration, and repository sharing. Designed such that it allows users to browse and request collaboration on GitHub repositories, can filter by technology they want to work with.",
        tools: ['React Js', 'Tailwind', 'Git', 'GitHub', 'Vercel', 'Firebase'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },