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
import TeamPage from './TeamPage/TeamPage';
import JournalPage from './JournalPage/JournalPage';


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
                title : "Chanson de Bilitis",
                performer : "Mariko Anraku and Paula Robison",
                composer : "Claude Debussy",
                instrument : "flute and harp",
                contributor : "Isabella Stewart Gardner Museum",
                song_contributor_url: "",
                song_path: 'http://hwcdn.libsyn.com/p/f/e/3/fe3617418746901f/debussy_chansons_bilitis.mp3?c_id=2441197&cs_id=2441197&expiration=1594582046&hwt=444518bdd369980935e5dc529abd5c8c',
            },
            {
              id : 2,
              title : "Orpheo Ed Euredice",
              performer : "Mariko Anraku and Paula Robison",
              composer : "Christoph Willibald Gluck",
              instrument : "flute and harp",
              contributor : "Isabella Stewart Gardner Museum",
              song_contributor_url: "",
              song_path: 'http://hwcdn.libsyn.com/p/c/4/f/c4f3f77a3cc78d50/gluck_orfeo.mp3?c_id=1789182&cs_id=1789182&expiration=1594582057&hwt=47de7d4355720645c3a9cf43954d5538',
            },
            {
              id : 3,
              title : "Ballade",
              performer : "Catrin Finch",
              composer : "Carlos Salzedo",
              instrument : "harp",
              contributor : "Isabella Stewart Gardner Museum",
              song_contributor_url: "",
              song_path: 'http://hwcdn.libsyn.com/p/9/d/b/9db8eda794c63a96/salzedo_ballade_finch.mp3?c_id=12483239&cs_id=12483239&expiration=1594584245&hwt=2c8c08ad0626129451e101e9627b7be4',
            },
            {
              id : 4,
              title : "Air on the G String, BWV 1068",
              performer : "Paula Robison",
              composer : "Johann Sebastian Bach",
              instrument : "Arr. for flute solo",
              contributor : "Isabella Stewart Gardner Museum",
              song_contributor_url: "",
              song_path: 'http://hwcdn.libsyn.com/p/9/a/6/9a653969e0a71382/bach_bmv1068.mp3?c_id=1787197&cs_id=1787197&expiration=1594582836&hwt=ccdb23c5b907606019e9ed3b58614',
            },
          {
            id : 5,
            title : "Lark Song",
            performer : "Irina Nuzova and Wendy Warner",
            composer : "Johannes Brahms",
            instrument : "strings",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "",
            song_path: 'http://hwcdn.libsyn.com/p/a/0/f/a0f9c8478accc63c/brahms_lerchengesang_warner_nuzova.mp3?c_id=8693494&cs_id=8693494&expiration=1594585568&hwt=ea17b8cde3f37eaff0177a79a04860e4',
          },
          {
            id : 6,
            title : "A Swedish Set",
            performer : "A Far Cry (chamber orchestra)",
            composer : "Mikael and Mia Marin, arr. Eric Higgins",
            instrument : "strings",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "",
            song_path: 'http://hwcdn.libsyn.com/p/6/f/3/6f33160def34ca3f/marin_aswedishset_afarcry.mp3?c_id=11571460&cs_id=11571460&expiration=1594583417&hwt=7073e0a54a3e2858051afea4682e9120',
          },
          {
            id : 7,
            title : "Brandenburg Concerto #4",
            performer : "Gardner Chamber Orchestra",
            composer : "Johann Sebastian Bach",
            instrument : "strings",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "",
            song_path: 'http://hwcdn.libsyn.com/p/4/f/d/4fd908923d90de80/bach_brandenburg_no4_gardner_chamber.mp3?c_id=8464581&cs_id=8464581&expiration=1594585053&hwt=dd67b586e1af6474190fef9c2ea3f1f7',
          },
          {
            id : 8,
            title : "Concerto in F Major BWV 1057",
            performer : "Gardner Chamber Orchestra with Paula Robison",
            composer : "Johann Sebastian Bach",
            instrument : "strings",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/2/7/f/27f0284500ca3570/jsbach_concertofmajorbwv1057_gardchamborch_robison.mp3?c_id=11972609&cs_id=11972609&expiration=1594586293&hwt=a2f9f432bfa98d948471afa579d217a5',
          },
          {
            id : 9,
            title : "Melodie Op. 42, No. 3",
            performer : "Narek Hakhnazaryan and Noreen Polera",
            composer : "Pyotr Ilych Tchaikovsky",
            instrument : "cello and piano",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/3/3/f/33ff054c886119c2/tchaikovsky_melodie_Hakhnazaryan_Polera.mp3?c_id=5226350&cs_id=5226350&expiration=1594585865&hwt=a093d784f54dc7993855cf054216fd9d',
          },
          {
            id : 10,
            title : "Amazing Grace",
            performer : "David Deveau and Richard Stoltzman",
            composer : "Richard Stoltzman",
            instrument : "clarinet and piano",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/7/8/7/7874a7900d13763c/stoltzman_amazing-grace_deveau_stoltzman.mp3?c_id=12870110&cs_id=12870110&expiration=1594582981&hwt=da14ea632d1bd49f1f8dd2a8be3cc1b5',
          },
          {
            id : 11,
            title : "Arabeske for Piano in C Major, Op. 18",
            performer : "Jonathon Biss",
            composer : "Robert Shumann",
            instrument : "piano",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/5/7/a/57a891e6b311c375/schumann_op18.mp3?c_id=1787774&cs_id=1787774&expiration=1594583836&hwt=665f6baec6f3f2702f838491f0792ba6',
          },
          {
            id : 12,
            title : "Auf Dem Wasser Zu Singen - Piano Transcription of Schubert's Song",
            performer : "Alexander Ghindin",
            composer : "Franz Liszt",
            instrument : "piano",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/7/a/d/7ad93b27b06023b5/schubert-liszt_op72.mp3?c_id=1789326&cs_id=1789326&expiration=1594584011&hwt=ccfe09da11887e522ee8ef45d8d68434',
          },
          {
            id : 13,
            title : "Aria Fantasy for Piano Quartet",
            performer : "Musicians from Ravinia's Steans Institute",
            composer : "David Ludwig",
            instrument : "pianos",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/4/a/3/4a3347872648cd92/ludwig_aria_ravinia.mp3?c_id=7796281&cs_id=7796281&expiration=1594584704&hwt=c6834d37ed56f954146209bb76620afe',
          },
          {
            id : 14,
            title : "Ancient Battle Field",
            performer : "Yang Wei",
            composer : "Various",
            instrument : "pipa",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/b/2/d/b2d59a31db6c88ef/tradchinese_ancientbattlefield_wei.mp3?c_id=4578127&cs_id=4578127&expiration=1594583456&hwt=7f22ea84d9f1f380bed71c91f81d2768',
          },
          {
            id : 15,
            title : "East Meets West Via Double Bass",
            performer : "DaXun Zhang and Yang Wei",
            composer : "Various",
            instrument : "double bass and pipa",
            contributor : "Isabella Stewart Gardner Museum",
            song_contributor_url: "orchestra",
            song_path: 'http://hwcdn.libsyn.com/p/e/a/8/ea8d302a5530fa76/theconcert143.mp3?c_id=4578123&cs_id=4578123&expiration=1594589226&hwt=e698bb4e699cf0517a6afdff0d44ceae',
          },
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
              title: 'White Aspens and Hillside, Route 14, Routt County, Colorado',
              artist: 'Eliot Porter',
              date: 'May 28, 1975',
              contributor: 'Amon Carter Museum, Fort Worth, Texas',
              url: 'http://porter.cartermuseum.org/collection.php?asn=P1990-51-2002&mcat=4&scat=25',
            },
            {
              id: 12,
              image_path: '/images/13.jpg',
              title: 'Sunset Clouds, Tesuque, New Mexico, ca.',
              artist: 'Eliot Porter',
              date: 'July 1959',
              contributor: 'Amon Carter Museum, Fort Worth, Texas',
              url: 'http://porter.cartermuseum.org/collection.php?asn=P1990-51-1831&mcat=4&scat=26',
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

  getImageById = (id) => {
    const { images } = this.state;
    for (var i = 0; i < images.length; i++) {
      if (images[i].id == id) {
        return images[i];
      }
    }
    return images[0];
  }

    render() {
      const { images, songs, selectedImageId } = this.state;
      // console.log(images.filter(m => m.id === selectedImageId));
    
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
                            <Route path="/team" exact render={() => <TeamPage/>}/>
                            <Route path="/research" exact render={() => <ResearchPage/>}/>
                            <Route path="/songs" exact render={() => <SongPickerPage songs={this.state.songs}
                                                                            image={this.getImageById(selectedImageId)}
                                                                            onClickSelectSongButton={this.onClickSelectSongButton.bind(this)}
                                                                            />}/>
                            <Route path="/images" exact render={() => <ImageGridPage images={this.state.images}
                                                                        imageSelectEnabled={true}/>}/>
                            <Route path="/meditation" exact render={() => <MeditationPage song={this.state.songs[this.state.selectedSongId - 1]}
                                                                                          image={this.getImageById(selectedImageId)}/>}/>
                            <Route path="/share" exact render={() => <SharePage/>}/>
                            <Route path="/journal" exact render={() => <JournalPage/>}/>
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
// image={this.state.images[this.state.selectedImageId]}/>}