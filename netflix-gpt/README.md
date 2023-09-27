**Netflix Clone with GPT Search**
This project is a Netflix clone with additional features, including a GPT-powered search bar. It allows users to sign up, log in, browse movies, and search for movies using natural language queries.

# Table of Contents
1. Features
2. Project Setup
3. Getting Started
4. Configuration
4. Usage
6. Contributing

# Features

1. Authentication
- Sign up and log in functionality using Firebase authentication.
- Form validation for sign-up and log-in forms.
- User profile management, including updating display name and profile picture.
- Sign out functionality.

2. Movie Data
- Fetches data from the TMDB API, including now playing movies.
- Custom hooks for fetching movie data.
- Redux store to manage movie data.
- Movie trailers embedded with autoplay and mute.

3. User Interface
- Responsive design using Tailwind CSS.
- Netflix-like user interface with a main movie, trailers, and movie suggestions.
- GPT-powered search bar for natural language movie queries.
- Multi-language support.

# Project Setup
Before starting the project, make sure to create a .env file in the root directory and add your TMDB and OpenAI API keys.

Example .env file:

# env
Copy code
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
Save to grepper

# Getting Started
Follow these steps to run the project locally:

- Clone this repository to your local machine:
```sh
git clone https://github.com/yourusername/netflix-clone.git
```

- Install project dependencies:
```sh
cd netflix-clone
npm install
```
- Start the development server:
```sh
npm start
```
- Open your browser and navigate to http://localhost:3000 to view the application.

# Configuration
To configure the project, you can update the following files:

- Firebase configuration: Modify the Firebase setup in the Firebase.js file.
- Tailwind CSS: Customize the styles in the tailwind.config.js file.
- GPT Search API: Update the OpenAI API key in the .env file.

# Usage
- Sign up for an account or log in using the provided forms.
- Browse and watch movies from the main page.
- Use the GPT-powered search bar to search for movies.
- Update your profile by clicking on your profile picture.

# Contributing
- Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

# Project Setup
- Before starting the project please add .env file and add TMDB and OPENAI KEY into it.