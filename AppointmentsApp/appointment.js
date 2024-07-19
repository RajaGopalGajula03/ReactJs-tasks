import { useState } from "react";
import "./appointment.css";

const AppointmentApp = () => {
    const [appointments, setAppointments] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [showStarred, setShowStarred] = useState(false);

    const handleAppointment = () => {
        if (title && date) {
            const newAppointment = {
                id: new Date().getTime().toString(),
                title,
                date,
                isStarred: false
            };
            setAppointments([...appointments, newAppointment]);
            setTitle('');
            setDate('');
        }
    };

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const getWeekday = (date) => {
        const options = { weekday: 'long' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const toggleStar = (id) => {
        const updatedAppointments = appointments.map(appointment => {
            if (appointment.id === id) {
                return { ...appointment, isStarred: !appointment.isStarred };
            }
            return appointment;
        });
        setAppointments(updatedAppointments);
    };

    const filteredAppointments = showStarred
        ? appointments.filter(appointment => appointment.isStarred)
        : appointments;

    return (
        <div className="app-container">
            <div className="top-section">
                <div className="left-side">
                    <h1 className="heading1">Add Appointment</h1>
                    <label htmlFor="titleInput">TITLE</label>
                    <input
                        id="titleInput"
                        type="text"
                        placeholder="Title"
                        className="titleInput"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="dateInput">DATE</label>
                    <input
                        id="dateInput"
                        type="date"
                        placeholder="dd/mm/yyyy"
                        className="dateInput"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleAppointment}
                    >
                        Add
                    </button>
                </div>
                <div className="right-side">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                        alt="appointments"
                        className="appointmentImage"
                    />
                </div>
            </div>
            <hr className="w-75" />
            <div className="bottom-section">
                <div className="appointment-header">
                    <h2 className="heading2">Appointments</h2>
                    <button
                        className="starred"
                        onClick={() => setShowStarred(!showStarred)}
                    >
                        {showStarred ? "All" : "Starred"}
                    </button>
                </div>
                <div className="appointments-list">
                    {filteredAppointments.map((appointment) => (
                        <div key={appointment.id} className="appointment-item card">
                            <div className="starBeside">
                                <h3>{appointment.title}</h3>
                                <button
                                    className="star-button"
                                    onClick={() => toggleStar(appointment.id)}
                                >
                                    <img
                                        src={
                                            appointment.isStarred
                                                ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
                                                : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
                                        }
                                        alt="star"
                                        className="star-image"
                                    />
                                </button>
                            </div>
                            <p className="date">
                                Date: {formatDate(appointment.date)}, {getWeekday(appointment.date)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppointmentApp;
