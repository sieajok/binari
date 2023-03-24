import axios from "axios";
import { useEffect, useState } from "react";

import './admin.css';

export default function Kontakdata() {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/binari_db/user/').then(function(responses) {
            console.log(responses.data);
            setUsers(responses.data);
        });

    }

    
    return (
<div className="data">
<section>
  
  <h1>pesan</h1>
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
        
                <thead>
                    <tr>
                        <th>nama</th>
                        <th>email</th>
                        <th>kontak</th>
                        <th>pesan</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user, key) => 
                            <tr key={key}>
                                <td  >{user.name}</td>
                                <td  >{user.email}</td>
                                <td  >{user.contact}</td>
                                <td  >{user.massage}</td>
                            </tr>
                        )}
                </tbody>
          </table>
          </div>
          </section>
          </div>
        
        
      


    )
}



