import {useState, useEffect} from "react";
import CoinCard from "./components/CoinCard.jsx"

const App = () => {
    
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(20);
    
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
    <div>
        <h1>🚀 Crypto</h1>
        {loading && <p>Loading</p>}
        {error && <div className = "error">{error} </div> }
        
        <div className="controls">
            <label htmlFor="limit">
                Show:
            </label>
            <select id="limit" value = {limit} onChange = {(event) => setLimit(Number(event.target.value))}>
               <option value="5">5</option>
               <option value="10">10</option>
               <option value="20">20</option>
               <option value="50">50</option>
               <option value="100">100</option>
            </select>
        </div>
    
        
    {!loading && !error && (
     <main className = "grid">
         {coins.map((coin) => (
        
          <CoinCard key = {coin.id} coin = {coin} />
         ))}
     </main>
     )}
    
    </div>
    );
}

export default App;