import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import VideoPlayer from './VideoPlayer';
import WelcomeImages from './WelcomeImages';
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
        <WelcomeImages/>
        <img src='/sa_text2.png' className='logo'/>
        <div className="explore-button">
          <Button id="button" shape="round" size="large" href="/images">
            Try Connecting Your Senses
          </Button>
        </div>

        <p id='welcome-words'>
        As you anxiously wait for an end  
        to the separation from friends, a time when you can 
        again share your appreciation of the arts; take a few minutes.  
        <br/>Pause to discover the calm within you. What we bring to art may
        surprise, enlighten and connect us all, as we wait for one another to return.
        </p>

        <VideoPlayer/>

        {/* <ReactPlayer
          className='video react-player'
          // url='https://youtu.be/EMciAqjmhso'
          url='https://senses-and-art.s3.amazonaws.com/Teaser+for+museums_1.mp4'
          config={{
            file: {
            }
          }}
        /> */}

        
      </div>
    );
  }
}

export default WelcomePage;