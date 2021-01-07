import React from 'react';
import img1 from './welcomeImages/1.jpeg';
import img2 from './welcomeImages/2.jpeg';
import img3 from './welcomeImages/3.jpeg';
import img4 from './welcomeImages/4.jpeg';
import img5 from './welcomeImages/5.jpeg';
import img6 from './welcomeImages/6.jpeg';
import img7 from './welcomeImages/7.jpeg';
import img8 from './welcomeImages/8.jpeg';
import img9 from './welcomeImages/9.jpeg';


class WelcomeImages extends React.Component {
  render() {
    const dir = '/welcomeImages';
    return (
      <div id="container">
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        <img src={img4}/>
        <img src={img5}/>
        <img src={img6}/>
        <img src={img7}/>
        <img src={img8}/>
        <img src={img9}/>
        {/* <img src={dir + '/1.jpeg'}/>
        <img src={dir + '/2.jpeg'}/>
        <img src={dir + '/3.jpeg'}/>
        <img src={dir + '/4.jpeg'}/>
        <img src={dir + '/5.jpeg'}/>
        <img src={dir + '/6.jpeg'}/>
        <img src={dir + '/7.jpeg'}/>
        <img src={dir + '/8.jpeg'}/>
        <img src={dir + '/9.jpeg'}/> */}
      </div>
    )
  }
}

export default WelcomeImages;