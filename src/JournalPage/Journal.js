import React from 'react';
import { Card } from 'antd';

class Journal extends React.Component {
  render() {
    const { image, song, journal } = this.props;
    return (
      <Card
        title={image + '  |  ' + song}
        style={{
          width: '70%',
          marginTop: '30px',
          marginBottom: '30px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign:'left' 
        }}>
        {/* <h2>name</h2> */}
        <p style={{ textAlign: 'left' }}>{journal}</p>
      </Card>
    );
  }
}

export default Journal;