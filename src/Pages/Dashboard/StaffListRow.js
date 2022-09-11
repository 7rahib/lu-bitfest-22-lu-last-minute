import React from 'react';
import swal from 'sweetalert';

const StaffListRow = ({ staffList, refetch, index }) => {
    const { username, isAdmin } = staffList

    const makeAdmin = username => {
        swal({
            title: "Are you sure?",
            text: "This user will have Admin power!!!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })

            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/addadmin/${username}`, {
                        method: 'PUT',
                        "content-type": "application/json"
                    })
                        .then(res => {
                            if (res.status === 403) {
                                console.log('Only an admin make make another admin');
                            }
                            return res.json()
                        })
                        .then(data => {

                            refetch();
                            console.log(data);

                        })
                } else {
                }
            });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{staffList?.displayName}</td>
            <td>{staffList?.email}</td>
            <td>{staffList?.contactNumber}</td>
            <td>{isAdmin === true ? <button className="btn btn-xs" disabled="disabled">Already Admin</button> : <button onClick={() => makeAdmin(username)} className='btn btn-xs'>Make Admin</button>}</td>
        </tr>
    );
};

export default StaffListRow;