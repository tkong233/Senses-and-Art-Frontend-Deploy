import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
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
        <img src='/sa_text2.png'
             style={{marginBottom: '1em', marginTop: '1em', width: '30%'}}
        />
        <div className="explore-button">
          <Button id="button" shape="round" size="large" href="/images">
            Explore
          </Button>
        </div>
        {/* <p>
        Though we cannot meet face-to-face to appreciate the arts, we can cultivate a calm, 
        mindful awareness of our senses as a resource.  While we are apart, we can remain 
        engaged. Our personal perceptions are the settings in which the arts become meaningful.  
        Senses and Art is place to for you in this difficult time.
        </p> */}

        <p id='welcome-words'>
        As you anxiously wait for an end  
        to the separation from friends, <br/> a time when you can 
        again share your appreciation of the arts; <br/> take a few minutes.  
        <br/>Pause to discover the calm within you. <br/> What we bring to art may
        surprise, enlighten and connect us all, <br/>as we wait for one another to return.

        </p>

        <ReactPlayer className='video react-player'
                    url='https://youtu.be/EMciAqjmhso'
        />
        <p id='credit'>
          Machine with Wishbone - Arthur Ganson, MIT Museum, 2006
        </p>
      </div>
    );
  }
}

export default WelcomePage;