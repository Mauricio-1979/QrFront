import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"
import { takeorder,limpiar,takeorders } from "../redux/actions"
import { useEffect } from "react"


export default function General(props){
    let aux=[]
    const Order=useSelector(state=>state.Order)
    const dispatch=useDispatch()
    const todosMenues=useSelector(state=>state.Menues)
    const [local,setlocal]=useState({
        mostra:'',
        lista:[],
        Orden:[],
        valida:false
    })
   useEffect(()=>{dispatch(takeorders(local.Orden))},[local.Orden.length])
   

    function handleOrder(value){
        
        dispatch(takeorder(Order,value))
        setlocal({...local,['Orden']:Order})
        
        

    }

    function handleOnClick(value){
 
        
        setlocal({...local,['lista']:todosMenues.filter(e=>{return e.grupo===value})})
    }
    function handleOnChange(e){
        //e.preventDefault(e)
        const{name,value}=e.target
        if(value!=='ver'&&value!=='enviar'){
            
            {console.log(value,'ya')}
            if(value>0){
            aux=[...aux.slice(0,value),...aux.slice(value+1)]
            setlocal({...local,['Orden']:aux}) 
            console.log(aux,'voy')   
        }else{
            
             
             setlocal({...local,['Orden']:
             local.Orden.filter(e=>{console.log(e.i );return e.i*1!==value*1})})}
             
            
            dispatch(takeorders(local.Orden))
          
             //dispatch(Limpiar())
        }
    }

   
   // console.log(props,'genereal')
    return(
        <div>
          
            
            <div>

                 <button onClick={()=>setlocal({['Orden']:[],['lista']:[]})}>limpiar</button>

                 <select name="selection" onChange={(e)=>handleOnChange(e)} value=''>
                    <option value='ver'>ver pedido</option>
                    {local.Orden.map((e,i)=>{
                       aux[i]=e
                       console.log(aux.length,'lr')
                       e.i=i;
                       return <option key={i}value={e.i}>{e.name} {e.i}-[X]</option>})}
                    <option value='enviar'>enviar pedido</option>
                 </select>
                {
               
                props.mostrar.length>0&&props.mostrar.map((e,i)=>{
                //console.log(e)
                return <button key={i} onClick={()=>handleOnClick(e)}>{e}</button>})}
                <div>
                {local.lista.length>0&&local.lista.map((e,i)=>{
                   
                    return <div key={i}><Link to='/detail' key={i+1}><li key={i+2}><button key={i+3}>{e.name} -valor :{e.price}</button></li></Link>
                            <button key={i+4} onClick={()=>{handleOrder(e)}}>ordenar</button>
                            </div>
                    })}  
                    
                </div>
             
            </div>
            <h4>{Order.map(e=>{return e.name})}</h4>
            {console.log(local.Orden)}
        </div>
    )  
}