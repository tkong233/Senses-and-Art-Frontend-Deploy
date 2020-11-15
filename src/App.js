// libraries
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';


// compnents
import WelcomePage from './WelcomePage/WelcomePage';
import ResearchPage from './ResearchPage/ResearchPage';
import ImageGridPage from './ImagePicker/ImageGridPage';
import ZoomedImagePage from './ImagePicker/ZoomedImagePage';
import SongPickerPage from './SongPicker/SongPickerPage';
import MeditationPage from './MeditationPage/MeditationPage';
import SharePage from './SharePage/SharePage';
import MapPage from './MapPage/MapPage';


// layout
import NavBar from './Layout/NavBar';
import SideBar from './Layout/SideBar';
import Footer from './Layout/Footer';
import Line from './Layout/Line';
import { Layout} from 'antd';

// css
import './App.css';
import 'antd/dist/antd.css'

class App extends React.Component {
  /*
    state = {
        images:[]
    }
    componentDidMount() {
        axios.get('http://localhost:5000/images')
            .then(response => {
                let images = response.data.images;
                this.setState({images});
                console.log(response);
            });
    }
    */
    state = {
        imageSelectEnabled : true,

        selectedImageId : 0,
        selectedSongId : 1,
        journal : null,
        songs : [
            {
                id : 1,
                title : "Air on the G String",
                performer : "",
                composer : "Johann Sebastian Bach",
                instrument : "Flute, Harpsichord",
                contributor : "Isabella Stewart Gardner Museum",
                song_contributor_url: "",
                // song_path : "/songs/Air on the G String.mp3",
                song_path: 'https://hwcdn.libsyn.com/p/9/a/6/9a653969e0a71382/bach_bmv1068.mp3?c_id=1787197&cs_id=1787197&expiration=1605401754&hwt=298c00d43b0f2c07fd44eca3cbe94dfc',
            },
            {
                id : 2,
                title : "Alone",
                performer : "Tomas Vallejo",
                composer : "Tomas Vallejo",
                instrument : "Guitar",
                contributor : "Tomas Vallejo",
                song_path : "/songs/Alone.wav"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            ,
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            },
            {
                id : 3,
                title : "Amazing Grace",
                performer : "David Deveau, Richard Stoltzman",
                composer : "John Newton",
                instrument : "Clarinet, Piano",
                contributor : "Isabella Stewart Gardner Museum",
                song_path : "/songs/Amazing Grace.mp3"
            }
        ],

        images : [
            // image_path = id + 1
            {
                id : 0,
                image_path : '/images/1.jpg',
                title : "A Tent in the Rockies",
                artist : "John Singer Sargent",
                date : "About 1916",
                contributor : "Isabella Stewart Gardner Museum",
                url: 'https://www.gardnermuseum.org/experience/collection/10882',

            },
            {
                id : 1,
                image_path : '/images/2.jpg',
                title : "El Jaleo",
                artist : "John Singer Sargent",
                date : "1882",
                contributor : "Isabella Stewart Gardner Museum",
                url: 'https://www.gardnermuseum.org/experience/collection/13259',
            },
            {
                id : 2,
                image_path : '/images/3.jpg',
                title : "Nocturne, Blue and Silver: Battersea Reach",
                artist : "James McNeil Whistler",
                date : "About 1872-1878",
                contributor : "Isabella Stewart Gardner Museum",
                url: 'https://www.gardnermuseum.org/experience/collection/10900',
            },
            {
                id : 3,
                image_path : '/images/4.jpg',
                title : "YoYo Falls",
                artist : "John Singer Sargent",
                date : "1916",
                contributor : "Isabella Stewart Gardner Museum",
                url: 'https://www.gardnermuseum.org/experience/collection/10871',
            },
            {
                id : 4,
                image_path : '/images/5.jpg',
                title : "Scenes from the Tale of Genji",
                artist : "Kano Tsunenobu",
                date : "1677",
                contributor : "Isabella Stewart Gardner Museum",
                url: 'https://www.gardnermuseum.org/experience/collection/11857',
            },
            {
                id : 5,
                image_path : '/images/6.jpg',
                title : "Porpoises",
                artist : "Charles Herbert Woodbury",
                date : "1916",
                contributor : "Isabella Stewart Gardner Museum",
                url: 'https://www.gardnermuseum.org/experience/collection/10906',
            },
            {
                id : 6,
                image_path : '/images/7.jpg',
                title : "The Lido",
                artist : "Paul H. Tilton",
                date : "1894",
                contributor : "Isabella Stewart Gardner Museum",
                url: 'https://www.gardnermuseum.org/experience/collection/35587',
            },
            // {
            //     id : 7,
            //     image_path : '/images/8.jpg',
            //     title : "The Terrace, St. Tropez",
            //     artist : "Henri Matisse",
            //     date : "1904",
            //     contributor : "Isabella Stewart Gardner Museum",
            // },
            {
              id: 9,
              image_path: '/images/10.jpg',
              title: 'Waterfall in Crevice, Road to Vik, Below Mýrdalsjökull on Southern Coast, Iceland',
              artist: 'Eliot Porter',
              date: 'July 1, 1972',
              contributor: 'Amon Carter Museum, Fort Worth, Texas',
              url: 'http://porter.cartermuseum.org/collection.php?asn=P1990-51-2745-1&mcat=3&scat=20',
            },
            {
              id: 10,
              image_path: '/images/11.jpg',
              title: 'Ferns, Saddle Road, Hawaii',
              artist: 'Eliot Porter',
              date: 'February 26, 1979',
              contributor: 'Amon Carter Museum, Fort Worth, Texas',
              url: 'http://porter.cartermuseum.org/collection.php?asn=P1990-51-2700&mcat=4&scat=25',
            },
            {
              id: 11,
              image_path: '/images/12.jpg',
              title: 'Waterfall in Crevice, Road to Vik, Below Mýrdalsjökull on Southern Coast, Iceland',
              artist: 'Eliot Porter',
              date: 'May 28, 1975',
              contributor: 'Amon Carter Museum, Fort Worth, Texas',
              url: 'http://porter.cartermuseum.org/collection.php?asn=P1990-51-2002&mcat=4&scat=25',
            },
            {
              id: 12,
              image_path: '/images/13.jpg',
              title: 'Waterfall in Crevice, Road to Vik, Below Mýrdalsjökull on Southern Coast, Iceland',
              artist: 'Eliot Porter',
              date: 'July 1959',
              contributor: 'Amon Carter Museum, Fort Worth, Texas',
              url: 'http://porter.cartermuseum.org/collection.php?asn=P1990-51-1831&mcat=4&scat=26',
            }
        ]
    }

//   componentDidMount() {
//     let new_image_path = this.state.images.map((image) => {
//         let path = image.image_path;
//         return ( { ...image, image_path : process.env.PUBLIC_URL + path } );
//     })
//     this.setState(new_image_path);
//   }

