import React from 'react';

class WelcomeImages extends React.Component {
  render() {
    const dir = '/welcomeImages';
    return (
      <div id="container">
        <img src={dir + '/1.jpeg'}/>
        <img src={dir + '/2.jpeg'}/>
        <img src={dir + '/3.jpeg'}/>
        <img src={dir + '/4.jpeg'}/>
        <img src={dir + '/5.jpeg'}/>
        <img src={dir + '/6.jpeg'}/>
        <img src={dir + '/7.jpeg'}/>
        <img src={dir + '/8.jpeg'}/>
        <img src={dir + '/9.jpeg'}/>
      </div>
    )
  }
}

export default WelcomeImages;