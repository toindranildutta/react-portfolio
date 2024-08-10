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
        code: 'https://github.com/toindranildutta/StudentManagementSystem',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Roommates - Room Finder Web App',
        description: 'Led a three-member team in developing a room-sharing platform using React.js for frontend development and Appwrite for backend support, enabling streamlined CRUD operations. Developed an interactive map-based interface for listing, showing details, updating, and deleting rooms.',
        tools: ['React', 'Tailwind', 'Appwrite', 'Git', 'GitHub', 'Vercel'],
        code: 'https://github.com/toindranildutta/Rooms-in-Bankura',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'ID Bank - Bank Management System',
        description: "A comprehensive Bank Management System that provides a secure and efficient platform for managing various banking operations. Key features includes: Account Management, Transaction Handling: Implemented real-time debit and credit transaction functionalities with accurate balance updates, Email Alerts: Set up automated email notifications for transactions and account updates to enhance user engagement and security.Account Statements: Generated detailed account statements with transaction history and balance summaries.",
        tools: ['Java', 'Spring Boot','Maven', 'Git', 'GitHub', 'Swagger'],
        code: 'https://github.com/toindranildutta/Bank-Management-System',
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