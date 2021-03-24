# IX music

![React Version](https://img.shields.io/badge/node-v12.16.2-green.svg) &nbsp;
![React Version](https://img.shields.io/badge/react-v17.0.1-blue.svg)<br/>

[Demo](https://ixmusic.herokuapp.com/) &nbsp; &nbsp; &nbsp; [Repository](https://github.com/777pretty/ixmusic)<br/>

![preview](https://github.com/001pretty/ixmusic/blob/main/ixmusic-preview.png)

**Description**<br />
🎼 Music player application with server served playlist.

Application utilizes the MERN stack.<br />
Frontend is built with React.<br />
Backend is powered by Node and Express.<br />
Information about every song such as Name, Artist and Year are located in MongoDB (NoSQL) database.<br />
<br/>

## Table of content

- [Features](#features)
- [Motivation](#motivation)
- [**Installation**](#installation)
- [Built With](#built-with)
- [Ideas for future releases](#ideas-for-future-releases)
- [License](#license)
- [Contact](#contact)

<br/>

## Features

- Play songs
- Pause songs
- Change songs
- Song logo
- Basic song information
- Playlist
- Jump through a song by clicking the progress bar
- Responsive/mobile-friendly

<br/>

## Motivation

I wanted to build music application to practice and listen to some of my favorite music through an application. Setting up the player component and adding the playlist was lot of fun. Anyway, I also hope you enjoyed the songs.

<br/>

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

<br />

## Built With

Frontend bootstrapped with create-react-app

**Backend dependencies**

- node
- express
- mongoose
- dotenv
- body-parser
- compression

**Frontend dependenceis**

- react
- react-dom
- axios
- sass

<br/>

## Ideas for future releases

- Ability for users to add songs directly through the website
- User authentication
- Rating
- Favorite songs/Custom playlist
- Additional data about the song
- Artist profile

<br/>

## License

This project is licensed under the [MIT License](https://github.com/001pretty/ixmusic/blob/main/LICENSE)

<br/>

## Contact

With any ideas or questions...

- You can contact me via email: oliverzaj@gmail.com
- Or fill the contact form at my [personal website](https://thezajac.com)
