import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDoctorContext  } from '../context/DoctorContext';
const AppointmentForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { doctors } = useDoctorContext();
    const [appointmentList, setAppointmentList] = useState([]);

    
    const onSubmit = (data) => {
        console.log("Data:", data);
        const isSlotAvailable = !appointmentList.some(
            appointment => appointment.date === data.date && appointment.time === data.time
        );

        if (isSlotAvailable) {
            setAppointmentList([...appointmentList, data]);
            reset();
        } else {
            alert('This slot is already booked. Please choose another slot.');
        }
    };
    
    const deleteAppointment = (index) => {
        const updatedAppointmentList = [...appointmentList];
        updatedAppointmentList.splice(index, 1);  
        setAppointmentList(updatedAppointmentList);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <form 
                style={{ marginBottom: '30px' }}
                onSubmit={handleSubmit(onSubmit)}
            >
                 <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Doctor Name</label>
                    <select 
                        {...register("doctorName")} 
                        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        {doctors.map(doctor => (
                        <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                        ))}
                    </select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Date</label>
                    <input 
                        {...register("date")} 
                        type="date" 
                        name="date" 
                        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Time</label>
                    <input 
                        {...register("time")} 
                        type="time" 
                        name="time" 
                        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <button 
                    type="submit"
                    style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Записатися на прийом
                </button>
            </form>
            
            <div>
                <h2>Список записів на прийом</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {appointmentList.map((appointment, index) => (
                        <li 
                            key={index}
                            style={{ marginBottom: '15px', padding: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
                        >
                            <p>Doctor Name: {appointment.doctorName}, Date: {appointment.date}, Time: {appointment.time}</p>
                            <button 
                                type="button" 
                                onClick={() => deleteAppointment(index)}
                                style={{ padding: '8px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            >
                                Видалити запис
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AppointmentForm;
