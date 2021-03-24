# IX music

![Live Demo](https://ixmusic.herokuapp.com/)
![Link to Repository](https://github.com/777pretty/ixmusic)
![React Version](https://img.shields.io/badge/react-v17.0.1-blue.svg)

![preview](https://thezajac.com/static/media/os-ix3.046fa071.mp4)

#### Description

🎼 Music player application with server served playlist.

Application utilizes the MERN stack.
Frontend is built with React.
Backend is powered by Node and Express.
Information about every song such as Name, Artist and Year are located in MongoDB (NoSQL) database.

## Table of content

- [**Getting Started**](#getting-started)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Get Help](#get-help)
- [Motivation](#motivation)
- [Acknowledgments](#acknowledgements)

## Features

Play songs
Pause songs
Change songs
Song logo
Year of release
Playlist
Jump through a song by clicking the progress bar
Responsive/mobile-friendly

## Motivation

I wanted to create music application to practice and listen to some of my favorite music through an application I've built. I hope you enjoyed the songs.

## Getting Started

### Installation

To run application on your local machine follow these steps:

1. Clone or download the project from the [repository](https://github.com/777pretty/ixmusic).
2. Install both backend and frontend dependencies with this one command:

   ```bash
   # with npm
   npm run iall

   # or with yarn
   yarn run iall
   ```

3. Create new file named ".env" at the root of the project folder.

4. Add this environmental variable to the .env file you've just created with the value of your MongoDB URI:
   ```javascript
   MONGODB_URI = "your-mongodb-uri";
   ```
5. Start development mode with command:

   ```bash
   # with npm
   npm run dev

   # or with yarn
   yarn run dev
   ```

6. Run the application in the browser with url:
   ```javacript
   localhost:3000
   ```

### Usage

To use the application press play button. Press arrow symbols to change song or click on a song in the playlist. The playlist can be opened with the drawer button in the top right corner.

## Built With

Bootstrapped with create-react-app

**Backend dependencies**
node
express
mongoose
dotenv
body-parser
compression

**Frontend dependenceis**
react
react-dom
axios
sass

## Ideas for future releases

Ability for users to add songs directly through the website
User authentication
Rating
Favorite songs/Custom playlist
Additional data about the song
Artist profile

## License

This project is licensed under the [MIT License](https://github.com/this/project/blob/master/LICENSE)

## Contact

- You can contact me via email: oliverzaj@gmail.com
- Or fill the contact form at my [personal website](https://thezajac.com)
