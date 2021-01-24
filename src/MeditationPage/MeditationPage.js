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
                <p>Music can increase your spatial awareness, because we unconsciously translate meaning 
from one sense perception into another.</p>
                <p>So notice, do the melody or the rhythm move your eye or focus your attention?</p>
                <p>As your senses combine, you may see more in this image.</p>
              </div>

              <div className='song-div'>
                <SongCard
                  songSelectEnabled={false}
                  {...this.props.song}
                />
                </div>

                <div className='image-div'>
                    <Image {...this.props.image}/>
                </div>
                
                <div style={{height: 600, marginTop: "15px"}}>
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
                        View Other Visitors' Journals
                    </Button>
                </div>
            </div>
        )
    }
}

export default MeditationPage;