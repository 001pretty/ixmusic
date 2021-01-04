import React, { useState, useEffect, useRef } from "react";
import axios from 'axios'

import Player from "components/Player";

import "scss/app.scss";
import Playlist from "components/Playlist"; 
import Header from "components/Header";  
   

function App() {  
  const audioRef = useRef(null);
  const [tracks, setTracks] = useState([{
    "_id": "5ff13d6646d3a91ea12fac61", 
    "name": "Africa",
    "imageUrl": "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/92/fd/d1/92fdd10b-9cbd-5032-0908-7d72a381884d/074643772822.jpg/1000x1000bb.webp",
    "artist": "Toto",
    "audio": "https://il.ilill.li/mp3/Toto_Africa.mp3?t=dropbox",
    "year": 1982,
    "active": true
}]);   

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackInfo, setTrackInfo] = useState({ 
    currentTime: 0,
    duration: 0,
    animationPercentage: 0  
  });
  const [playlistStatus, setPlaylistStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setTrackInfo({
      ...trackInfo,  
      currentTime: current,
      duration, 
      animationPercentage: animation
    });
  };
  const trackEndHandler = async () => { 
    let currentIndex = tracks.findIndex((track) => track._id === currentTrack._id);
    await setCurrentTrack(tracks[(currentIndex + 1) % tracks.length]);
    if (isPlaying) audioRef.current.play();
  };
  useEffect(() => { 
    axios.get('/items/tracks')
         .then((res) =>   
            setTracks(res.data.tracks)
        )
  }, [])     
  
   
  return (
    <div className={`App ${playlistStatus ? "playlist-active" : ""}`}>
      <Header playlistStatus={playlistStatus} setPlaylistStatus={setPlaylistStatus} />
      <div className="track-container">
        <img src={currentTrack.imageUrl} alt={currentTrack.name}></img>
        <h2>{currentTrack.name}</h2>
        <h3>{currentTrack.artist}</h3> 
      </div> 
      <Player   
        setTrackInfo={setTrackInfo}
        trackInfo={trackInfo}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        currentTrack={currentTrack}
        isPlaying={isPlaying} 
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
        setTracks={setTracks}
      />
      <Playlist
        audioRef={audioRef} 
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
        isPlaying={isPlaying}
        setTracks={setTracks} 
        playlistStatus={playlistStatus} 
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef}
        src={currentTrack.audio}
        onEnded={trackEndHandler}
      />
    </div>
  ); 
}

export default App;
