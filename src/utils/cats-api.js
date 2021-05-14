import request from 'superagent';

const URL = '/api/cats';
//I added the function on the previos step, made a change for the commit. 

export async function getCats() {
  const response = await request.get(URL);
  return response.body;
}

export async function getCat(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}


