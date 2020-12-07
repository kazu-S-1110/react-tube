import axios from 'axios';

const KEY = 'AIzaSyDIy6HMh4oqAp5z-AfiOHBJqrdE1D9zU90';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResult: 40,
      key: KEY,
      regiongCode: 'JP',
      type: 'video',
      chart: 'mostPopular',
    },
  });
};
