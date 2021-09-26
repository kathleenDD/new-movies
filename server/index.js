const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=30f97dabd23a55145e8c6e9693269e9f&language=en-US&page=1";
  // const API_URL =
  //   "https://api.themoviedb.org/3/movie/popular?api_key=30f97dabd23a55145e8c6e9693269e9f&language=en-US&page=1";

app.get("/api", (req, res) => {
    res.send(API_URL.results);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});