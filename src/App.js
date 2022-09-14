import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import Coin from './Coin';
import Modal from './Modal';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [closeModal, setCloseModal] = useState(false)



  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
    }).catch(error => alert(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }



  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))



  return (
    <Fragment>

      <div onClick={() => setCloseModal(true)} className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'> Search a currency</h1>
          <form> <input type='text' placeholder='Search Coin' className='coin-input' onChange={handleChange}></input>
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin key={coin.id} name={coin.name} price={coin.current_price} image={coin.image} symbol={coin.symbol} marketCap={coin.market_cap} priceChange={coin.price_change_percentage_24h} volume={coin.total_volume} />
          )

        })}
      </div>
      <div className='notfound-container'>
        {filteredCoins && filteredCoins.length === 0 && <div className='no'>Coin Not Found</div>}
      </div>

    </Fragment>
  )
}

export default App;
