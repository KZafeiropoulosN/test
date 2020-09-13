import axios from 'axios';

export const addCountry = async (country) => {
  await axios.post(`/`,country);
  return
}
export const deleteCountry = async (id) => {
  await axios.delete(`/${id}`);
  return
}
export const updateCountry = async (id, updatedCountry) => {
  console.log(id);
  await axios.put(`/${id}`,updatedCountry);
  return
}
export const getApiData = () =>{
  // const {data} = await axios.get(`/countries`);
  let dataLocal = [
    {capital: "Rome", id: 2, name: "Italy"},
    {capital: "Budapest", id: 3, name: "Hungary"},
    {capital: "Madrid", id: 4, name: "Spain"},
    {capital: "Berlin", id: 5, name: "Germany"},
    {capital: "asdas", id: 71, name: "S.Aznaouridis"},
  ]
  return dataLocal;
}