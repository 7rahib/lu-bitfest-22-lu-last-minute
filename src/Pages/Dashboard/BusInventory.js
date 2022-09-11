import React, { useEffect, useState } from 'react';
import AddBusInventory from './AddBusInventory';
import BusInventoryCard from './BusInventoryCard';
import { useQuery } from "react-query";

const BusInventory = () => {
    const [busLists, setBusLists] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bus', {
            method: "GET",
            "content-type": "application/json"
        })
            .then((res) => res.json())
            .then((data) => {
                setBusLists(data.data)
            })
    }, [])
    return (
        // <div className='flex flex-wrap ml-10 mt-5'>
        //     <div>
        //         <AddBusInventory></AddBusInventory>
        //     </div>
        //     <div className='sm:mx-auto lg:ml-20'>
        //         <h3 className='text-3xl'>Our Bus</h3>
        //         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        //             <BusInventoryCard></BusInventoryCard>
        //             <BusInventoryCard></BusInventoryCard>
        //             <BusInventoryCard></BusInventoryCard>
        //             <BusInventoryCard></BusInventoryCard>
        //         </div>
        //     </div>
        // </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-64 mb-5 gap-2'>
            {
                busLists.map((busList) => <BusInventoryCard
                    key={busLists._id}
                    product={busList}
                ></BusInventoryCard>)
            }
        </div>

    );
};

export default BusInventory;