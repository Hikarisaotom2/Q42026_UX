'use client'
import { useState } from "react";
import BotonUX from "../atoms/BotonUX";

function ListaBotones() {
    const [contrasena, setContrasena] = useState<string>("");


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

    const limpiar = ()=>{
        setContrasena("");
    }

    function imprimir(){
        console.log(contrasena);
    }


    return (

        <div>

            {/* {BotonUX({texto:"primer atomo", tipo:123})} */}
            <input type="text" className="m-8 bg-white text-black p-6 rounded-xl" value={contrasena} onChange={
                (e) => { actualizarEstado(e) }
            } />
            {/* if (contrasena.length>0) {revisarValor(5)} */}
            {contrasena && revisarValor()}

            {/* {contrasena.length > 0 ? <p>True</p> : <p>false</p>} */}

            {contrasena && (
                <div>
                    <BotonUX texto="limpiar" tipo={1} estilo="text-red-500 bg-blue-300" accion={limpiar} />

                    <BotonUX texto="analizar" tipo={1} estilo="text-blue-200 bg-white" accion={
                        ()=>{
                        if(contrasena.indexOf("@")==-1){
                                console.log("No es seguroo");
                        }
                    }
                    } />

                    <BotonUX texto="imprimir" tipo={1}  accion={imprimir}/>
                </div>
            )
            }



        </div>
    );
}



export default ListaBotones;