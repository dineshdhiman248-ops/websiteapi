 
import { useEffect, useState } from "react";

function Userlist() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
       <div className="container mx-auto px-4">
      <h1>dinesh</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
      {users.map( user => (
       
       <div key={user.id} className="p-4 shadow rounded-lg bg-grey">
         <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
           <p>{user.website}</p>
            <p>{user.address.city}</p>
             <p>{user.address.zipcode}</p>
             <p>{user.company.name}</p>
             </div>
     
      ))}
      </div>
    </div>
    </div>
  );
}

export default Userlist;