  selectImageHandler(id) {
      this.setState({
          selectedImageId : id
      })
  }

  toggleImageSelectEnabled() {
        let curIamgeSelectEnabled = this.state.imageSelectEnabled;
        this.setState({
            imageSelectEnabled : !curIamgeSelectEnabled
        })
  }

  onClickSelectImageButton(id) {
      this.selectImageHandler(id);
      this.toggleImageSelectEnabled();
  }

  onClickSelectSongButton(id) {
      this.setState({
          selectedSongId : id
      })
  }

    render() {
    
      return (
        <div className="App">
        <Layout>
            <Router>
            <Line height="10px" color="#C75E94"/>
                <NavBar/>
                <Layout>
                    <SideBar/>
                    <Switch className="main">
                            <Route path="/" exact render={() => <WelcomePage/>}/>
                            <Route path="/map" exact render={() => <MapPage/>}/>
                            <Route path="/research" exact render={() => <ResearchPage/>}/>
                            <Route path="/songs" exact render={() => <SongPickerPage songs={this.state.songs}
                                                                            image={this.state.images[this.state.selectedImageId]}
                                                                            onClickSelectSongButton={this.onClickSelectSongButton.bind(this)}
                                                                            />}/>
                            <Route path="/images" exact render={() => <ImageGridPage images={this.state.images}
                                                                        imageSelectEnabled={true}/>}/>
                            <Route path="/meditation" exact render={() => <MeditationPage song={this.state.songs[this.state.selectedSongId - 1]}
                                                                                        image={this.state.images[this.state.selectedImageId]}/>}/>
                            <Route path="/share" exact render={() => <SharePage/>}/>
                            <Route path="/:imageId" render={(props) => <ZoomedImagePage images={this.state.images}
                                                                                        onClickSelectImageButton={this.onClickSelectImageButton.bind(this)}
                                                                                        toggleImageSelectEnabled={this.toggleImageSelectEnabled.bind(this)}
                                                                                {...props}/>}/>
                    </Switch>
                </Layout>
            </Router>
          <Line height="10px" color="white"/>
          <Line height="10px" color="#EFBB40"/>
          <Line height="5px" color="white"/>
          <Line height="10px" color="#C75E94"/>
          <Footer/>
          </Layout>
        </div>
      );
    }
  }

export default App;
