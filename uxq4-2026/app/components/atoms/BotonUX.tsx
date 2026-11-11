
interface BotonUxParams {
    texto:string;
    tipo:number;
}



// function BotonUX(params:BotonUxParams){
//     return (
//         <button>
//             {params.texto}
//         </button>

//     );
// }


function BotonUX({texto}:BotonUxParams){
    return (
        <button>
            {texto}
        </button>

    );
}

export default BotonUX;