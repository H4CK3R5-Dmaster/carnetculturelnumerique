import axios from "axios";
import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import Present from "../components/Presentpage";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image  from "next/image"

export default function Projects() {
  const [data, setData] = useState([""]);
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      setData(response.data.oeuvres);
    });
  }, []);

  return (
    <ContainerBlock>
      <Present />
        <h1 className="sm:ml-20 font-mono text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-40 md:my-0 md:text-white dark:text-gray-600 text-center mt-20">
            Projets
        </h1>
      <div className="grid grid-cols-3 gap-4 mt-10 ml-7 mb-3 bg-classique sm:ml-12  max-sm:grid-cols-1 min-[320px]:mr-10">
      
            {data.map((resultat, index) => (
              <div key={index} className="ml-7 mt-4 sm:ml-12 ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                  <img
                    className="w-full h-64"
                    src={`${resultat.image}`}
                    alt="Sunset in the mountains"
                  />
                  
                  <div className="px-6 py-4">
                    
                      <div className="font-bold text-xl mb-2 text-black underline decoration-indigo-500">
                        {resultat.name}
                      </div>
                    

                    <p className="text-gray-700 text-base">
                      Visibility : {resultat.visibility}
                      <br />
                    </p>
                    <p className="text-gray-700 text-sm">
                      Link: {resultat.html_url}
                    </p>
                    
                       
                  </div>
                  <div className="px-6 pt pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #programming
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </ContainerBlock>
  );
}
