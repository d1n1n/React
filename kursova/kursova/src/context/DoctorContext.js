import React, { createContext, useReducer, useContext } from 'react';

export const DoctorContext = createContext();

const initialState = {
    doctors: [],
};

const doctorReducer = (state, action) => {
    const {type }= action;
    switch (type) {
        case 'ADD_DOCTOR':
            return {
                ...state,
                doctors: [...state.doctors, action.payload],
            };
        case 'DELETE_DOCTOR':
            return {
                ...state,
                doctors: state.doctors.filter(doctor => doctor.id !== action.payload),
            };
        default:
            return state;
    }
};

export const useDoctorContext = () => {
    return useContext(DoctorContext);
};

export const DoctorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(doctorReducer, initialState);

    const addDoctor = (doctor) => {
        dispatch({
            type: 'ADD_DOCTOR',
            payload: doctor,
        });
    };

    const deleteDoctor = (id) => {
        dispatch({
            type: 'DELETE_DOCTOR',
            payload: id,
        });
    };

    return (
        <DoctorContext.Provider value={{ doctors: state.doctors, addDoctor, deleteDoctor }}>
            {children}
        </DoctorContext.Provider>
    );
};
