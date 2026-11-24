'use client'
import ListaBotones from "./components/molecules/ListaBotones";
import { useEffect } from "react";


export default function Home() {
  
      useEffect(
              ()=>{
                  console.log("primer render page");
              },[]
          );

  return (
  <div>
    <ListaBotones/>
  </div>
  );
}


