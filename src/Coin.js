import React, { Fragment } from 'react'
import './Coin.css'
import Modal from './Modal'
import { useState } from 'react'


const Coin = ({ image, name, symbol, price, volume, priceChange, marketCap }) => {
    const [openModal, setOpenModal] = useState(false)

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    return (<Fragment>
        <div onClick={handleModal} className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'></img>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)}
                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
        <div>{openModal && <Modal onClose={() => setOpenModal(false)} open={openModal} name={name} price={price} image={image} priceChange={priceChange} />}</div>
    </Fragment>
    )
}

export default Coin
