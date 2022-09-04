const axios = require("axios");
const { GOOGLE_TRENDS_URL } = require("./consts");

const getTrends = async (language) => {
  const { data } = await axios.get(GOOGLE_TRENDS_URL);
  return language ? data[language] : data;
};

module.exports = getTrends;
