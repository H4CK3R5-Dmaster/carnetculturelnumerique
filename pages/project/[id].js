import ContainerBlock from "../../components/ContainerBlock";
import Present from "../../components/Presentpage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GetProject() {

    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState([""])
    
    useEffect(() => {
        if(id) {
            axios.get("/api/hello").then((response) => {
                response.data.oeuvres.map((element) => {
                    if(element.id == id) {
                        setData(element)
                        
                    }
                })
            })
        } 
    }, [id]);
  return (
    <ContainerBlock>
      <Present />
      
      <div className="justify-center  font-mono  lg:text-6xl  font-bold text-gray-500  md:my-0 md:text-white dark:text-gray-600 text-center mt-20 items-center content-center">
        {data ? (
            <>
                
                    <h1 className=" font-mono  lg:text-8xl  font-bold text-gray-500  md:my-0 md:text-white dark:text-gray-600 text-center mt-20 w-full">
                        {data.name}
                    </h1>
                    <div className="justify-center content-center">
                        <img src={`${data.image}`} alt="" className="mt-20 mb-20 justify-center mx-auto "/>
                        <h2 className="mb-20">Observation :</h2>
                        <p className="lg:text-2xl mt-20 ml-20 mr-20 mb-20">{data.observer}</p>
                        <h2 className="mb-20">Interpretation :</h2>
                        <p className="lg:text-2xl mt-20 ml-20 mr-20 mb-20">{data.interpreter}</p>
                        <h2 className="mb-20">Ressenti :</h2>
                        <p className="lg:text-2xl mt-20 ml-20 mr-20 mb-20">{data.ressenti}</p>
                    </div>
                
            </>
        ) : (
            <></>
        )}
      </div>
    </ContainerBlock>
  );
}


