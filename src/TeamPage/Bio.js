import React from 'react';
import { Card } from 'antd';

class Bio extends React.Component {
  render () {
    const { name, role, intro } = this.props;
    return (
      <Card title={role} extra='' style={{ width: '70%', marginTop: '30px', marginBottom: '30px', textAlign:'left' }}>
        <h2>{name}</h2>
        <p style={{ textAlign: 'left' }}>{intro}</p>
      </Card>
    );
  }
}

export default Bio;