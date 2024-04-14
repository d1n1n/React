import {createContext, useReducer} from "react";

export const CounterContext = createContext({
    count:0,
    increment:()=>null,
    decrement:()=>null
});

const INITIAL_STATE = {
    count:0
}
const COUNTER_ACTION_TYPES= {
    INCREMENT : 'INCREMENT',
    DECREMENT : 'DECREMENT'

}

export const countReducer = (state,action)=>{
    const{type,payload} = action;
    switch(type){
        case COUNTER_ACTION_TYPES.INCREMENT:
            return{
                ...state,
                count:state.count+1
            };
        case COUNTER_ACTION_TYPES.DECREMENT:
            return{
                ...state,
                count:state.count-1
            };
        default:return state;
    } 
    
}

export const CounterProvider = ({children}) =>{
    const [{count},dispatch ] = useReducer(countReducer, INITIAL_STATE);
    const increment = () =>{
        dispatch({type:COUNTER_ACTION_TYPES.INCREMENT})
    }
    const decrement = () =>{
        dispatch({type:COUNTER_ACTION_TYPES.DECREMENT})
    }
    const value = {count,increment,decrement};
    return<CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}