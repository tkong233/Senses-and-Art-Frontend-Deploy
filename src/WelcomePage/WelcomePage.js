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
        Though we cannot meet face to face to share the meaning the arts hold for each of us,
        we can cultivate a mindful awareness of ourselves as a resource to one another.
        While we are apart, we can remain engaged. Our personal perceptions are
        the rich settings in which the arts flourish. Your senses are the bridge
        to participation. Senses and Art is place for you in this difficult time.
        </p>

        {/* <img className='image' src='/welcome.png'/> */}
        <ReactPlayer className='video react-player'
                    url='https://youtu.be/vMuG-XEIsl4'
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