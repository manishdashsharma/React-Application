import React, { useState} from 'react';
import './style.home.css';
import { user , projects } from '../utils/utils';

function Home() {
    const [ userDetails , setUserDetails ] = useState('');
    const [userProjects , setUserProjects ] = useState('');

    const userData = user ;
    const projectData = projects;

    const handleUserChanges = (event) => {
        setUserDetails(event.target.value)
    };

    const handleProjectChanges = (event) => {
        setUserProjects(event.target.value)
    };
  return (
    <div className='container'>
        <div className="container-box">
            <h2>Whic project you are working on?</h2>
            <select value= {userDetails} onChange={handleUserChanges} className='container-dropdown'>
                <option value="">Select an user</option>
                {
                    userData.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
            {
                userDetails && (
                    <div>
                        <h2>{userDetails}'s projects</h2>
                        <select value= {userProjects} onChange={handleProjectChanges} className='container-dropdown'>
                            <option value="">Project list</option>
                            {
                                projectData[userDetails].map((project) => (
                                    <option key={project} value={project}>{project}</option>
                                ))
                            }
                        </select>
                    </div>
                )
            }
            {
                userDetails && userProjects && (
                    <h2>{userDetails} is working on {userProjects} project</h2>
                )
            }
        </div>
    </div>
  )
}

export default Home