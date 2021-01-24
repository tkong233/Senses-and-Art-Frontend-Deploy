import React from 'react';

class SongPickerGuide extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: '2%', marginRight: '2%', fontSize: 'larger' }}>
              <p>
              Does this music capture the energy and the mood of your image?
              Will it enhance your experience?
              </p>
              <p>
              Listen to portions of as many pieces as you like.
              When you find one you think will enhance your experience of your image, click on “Select” to pair it with the image you previously selected.
              </p>
            </div>
        );
    }
}

export default SongPickerGuide;