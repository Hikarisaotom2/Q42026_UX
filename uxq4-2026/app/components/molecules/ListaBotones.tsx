import BotonUX from "../atoms/BotonUX";

function ListaBotones(){

    function revisarValor(numero:number){
        if(numero>7){
            return "contraseña muy corta";
        }else{
            return "Contraseña correcta";
        }

    }

 return(
    
       <div>
        <p>{revisarValor(9)}</p>
        {BotonUX({texto:"primer atomo", tipo:123})}
  
       <BotonUX texto="Like" tipo={1}/>
       <br></br>
       <BotonUX texto="estudien" tipo={1}/>
       <br></br>
       <BotonUX texto="ux" tipo={1}/>
       <br></br>
       <BotonUX texto="!Like" tipo={1}/>
       <BotonUX texto="67" tipo={1}/>
       <BotonUX texto="ejemplo2" tipo={1}/>
    </div>
 );
}



export default ListaBotones;