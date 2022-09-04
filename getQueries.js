const axios = require("axios");
const { GOOGLE_SEARCH_API } = require("./consts");

const getQueries = async (searchArg, language, country) => {

  const { data } = await axios.get(GOOGLE_SEARCH_API, {
    params: {
      q: searchArg,
      cp: searchArg.length,
      client: "gws-wiz",
      xssi: "t",
      hl: language || "",
      gl: country || "",
      authuser: "0",
      psi: "",
      dpr: "1",
    },
  });

  const parsedRes = JSON.parse(data.replace(")]}'", ""));
  const queries = parsedRes[0].map((item) =>
    item[0].replaceAll("<b>", "").replaceAll("</b>", "")
  );
  return queries;
};

module.exports = getQueries;
