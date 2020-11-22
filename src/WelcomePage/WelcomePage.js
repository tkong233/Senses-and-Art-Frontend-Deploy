import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './WelcomePage.css';

class WelcomePage extends React.Component {
  state = {
    url: process.env.PUBLIC_URL + '/intro.mp4',
    playing: false,
    controls: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
  }

  render() {
    const { url, playing, controls, played, duration, playbackRate, pip } = this.state
    return (
      <div className="main">
        <img src='/sa_text.png'
             style={{marginBottom: '5px'}}
        />
        {/* <h1>Senses and Art</h1> */}
        <p>
        Though we cannot meet face-to-face to appreciate the arts, we can cultivate a calm, 
        mindful awareness of our senses as a resource.  While we are apart, we can remain 
        engaged. Our personal perceptions are the settings in which the arts become meaningful.  
        Senses and Art is place to for you in this difficult time.
        </p>

        {/* <img className='image' src='/welcome.png'/> */}
        <ReactPlayer className='video react-player'
                    url='https://youtu.be/EMciAqjmhso'
        />

        <div className="explore-button">
          <Button id="button" shape="round" size="large" href="/images">
            Explore
          </Button>
        </div>
      </div>
    );
  }
}

export default WelcomePage;