import axios from "axios";

export const getCharacters = async (comic) => {
  const response = await axios.get(
    `http://localhost:4000/${comic}`
  );
  
  if (!response.data.length) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    characters: response.data,
  };
};
