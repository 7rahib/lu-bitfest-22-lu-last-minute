import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddRoute = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [numOfStoppage, setNumOfStoppage] = useState([0]);

    const addNewStoppage = () => {
        const n = [...numOfStoppage];
        n.push(n.length);
        setNumOfStoppage(n);
    }

    const onSubmit = (data) => {
        console.log(data);

        const arr = [];
        for (let i = 0; i < numOfStoppage.length; i++) {

            const stp = {
                label: data[`stoppage${i}`],
                lat: parseFloat(data[`s_Lat${i}`]),
                lon: parseFloat(data[`s_Lon${i}`]),
            }
            arr.push(stp);
        }

        const x = {
            routeNumber: parseInt(data.routeNumber),
            location: {
                label: data.location,
                lat: parseFloat(data.l_Lat),
                lon: parseFloat(data.l_Lon),
            },
            startTime: data.startTime,
            stoppages: arr
        }

        fetch("http://localhost:5000/route",
            {
                method: 'post',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ ...x })
            }).then((res) => res.json())
            .then((data) => {
                console.log('data -> ', data);
            })
        console.log(x);
    }

    return (
        <div className='w-1/2 mx-auto'>
            <h3 className='text-2xl'>Add new Route</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <input {...register("routeNumber")} type="number" placeholder="Route Number" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <input {...register("location")} type="text" placeholder="Location" className="input input-bordered mb-1" />
                    <div className='flex justify-between'>
                        <input {...register("l_Lat")} type="text" placeholder="Location Latitude" className="input input-bordered mb-1 w-full mr-1" />
                        <input {...register("l_Lon")} type="text" placeholder="Location Longitude" className="input input-bordered mb-1 w-full" />
                    </div>

                </div>
                <div className="form-control">
                    <input {...register("startTime")} type="text" placeholder="Start Time" className="input input-bordered" />
                </div>
                {
                    numOfStoppage?.map((i) => {
                        return <div className="form-control">
                            <div className='flex flex-row'>
                                <input {...register(`stoppage${i}`)} type="text" placeholder="Stoppage" className="input input-bordered mb-1 mr-2 w-full" />
                                {
                                    i === numOfStoppage?.length - 1 ? <span
                                        class="flex items-center">
                                        <button onClick={addNewStoppage} class="flex items-center btn btn-primary mb-1 text-2xl">
                                            +
                                        </button>
                                    </span> : null
                                }
                            </div>
                            <div className='flex justify-between'>
                                <input {...register(`s_Lat${i}`)} type="text" placeholder="Stoppage Latitude" className="input input-bordered mb-1 w-full mr-1" />

                                <input {...register(`s_Lon${i}`)} type="text" placeholder="Stoppage Longitude" className="input input-bordered mb-1 w-full" />
                            </div>
                        </div>
                    })
                }
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );

};

export default AddRoute;