
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import  Cards  from "./Cards";
import { useState } from "react";
import Carnes from "./Table";
import Pescados from "./Pescados";
import Pastas from "./Detail";
import { Link } from "react-router-dom";
import { getMenues } from "../redux/actions";
import General from "./General";



export default function Home(){
    let aux=[]
    const[start,setstart]=useState({   
        carnes:false,
        pescados:false,
        pastas:false,
        valida:false,
        todos:[],
    })
    
    const dispatch=useDispatch()
    const AllMenues=useSelector(state=>state.Menues)
    const ID_Mesa=useSelector(state=>state.Id_mesa)
    useEffect(()=>{
        dispatch(getMenues())
        entrar()
    },[])
   console.log("esta es: ",ID_Mesa)

    function findgroups(array){
        aux=array.map((e)=>{return e.grupo})
        let naux=new Set(aux)
        aux=Array.from(naux)
       // console.log(aux)
        
        return aux 

    }
    if(AllMenues.length>0&&!start.valida){
   
    setstart({...start,['valida']:true,['todos']: findgroups(AllMenues)})
    }

    async function entrar(){
        
        try {
            const response = await fetch(`http://localhost:5001/login/open/${ID_Mesa}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                 
            });
            const parseRes = await response.json();
            console.log(parseRes)
               
                

        } catch (err) {
            console.error(err.message)
        }
    }
    
    return(

        <div>
           <h1>menu</h1>
          

           <div>
          
            {start.todos.length&&<General mostrar={start.todos}/>}
           </div>
        </div>
    )
}