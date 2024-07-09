import axios from "axios";
const link = "https://api.unsplash.com/search/photos";
const accessKey = "q_i28m_Owkjybxx0mU2MUHbLHaCdOt8jlJP2hAf8YQM";


const searchImages = async (query) => {
  try {
    const response = await axios.get(link, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default searchImages;
