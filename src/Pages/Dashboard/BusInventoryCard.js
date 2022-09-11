import React from 'react';
import bus1 from '../../Assets/Images/bus/bus1.jpg'

const BusInventoryCard = (product) => {
    let isActiveBool;
    if (product?.product?.isActive === 1) {
        isActiveBool = 'Yes'
    }
    else {
        isActiveBool = 'No'
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={bus1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="">License: {product?.product?.licenseNum}</h2>
                <h2 className="">Codename: {product?.product?.codename}</h2>
                <h2 className="">Capacity: {product?.product?.capacity}</h2>
                <h2 className="">Driver Name: {product?.product?.driver?.Name}</h2>
                <h2 className="">Contact Number: {product?.product?.driver?.contact}</h2>
                <p>It is available? {isActiveBool}</p>
            </div>

        </div>


    );
};

export default BusInventoryCard;