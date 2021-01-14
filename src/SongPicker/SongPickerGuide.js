import React from 'react';

class SongPickerGuide extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: '1%', marginRight: '1%', fontSize: 'larger' }}>
              <p>
              Does this music capture the energy and the mood of your image?
              </p>
              <p>
              Will it enhance your experience?
              </p>
              <p>
              If so, you could pair the two.
              </p>
            </div>
        );
    }
}

export default SongPickerGuide;