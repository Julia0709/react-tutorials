import axios from 'axios';
import secret from '../configs/secret';

const url = 'http://api.yummly.com/v1/api';

export async function getRecipes(query?: string) {
  const res = await axios.get(`${url}/recipes`, {
    params: {
      _app_id: secret.yummly.apiId,
      _app_key: secret.yummly.apiKey,
      q: query,
    },
  });
  const recipes = res.data.matches;

  return recipes;
}
