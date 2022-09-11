import React from 'react';
import { useQuery } from 'react-query';
import StaffListRow from './StaffListRow';

const StaffList = () => {
    const { data: staffLists, isLoading, refetch } = useQuery('staffLists', () => fetch("http://localhost:5000/users/stafflist",).then(res => {
        refetch()
        return res.json()
    }))
    return (
        <div>
            <h3 className='text-3xl text-center'>Staffs</h3>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Staff</th>
                            <th>Number</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            console.log(staffLists)
                        }
                        {
                            staffLists?.map((staffList, index) => <StaffListRow
                                key={staffLists._id}
                                staffList={staffList}
                                refetch={refetch}
                                index={index}
                            >
                            </StaffListRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffList;