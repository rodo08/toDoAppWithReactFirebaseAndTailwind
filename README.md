# ToDo App with React, Firebase & Tailwind

This is a simple ToDo application built with React, Firebase Firestore, and Tailwind CSS. The app allows users to add, update, and delete to-dos, which are stored in a Firebase Firestore database.

## Features

- **Add To-Do:** Users can add new to-dos.
- **Read To-Do:** The app fetches and displays the to-dos from Firebase Firestore.
- **Update To-Do:** Users can mark to-dos as completed or not completed.
- **Delete To-Do:** Users can delete to-dos.

## Installation

To get started with this project, follow these steps:

1.  **Clone the repository:**

        `git clone https://github.com/your-username/your-repo-name.git

    cd your-repo-name`

2.  **Install dependencies:**

    `npm install`

3.  **Set up Firebase:**

            - Create a Firebase project in the Firebase Console.
            - Add a new web app to your Firebase project.
            - Copy the Firebase configuration and add it to a `.env` file in the root of your project as follows:

        `VITE_FIREBASE_API_KEY=your-api-key

    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id`

4.  **Start the development server:**

    `npm run dev`

5.  **Build for production:**

    `npm run build`

## About

This project demonstrates a CRUD (Create, Read, Update, Delete) application using React for the frontend, Firebase Firestore for the backend database, and Tailwind CSS for styling.
