import { checkForError } from './utils';

export const getData = async (endPoint: string) => {
  let url = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/${endPoint}`;
  let response = await fetch(url);
  console.log('response', response);
  return checkForError(response);
};
