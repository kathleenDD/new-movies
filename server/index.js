const tracer = require('dd-trace').init();


const express = require("express");
const dotenv = require('dotenv').config();
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=30f97dabd23a55145e8c6e9693269e9f&language=en-US&page=1";
// const API_URL =
//   "https://api.themoviedb.org/3/movie/popular?api_key=30f97dabd23a55145e8c6e9693269e9f&language=en-US&page=1";

app.get("/", async (req, res) => {
	try {
		const response = await axios({
			url: API_URL,
			method: "get",
		});
    res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
