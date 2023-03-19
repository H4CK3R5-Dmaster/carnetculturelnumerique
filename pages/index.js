import ContainerBlock from "../components/ContainerBlock";
import Present from "../components/Presentpage";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  
  const [dataperso, setDataperso] = useState([""]);
  const [datatadao, setDatatadao] = useState([""]);
  useEffect(() => {
    axios.get("/api/apiInfo").then((response) => {
      if (response.data.perso) {
        setDataperso(response.data.perso[0])
      } else {
        if (response.data.infos) {
          setDatatadao(response.data.infos[0])
        }
      }
      
    })
    
    console.log(dataperso)
    console.log(datatadao)
    
  },[])
  
  return (
    <ContainerBlock>
      <Present />
      <div className="grid grid-cols-2 gap-1 mb-3 max-sm:grid-cols-1 min-[320px]:ml-5 mb-20 mx-auto">
        <div className="lg:block relative w-full md:w-1/2 mt-40 mx-auto">
          <div className="mx-auto">
            <img
              src={"/tadao.jpg"}
              alt="avatar"
              className=" shadow justify-center "
            />
          </div>
        </div>
        <div className="justify-between mt-40 ">
          <div className="space-x-4 text-stone-50">
            <h1 className="font-mono text-lg mt-20">{datatadao.question}</h1>
            <p className="font-mono text-lg mt-5 mr-10">{datatadao.responser}</p>
            
          </div>
        </div>
      </div>
      <div className="mt-20 ml-5 text-stone-50 mb-10">
        <h1 className="font-mono text-lg">Pourquoi avoir choisi cette expérience culturel ?</h1>
        <h1 className="font-mono text-lg mt-5">{dataperso.question}</h1>
      </div>
      <div className="mt-20 ml-5 text-stone-50 mb-10">
        <h1 className="font-mono text-lg">Mon avis sur cette expérience</h1>
        <h1 className="font-mono text-lg mt-5">{dataperso.avis}</h1>
      </div>
    </ContainerBlock>
  );
}
