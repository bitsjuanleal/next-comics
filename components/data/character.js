import axios from "axios";

export const getCharacter = async (comic, name) => {
  const response = await axios.get(
    `http://localhost:4000/${comic}?name=${name}`
  );
  
  if (!response.data.length) {
    return {
      statusCode: 404,
    };
  }

  return {
    statusCode: 200,
    character: response.data[0],
  };
};
