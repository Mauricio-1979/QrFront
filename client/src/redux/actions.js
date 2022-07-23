import axios from 'axios';

export const getAllMenues='getAllMenues'
export const takeOrder='takeOrder'
export const Limpiar='Limpiar'
export const takeOrders='takeOrders'
export const TableSelector='TableSelector'
export const ID_MESA = 'idMesa';

export function getMenues(){
    return (dispatch)=>{
        axios.get('/menues')
        .then(r=>{
            return dispatch({
                type:getAllMenues,
                payload:r.data
            })
        })
    .catch((r)=>{console.log(r)})
    }
}
export function takeorder(array,value){
   
    return (dispatch)=>{
       
        
            array.push(value)
        return dispatch({
            type:takeOrder,
            payload:array
        })
    }
}
export function takeorders(array){
    return(dispatch)=>{
        return dispatch({
            type:takeOrders,
            payload:array
        })
    }

}
export function limpiar(){
    return (dispatch)=>{
        return dispatch({
            type:Limpiar,
            payload:[]
        })
    }
}
export function table(value){
    return(dispatch)=>{
        return dispatch({
            type:TableSelector,
            payload:value
        })
    }
}

export function idMesa(payload){
    return {
        type: ID_MESA,
        payload: payload
    }
}






