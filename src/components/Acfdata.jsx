import { useEffect, useState } from "react";
import axios from "axios";


function Fabrics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://stage-fabricsinindia.vrozarttech.com/wp-json/wp/v2/fabrics?_embed")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => {
        const image = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
       
        return (
          <div key={item.id} className="mb-10 border p-5 rounded-lg">

           

            <h2 className="text-2xl font-bold">
              {item.title.rendered}
            </h2>

            {image && (
              <img
                src={image}
                className="w-full h-60 object-cover mt-4"
              />
            )}
            <p className="mt-4 text-gray-600">
           {item.acf?.description}
            </p>

            <h3 className="mt-6 font-semibold text-lg">
              {item.acf?.feature_title}
            </h3>

  
            <ul className="list-disc pl-5 mt-2">
              {item.acf?.feature_list?.map((item) => (
                <li key={item.feature}>{item.feature}</li>
              ))}
            </ul>

            <h3 className="mt-6 font-semibold text-lg">
              {item.acf?.uses_title}
            </h3>

  
            <ul className="list-disc pl-5 mt-2">
              {item.acf?.uses_list?.map((item) => (
              <li key={item.uses}>{item.uses}</li>
              ))}
            </ul>
 
          </div>
        );
      })}
       </div>

    </div>
  );
}

export default Fabrics;