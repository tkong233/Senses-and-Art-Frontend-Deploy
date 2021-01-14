import React from 'react';
import SongCard from '../SongPicker/SongCard';
import Image from '../ImagePicker/Image';
import { Button } from 'antd';
import './MeditationPage.css'

class MeditationPage extends React.Component {
    render() {
        return (
            <div className="page">
              <div className='guide'>
                <p>Look, Listen, and Notice.</p>
                <p>Why were you first drawn to this work of art?</p>
                <p>Why does this piece of music feel well suited to the image?</p>
              </div>
              
                <div className='image-div'>
                    <Image {...this.props.image}/>
                </div>
                
                <div className='song-div'>
                    <SongCard songSelectEnabled={false}
                            {...this.props.song}/>
                </div>
                <div style={{height: 600, marginTop: "5%"}}>
                  <iframe
                    style={{width: "100%", height: "100%", marginLeft: "auto", marginRight: "auto"}}
                    src="https://docs.google.com/forms/d/e/1FAIpQLSc-QdsyV3F0MDD4Q5cWgyno4KMZ-sBQD8IKm_jc8DaTzSAJWA/viewform?embedded=true"
                    frameborder="0"
                  >
                    Loading…
                  </iframe>
                </div>
                <div className='button-div'>
                    <Button id='button' href='/journal'>
                        Next
                    </Button>
                </div>
            </div>
        )
    }
}

export default MeditationPage;