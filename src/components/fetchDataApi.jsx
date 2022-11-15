import axios from 'axios';

const fetchDataApi = (searchQuery, page = 1) => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '28545152-94e55978d3ea380a963d011b7';
  return axios
    .get(`${URL}?key=${KEY}&per_page=12&page=${page}&q=${searchQuery}`)
    .then(res => res.data);
};

export default fetchDataApi;