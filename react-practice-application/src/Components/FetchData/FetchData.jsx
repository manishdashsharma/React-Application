import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
function FetchData() {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/');
      setUserData(res.data.results);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userData);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      {
        userData.length > 0 ? (
            userData.map((user) => (
                <div key={user.login.uuid} className='container__card'>
                    <img src={user.picture.thumbnail} alt="" className='profile-picture'/>
                    <h1>Name : {`${user.name.first} ${user.name.last}`}</h1>
                    <h1>Email : {user.email}</h1>
                    <h1>Gender : {user.gender}</h1>
                    <h1>Location : {user.location.city}</h1>
                    <h1>Phone : {user.phone}</h1>
                    <h1>DOB : {user.dob.date}</h1>
                    <h1>Age : {user.dob.age}</h1>
                </div>
            ))
        ) : (
            <h1>Loading..</h1>
        )
      }
    </div>
  );
}

export default FetchData;
