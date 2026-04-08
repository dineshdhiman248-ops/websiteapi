import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Servicebox() {

  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const perPage = 6;

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://stage-fabricsinindia.vrozarttech.com/wp-json/wp/v2/product?_embed&per_page=${perPage}&page=${page}`)
      .then((res) => {

        if (res.data.length === 0) {
          setHasMore(false);
        } else {
          setProduct((prev) => {
            const newData = res.data.filter(
              (item) => !prev.some((p) => p.id === item.id)
            );
            return [...prev, ...newData];
          });
        }

      })
      .catch(() => setHasMore(false))
      .finally(() => setLoading(false));

  }, [page]);

  return (
    <div className="mx-auto px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading && product.length === 0 &&
          Array.from({ length: perPage }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-200 h-60 rounded-2xl"></div>
          ))
        }
        {product.map((pro) => {
          const image = pro._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          const cleanText = pro.content.rendered
            .replace(/<[^>]+>/g, "")
            .slice(0, 100);

          return (
            <div key={pro.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

              {image && (
                <img
                  src={image}
                  alt={pro.title.rendered}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="font-bold text-lg">
                  {pro.title.rendered}
                </h2>

                <p className="text-sm mt-2 text-gray-600">
                  {cleanText}...
                </p>

                <Link
                  to={`/service-detail/${pro.id}`}
                  className="inline-block mt-4 text-blue-500 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>

            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">

        {hasMore && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={loading}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}

        {!hasMore && (
          <p className="text-gray-500 mt-4">No more services</p>
        )}

      </div>

    </div>
  );
}

export default Servicebox;