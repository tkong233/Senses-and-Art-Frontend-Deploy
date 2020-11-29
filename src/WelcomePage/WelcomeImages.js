import React from 'react';

class WelcomeImages extends React.Component {
  render() {
    const dir = '/welcomeImages';
    return (
      <div id="container">
        <img src={dir + '/1.jpg'}/>
        <img src={dir + '/2.jpg'}/>
        <img src={dir + '/3.jpg'}/>
        <img src={dir + '/4.jpg'}/>
        <img src={dir + '/5.jpg'}/>
        <img src={dir + '/6.png'}/>
        <img src={dir + '/7.jpg'}/>
        <img src={dir + '/8.png'}/>
        <img src={dir + '/9.png'}/>
      </div>
    )
  }
}

export default WelcomeImages;