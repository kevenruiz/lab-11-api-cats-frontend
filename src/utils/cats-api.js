import request from 'superagent';

const URL = 'api/cats';

export async function getCats() {
  const response = await request.get(URL);
  return response.body;
}

