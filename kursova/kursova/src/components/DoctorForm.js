import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDoctorContext } from '../context/DoctorContext';

const DoctorForm = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const { addDoctor } = useDoctorContext();
  const [doctorList,setDoctorList] = useState([]);
  const onSubmit = (data) => {
    console.log("Data:", data);
    addDoctor({ ...data, id: Date.now() });
    setDoctorList(prevDoctorList => [...prevDoctorList, data]); 
    reset();
  };
  const deleteDoctor = (index) => {
    const updatedDoctorList = [...doctorList];
    updatedDoctorList.splice(index, 1);  // Remove the doctor at the specified index
    setDoctorList(updatedDoctorList);
};
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <form 
        style={{ marginBottom: '30px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Name</label>
          <input 
            {...register("name")} 
            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }} 
            type="text" 
            placeholder="Enter name" 
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Number</label>
          <input 
            {...register("number")} 
            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }} 
            type="text" 
            placeholder="Enter number" 
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Specialization</label>
          <input 
            {...register("specialization")} 
            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }} 
            type="text" 
            placeholder="Enter specialization" 
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none' }}
        >
          Add Doctor
        </button>
      </form>
      <div>
        <h2>Список лікарів</h2>
        <ul>
          {doctorList.map((doctor, index) => (
            <li key={doctor.id}>
              <p>Name: {doctor.name}, Phone Number: {doctor.number}, Specialization: {doctor.specialization}</p>
              <button type="button" onClick={() => deleteDoctor(doctor.id)}
            style={{ marginLeft: '10px', padding: '5px 10px', backgroundColor: 'red', color: '#fff', borderRadius: '4px', border: 'none' }}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorForm;
