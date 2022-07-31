import {React, useContext} from 'react';
import {UserContext, Card} from './context';


function AllData() {
    const ctx = useContext(UserContext);

    return (
        <Card 
            header='Our users'
            title='Recent opened accounts'
            body={
                (
                    <div className="table-responsive-lg mt-3">
                        <table className="table table-hover table-sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">User</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ctx.users.map((user, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.pass}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            />        
    );
}

export default AllData;