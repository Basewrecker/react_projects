const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = 4000;
const app = express();

app.use(cors());

// Proxy endpoint
app.get("/api/coins", async (req, res) => {
  try {
    const limit = req.query.limit || 10;

    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: limit,
          page: 1,
          sparkline: false,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "API failed" });
  }
});



app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
