import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    }
   this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
  }

 onVideoTitleClick(video){
   // console log testing
   console.log('IT WORKS!!!!!!!!', video);
   this.setState({
     currentVideo: video
   })
 }

  render() {

   return (  
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em>     <Search/>   </h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em> <VideoPlayer video={this.state.currentVideo} /> </h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em> <VideoList clickFunction={this.onVideoTitleClick}  videos={exampleVideoData} /> </h5></div>
        </div>
      </div>
    </div>
  )
 }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
