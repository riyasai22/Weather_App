export const options = {
  method: "GET",
  // url: "https://wft-geo-db.p.rapidapi.com/v1/geo/",
  headers: {
    "X-RapidAPI-Key": "ec3bdade4dmsh62bc588dc055ab8p1a5e8djsn1aff0852c42c",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// return axios
//   .request(`${GEO_API_URL}/cities?namePrefix=${input}`, options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
