var searchYouTube = (options, callback) => {
  // TODO
  // options is whatever we're searching
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: options.max,
      key: options.key,
      q: options.query,
      part: 'snippet',
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: function(videos) {
      callback(videos.items);
    }
  })
};

export default searchYouTube;
