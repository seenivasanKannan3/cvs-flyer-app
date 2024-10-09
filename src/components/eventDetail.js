import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaLaptopCode, FaRobot } from 'react-icons/fa';
import './EventDetail.css';

const EventDetail = ({ event }) => {
    return (
        <div className="event-detail">
            <h2>Health-a-thon - 2024</h2>
            <div className="event-info">
                <div className="event-date">
                    <FaCalendarAlt /> 24th September 2024
                </div>
                <div className="event-date">
                    <FaMapMarkerAlt /> TCO Auditorium, Cognizant,Chennai
                </div>
            </div>
            <div className="event-description">
                <p>This event is focused on the rapidly evolving field of Generative AI (Gen AI). We have been astounded by the creativity and innovation our participants have demonstrated.</p>
            </div>
            <div className="event-icons">
                <FaLaptopCode className="icon" title="Hackathon" style={{width: '2em', height: '2em', padding: '10px'}} />
                <FaRobot className="icon" title="Generative AI" style={{width: '2em', height: '2em', padding: '10px'}} />
            </div>
        </div>
    );
};

export default EventDetail;

