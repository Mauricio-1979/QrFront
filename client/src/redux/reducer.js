import { getAllMenues,takeOrder,Limpiar, takeOrders,TableSelector,ID_MESA } from "./actions"
const initialState={
   Menues:[],
   Pedido:[],
   Order:[],
   Table:'',
   Id_mesa:[],
}



export default function rootReducer(state=initialState,actions){
        switch (actions.type){
            case TableSelector:
                return{
                    ...state,
                    Table:actions.payload
                }
            case takeOrders:
                return{
                    ...state,
                    Order:actions.payload
                }
            case takeOrder:
                return{
                    ...state,
                    Order:actions.payload
                }
            case Limpiar:
                return{
                    ...state,
                    Order:actions.payload
                }    
            case getAllMenues:
                return{
                    ...state,
                    Menues:actions.payload
                }
            case ID_MESA:
                return {
                    ...state,
                    Id_mesa:actions.payload
                }   
            
            default:
                return state
        }        
}   