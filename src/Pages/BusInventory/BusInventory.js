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
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-96 mb-16'>
                        {
                            busLists.map((busList) => <BusInventoryCard
                                key={busLists._id}
                                product={busList}
                            ></BusInventoryCard>)
                        }
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <AddBusInventory></AddBusInventory>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default BusInventory;