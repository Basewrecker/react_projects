import {useState, useEffect} from "react";
import {useParams, Link} from "react-router";
import Spinner from "../components/Spinner.jsx"
const API_URL = import.meta.env.VITE_COIN_API_URL;

const CoinDetailsPage = () => {
    
    const {id} = useParams();
    const [coin, setCoin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const res = await fetch(`${API_URL}/${id}`);
                if (!res.ok) throw new Error('Failed to fetch the data');
                const data = await res.json();
                console.log('API_URL', API_URL);
                setCoin(data);
            } catch (error) {
                
                setError(error.message);
            } finally {
                setLoading(false);
            }
         };
        
        fetchCoin();
    }, [id]);
    
    
    return (
      <div className = "coin-details-container">
          <Link to = "/">--- Back to home</Link>
          
          <h1 className = "coin-details-title">
              {coin ? `${coin.name} (${coin.symbol})` : 'Coin Details'}
          </h1>
          
          {loading && <Spinner />}
          {error && <div className = "error">{`❌ ${error}`}</div>}
          
            {!loading && !error && (
              <>
                <img src={coin.image.large} alt={coin.name} className = "coin-details-image"/>
                <p>
                    {coin.description.en.split('. ')[0] + '.'}
                </p>
                <div className = "coin-details-info">
                    <h3>
                        Rank: #{coin.market_cap_rank}
                    </h3>
                    <h3>
                        Current Price: {coin.market_data.current_price.usd}
                    </h3>
                    <h4>
                        Market Cap: {coin.market_data.market_cap.usd}
                    </h4>
                    <h4>
                        24h High: ${coin.market_data.high_24h.usd}
                    </h4>
                    <h4>
                        24h Low: ${coin.market_data.low_24h.usd}
                    </h4>
                    <h4>
                        24h Price Change: ${coin.market_data.price_change_24h.toFixed(8)}{' To '}{coin.market_data.price_change_percentage_24h.toFixed(8)}
                    </h4>
                    <h4>
                        Circulating Supply: ${coin.market_data.circulating_supply.toLocaleString(10)}
                    </h4>
                    <h4>
                        Total Supply: ${coin.market_data.total_supply.toLocaleString(10) || ''}
                    </h4>
                    <h4>
                        All-Time High: ${coin.market_data.ath.usd}
                        {''} on {coin.market_data.ath_date.usd}
                    </h4>
                    <h4>
                        All-Time Low: ${coin.market_data.atl.usd.toFixed(10)}
                        {''} on {coin.market_data.atl_date.usd}
                    </h4>
                    <h4>
                        Last Update: {new Date(coin.last_updated).toLocaleString()}
                    </h4>
                </div>
                
                <div className = "coin-details-link">
                    {coin.links.homepage[0] && (
                    <p>
                        {''}
                        <a href={coin.links.homepage[0]} target = "_blank">
                            Website
                        </a>
                        <br/>
                        <a href={coin.links.blockchain_site[0]} target = "_blank">
                            Blockchain Explorer
                        </a>
                    </p>
                        
                       
                    )}
                    {coin.categories.length > 0 && (
                    
                      <p>Categories: {coin.categories.join(', ')}</p>
                    )}
                </div>
                
                {!loading && !error && !coin && <p>No data found, please try again.</p>}
              </>
            )}
      </div>
    )
}

export default CoinDetailsPage;