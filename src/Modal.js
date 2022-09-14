import React from 'react'
import './Modal.css'

function Modal({ onClose, open, children, priceChange, name, price, image, }) {
    if (!open) return null

    return (
        <>
            <div onClick={onClose} className='overlay-styles' />
            <div className='modal-styles'>
                <div className='modal-container'>
                    <img className='modal-img' src={image}></img>
                    <div className='modal-name'><span>  Name:</span> {name} </div>
                    <div className='modal-price'> <span> Price:</span> {price}$</div>
                    {priceChange < 0 ? (
                        <p className='modal-price-change-red'> <span>Price Change:</span> {priceChange.toFixed(2)}%</p>
                    ) : (<p className='modal-price-change-green'> <span> Price Change:</span> {priceChange.toFixed(2)}%</p>)}
                    <div ><button className='modal-close' onClick={onClose}>Close</button>
                        {children}</div>
                </div>

            </div>

        </>
    )
}

export default Modal