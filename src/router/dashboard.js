import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
    <div>
        <h2>React Router</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/app">App</Link></li>
            <li><Link to="/app-component">App Component</Link></li>
        </ul>
    </div>
)

export default Dashboard;