
interface BotonUxParams {
    texto:string;
    tipo:number;
    estilo?:string | undefined;
    accion: ()=>void;
   
}


// function BotonUX(params:BotonUxParams){
//     return (
//         <button>
//             {params.texto}
//         </button>

//     );
// }


function BotonUX({texto, estilo="bg-white text-black", accion}:BotonUxParams){
    return (
        <button className={`m-8 p-6 rounded-xl ${estilo}`} onClick={accion} >
            {texto}
        </button>

    );
}

export default BotonUX;