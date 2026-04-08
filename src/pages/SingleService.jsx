import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleService() {


  const { id } = useParams(); 
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://stage-fabricsinindia.vrozarttech.com/wp-json/wp/v2/product/${id}?_embed`)
      .then((res) => setData(res.data));
  }, [id]);

  if (!data) return <p className="p-6">Loading...</p>;

  const image = data._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (

    
    <div className="pl-6 pr-6 mt-10 mb-10 max-w-full mx-auto">

      {image && (
        <img
          src={image}
          alt={data.title.rendered}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">
        {data.title.rendered}
      </h1>

      {/* Full HTML content */}
      <div
        dangerouslySetInnerHTML={{
          __html: data.content.rendered,
        }}
      ></div>

    </div>
  );
}

export default SingleService;