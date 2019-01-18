import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    }
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount(){
    const options = {
      query: '',
      key: YOUTUBE_API_KEY,
      max: 5
    };
 
    // VIDEOS ARE JUST THE FIVE ITEMS IN THIS CASE FROM VIDEO.ITEMS IN THE SEARCHYOUTUBE FILE
    this.props.searchYouTube(
      options,
      (videos) => {
        this.setState({
          currentVideo: videos[0],
          videoList: videos
        });
      }
    );
  }

  // in work to redo search
  onSearchChange(query) {
    // IN PROGRESS 
    const options = {
      query: query,
      key: YOUTUBE_API_KEY,
      max: 5
    };
 
    this.props.searchYouTube(
      options,
      (videos) => {
        this.setState({
          currentVideo: videos[0],
          videoList: videos
        });
      }
    );
  }

  onVideoTitleClick(video){
    this.setState({
     currentVideo: video
    });
  }


  render() {
    return (  
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search  onSearchChange={this.onSearchChange}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList clickFunction={this.onVideoTitleClick}  videos={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
