import {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
const App = () => {
    
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(50);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('market_cap_desc');
    
    useEffect(() => {
        fetch(`/api/coins?limit=${limit}`)
          .then((res) => {
            if(!res.ok) throw new Error('Failed to fetch data');
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setCoins(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        })
    }, [limit]);
    
    return (
  <Routes>
    <Route
      path="/"
      element={
        <HomePage
          coins={coins}
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          setLimit={setLimit}
          sortBy={sortBy}
          setSortBy={setSortBy}
          loading={loading}
          error={error}
        />
      }
    />
    <Route path = "/about" element = {<AboutPage />}/>
  </Routes>
);

};

export default App;