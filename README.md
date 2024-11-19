# Memories

![Memories](https://i.ibb.co/Z8Y0CJv/Screenshot-2020-10-30-at-11-10-04.png)

## Introduction
This is a code repository for the corresponding video tutorial - https://youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu.

Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called "Memories" and it is a simple social media app that allows users to post interesting events that happened in their lives.

By the end of this video, you will have a strong understanding of how the MERN Stack works.

### [🌟 Become a top 1% Next.js 15 developer in only one course](https://jsmastery.pro/next15)
### [🚀 Land your dream programming job in 6 months](https://jsmastery.pro/masterclass)

## Prerequisites

Ensure you have the following installed:
-Node.js (v14.x or above)
-MongoDB (locally or via MongoDB Atlas)
-Git

## Setup Instructions

1. Clone the Repository
git clone https://github.com/adrianhajdin/project_mern_memories.git
cd project_mern_memories

2. Install Dependencies

For the Server:
cd server
npm install

For the Client:
cd ../client
npm install

3. Environment Variables

Create a .env file inside the Server directory and add the Following:
PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

4. Running the project

Server:
cd server
npm start

Client:
cd client
npm start

Navigate to http://localhost:3000 to view the application.

## Folder Structure

project_mern_memories/
│
├── client/         # React frontend
├── server/         # Node.js backend
├── README.md       # Project documentation
└── .gitignore      # Files to be ignored by Git

## Contributing

1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch.
3. Make your changes.
4. Push the changes: git push origin feature-branch.
5. Create a pull request.

# Deployment

You can deploy the backend to services like Heroku and the frontend to Netlify.

-Heroku Setup:

1. Link your Heroku project.
2. Set environment variables in the Heroku dashboard.
3. Deploy from GitHub.

-Netlify Setup:

1. Connect your Netlify project to your GitHub repo.
2. Deploy the frontend by setting the build command to npm run build and the publish directory to client/build.

