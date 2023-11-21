import axios from "axios";

const AllPropertiesaAPI =
  "https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties";

const AllProperties = async () => {
  try {
    const response = await axios.get(AllPropertiesaAPI);
    if (response.data) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error getting course:", error);
    throw error;
  }
};

const singleProperty = axios.create({
  baseURL: "https://homelanda-1d0d1907d8ae.herokuapp.com/v1/properties/list/",
});

const propertyService = {
  AllProperties,
  singleProperty,
};

export default propertyService;
