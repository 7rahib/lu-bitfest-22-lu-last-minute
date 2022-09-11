import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const Transports = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    const [route, setRoute] = useState();

    const { data: routes, isLoading, refetch } = useQuery('routes', () => fetch("http://localhost:5000/route",).then(res => {
        refetch()
        const data = res.json();
        return data;
    }))


    const onSubmit = (data) => {
        console.log(data);
    }

    return (

        <div className='w-1/2 mx-auto'>
            <h3 className='text-2xl text-center'>Transport Demand</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <input {...register("numOfStudent")} type="number" placeholder="Number of students" className="input input-bordered" />
                </div>

                <div className="mb-2">
                    <select
                        {...register("route")}
                        name="route"
                        className="select w-full p-4 pr-12 text-xs border-gray-200 rounded-lg shadow-sm"
                        onChange={async (e) => {
                            const rn = parseInt(e.target.value);
                            setRoute(e.target.value);
                        }}
                    >
                        <option value="">Select your route</option>
                        {
                            routes?.data?.map((route, index) => {
                                return <option>{route?.routeNumber}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-control">
                    <input {...register("startTime")} type="text" placeholder="Start Time" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default Transports;