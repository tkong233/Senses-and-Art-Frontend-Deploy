import React from 'react';
import './SongPickerPage.css'

class SongPlayer extends React.Component {
  componentDidUpdate() {
    this.refs.audio.pause();
    this.refs.audio.load();
  }
  
  render () {
    return (
      <div className='song-card'>
        <section className='section'>
          <div className='player-wrapper'>
          <audio ref="audio" controls src={this.props.song_path} style={{width: '100%'}}/>
          </div>
        </section>
      </div>
    )
  }
}

export default SongPlayer;