import axios from "axios";

const searchProperty = axios.create({
  baseURL: "https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties",
});

const searchService = {
  searchProperty,
};

export default searchService;
