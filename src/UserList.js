import React, { useEffect} from 'react'
import axios from 'axios'
import './App.css';
const urlbase="https://jsonplaceholder.typicode.com/users";
function UserList() {
    const [post,setPost]=React.useState([]);

    useEffect(() =>{
        axios.get(urlbase)
        .then((JSON) =>{
            setPost(JSON.data)})
        .catch((error) => console.log(error))
    })
 return(
    <div>
   {
   post.map((user) =>{
    return <div className='user'>
        <p>
             {user.id}:
             <br/>
           NOM: {user.name}
            <br/>
           USERNAME: {user.username}
            <br/>
           EMAIL: {user.email}
            <br/>
           STREET: {user.address.street}
            <br/>
           SUITE: {user.address.suite} 
            <br/>
           CITY: {user.address.city}
            <br/>
           ZIPCODE: {user.address.zipcode}
            <br/>
           GEO,LAT: {user.address.geo.lat}
            <br/>
           GEO,LNG: {user.address.geo.lng}
           
            </p>
    </div>
   })
   }
    </div>
 )
}

export default UserList
