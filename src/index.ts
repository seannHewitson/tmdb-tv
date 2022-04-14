import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const Request = async (apiKey: string, action: string, extras?: string) => {
  const uri = `${action}?api_key=${apiKey}&language=en-US${extras ? `&${extras}` : ''}`;
  const response = await axios.get(uri);
  const { data } = response;
  return data;
}

const TMDB = (apiKey)

export default TMDB