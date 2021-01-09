import React from 'react';
import Journal from './Journal';
import './JournalPage.css';

class JournalPage extends React.Component {
  state = {
    journals: [
      {
        song: 'Ballade',
        image: 'Tales of Gengi',
        journal: 'The plucked strings felt delicate, as though I was lightly touching the subject matter in the painting.  I enlarged the image, I saw the gold areas are meant to be clouds. The arpeggio made me feel like I was pulling back the clouds, I was peeking in from the stratosphere.  When the music was more lyrical, I found I was exploring the spaces between the buildings, trying to figure out the human activities. I wish I could visit that little world. I want to travel again but I know those places don\'t exist anymore.',
      },

    ]
  }
  render() {
    const { journals } = this.state;
    return (
      <div className='journal-page'>
        {journals.map(j => (
          <Journal
            song={j.song}
            image={j.image}
            journal={j.journal}
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
          />
        ))}
      </div>
    );
  }
}

export default JournalPage;