import axios from 'axios';

const KEY = 'AIzaSyDIy6HMh4oqAp5z-AfiOHBJqrdE1D9zU90';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

const params = {
  part: 'snippet',
  maxResults: 20,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
};

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular',
    },
  });
};
export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id,
    },
  });
};

export const fetchRelatedData = async (id) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      relatedToVideoId: id,
    },
  });
};
