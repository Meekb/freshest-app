export const getData = async (endPoint: string) => {
  let url = `https://search.ams.usda.gov/farmersmarkets/v/data.svc/${endPoint}`;
  return await fetch(url);
};
