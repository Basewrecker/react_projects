import {useState, useEffect} from "react";
import CoinCard from "./components/CoinCard.jsx"
import LimitSelector from "./components/LimitSelector.jsx"
import FilterInput from "./components/FilterInput.jsx"

const App = () => {
    
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(50);
    const [filter, setFilter] = useState('');
    
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
    
    const filteredCoins = coins.filter((coin) => {
        return (
            coin.name.toLowerCase().includes(filter.toLowerCase()) 
            || coin.symbol.toLowerCase().includes(filter.lowercase())
          )
    });
    
    return (
    <div>
        <h1>🚀 Crypto</h1>
        {loading && <p>Loading</p>}
        {error && <div className = "error">{error} </div> }
        
        <div className="top-controls">
            <FilterInput filter = {filter} onFilterChange = {setFilter}/>
            <LimitSelector limit = {limit} onLimitChange = {setLimit}    />
        </div>
        
            
        
        
    {!loading && !error && (
     <main className = "grid">
         {filteredCoins.map((coin) => (
        
          <CoinCard key = {coin.id} coin = {coin} />
         ))} 
     </main>
     )}
    
    </div>
    );
}

export default App;