const getUniversitiesByCountry = async (country) => {
  try {
      const response = await fetch(`${process.env.API_BASE_URL}/search?country=${country}`);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

export default {
  getUniversitiesByCountry,
}