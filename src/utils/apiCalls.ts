export const getData = async (endPoint: string) => {
  let url = `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/${endPoint}`;
  return await fetch(url);
};
