require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api/coins", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 10;

    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        headers: {
          "x-cg-demo-api-key": process.env.COINGECKO_API_KEY
        },
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: limit,
          page: 1,
          sparkline: false
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("API ERROR:", error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data || error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
