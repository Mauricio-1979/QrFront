import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { table, idMesa } from "../redux/actions"
import { Link,Navigate } from "react-router-dom"

export default function Table({connect}){
    //const[local,setlocal]=useState("")
    const dispatch=useDispatch()
    const[name,setName]=useState("") // name es la mesa que paso x link
    const[saludos,setSaludos]=useState("")
        
    function click (){
        
        var URLsearch = window.location.search;
        //setlocal(URLsearch)
        console.log(URLsearch)
        const params = new URLSearchParams(URLsearch)
        setName(params.get('Id_mesa'))
        console.log(params.get('Id_mesa'))
    }
    //let id=`/${local*1}`
    useEffect(() => {
        click()
    },[])

    async function entrar(e){
        e.preventDefault()
        try {
           
            const response = await fetch('http://localhost:5001/login', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "name":name
                }) 
            });
            const parseRes = await response.json();
            console.log(parseRes)
            if(parseRes === true){
                connect(true)
                dispatch(idMesa(name))
            } else {
                connect(false)
                
            }    
                

        } catch (err) {
            console.error(err.message)
        }
    }



    function saludo(){
        setSaludos("Hola")
    }

    return(
        <div>
            <h2>Welcome! {name}</h2><br/><br/>
            <button onClick={entrar}>Enter</button> 
            <button onClick={saludo}>Saludo</button>
            
        </div>
    )

    // return(
    //     <div>
    //         <h4>Table</h4>
    //         <button onClick={()=>setlocal(local+1)}>+</button>
    //         <button onClick={()=>setlocal(local-1)}>-</button>
    //         <h4>{local}</h4>
    //         <Link to={id}><button onClick={()=>{dispatch(table(local))}}>seleccionar</button></Link>
    //     </div>
    // )
}