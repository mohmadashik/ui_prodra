import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ActivityList = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/activities/')
            .then(response => setActivities(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Activities</h1>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.name} - {activity.distance} km</li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityList;
