'use client'
import { useEffect, useState } from "react";
import BotonUX from "../atoms/BotonUX";

function ListaBotones() {
    const [contrasena, setContrasena] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [botones, setBotones] = useState<string[]>(["Limpiar","Borrar","Revisar","Evaluar","Adios","Home alone","Armagedon","iron man", "el cojuro"]);

    /*
        1 primer render 
        2 en todos los reders
        3 determinar renders en base a un state 

    */
        // primer render 
        useEffect(
            ()=>{
                setLoading(true);
                // fetch a la BD... 
                //cargo la info 
                //set lista
                console.log("PRIMER RENDER ONLY!");
                setLoading(false);
            },[]);

    function revisarValor() {
        if (contrasena.length < 7) {
            return <p className="text-red-500">Contraseña es muy corta :( </p>;
        } else {
            return <p className="text-green-200">Contraseña segura :D </p>;
        }

    }

    

    

    function actualizarEstado(e) {
        console.log(e);
        console.log(e.target.value);
        setContrasena(e.target.value);
    }


    // (tipo de dato de los params) => retorno

    const limpiar = ()=>{
        setContrasena("");
    }

    //()=>void 

    function imprimir(){
        console.log(contrasena);
    }

    //()=>void


        
    return (

        <div>

            {/* {BotonUX({texto:"primer atomo", tipo:123})} */}
            <input type="text" className="m-8 bg-white text-black p-6 rounded-xl" value={contrasena} onChange={
                (e) => { actualizarEstado(e) }
            } />
            {/* if (contrasena.length>0) {revisarValor(5)} */}
            {contrasena && revisarValor()}
{loading ? <p>loading</p> : <p>loaded</p>}
            {/* {contrasena.length > 0 ? <p>True</p> : <p>false</p>} */}
  {
                        botones.map((valor)=>{
                            return <BotonUX key={valor} texto={valor} tipo={1}  accion={()=>{
                                setBotones([...botones,contrasena])
                            }}/>

                        })
                    }
            {contrasena && (
                <div>

                    {/* <BotonUX texto="limpiar" tipo={1} estilo="text-red-500 bg-blue-300" accion={limpiar} />

                    <BotonUX texto="analizar" tipo={1} estilo="text-blue-200 bg-white" accion={
                        // func anonima 
                        ()=>{
                        if(contrasena.indexOf("@")==-1){
                                console.log("No es seguroo");
                        }
                    }
                    } />

                    <BotonUX texto="imprimir" tipo={1}  accion={imprimir}/> */}
                    {/* {
                        botones.map((valor)=>{
                            return <BotonUX key={valor} texto={valor} tipo={1}  accion={imprimir}/>

                        })
                    } */}
                    
                </div>
            )
            }



        </div>
    );
}



export default ListaBotones;