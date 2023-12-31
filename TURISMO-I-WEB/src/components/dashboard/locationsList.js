import { useState, useEffect } from "react";
import Image from "next/image";
import PocketBaseService from "@/services/pocketbaseService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../loader";

export default function LocationsList({ user, setCurrentContent, categories, setCurrentLocation }) {
  const [locations, setLocations] = useState([]);
  const [filter, setFilter] = useState({ category: "", name: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let locations = await PocketBaseService.getAll("location");

      locations = locations.filter(
        (location) =>
          location.status === "active" && location.user_id === user.userData.id
      );

      locations = locations.map((location) => {
        return {
          ...location,
          categoryName: categories.find(
            (category) => category.id === location.category_id[0]
          ).name,
        };
      });
      setLoading(false);
      setLocations(locations);
    })();
  }, []);

  const filteredLocations = locations.filter(
    (location) =>
      location.categoryName.includes(filter.category) &&
      location.name.toLowerCase().trim().includes(filter.name.toLowerCase().trim())
  );

  const handleDelete = async (id) => {
    setLoading(true);
    // your delete logic here
    const confirm = window.confirm("¿Estás seguro de eliminar este punto?");
    if (confirm) {
      await PocketBaseService.updateItem("location", id, { status: "deleted" });
      setLocations(locations.filter((location) => location.id !== id));
      // your delete logic here
    }
    setLoading(false);
  };

  const handleViewDetails = (id) => {
    let location = locations.find((location) => location.id === id);
    setCurrentLocation(location)
    setCurrentContent(2)
    console.log(location)
  };
  const uniqueCategories = new Set(
    locations.map((location) => location.categoryName)
  );
  return (
    <div className="locations-list h-screen ">
      {
        loading ? (
          <Loader/>
        ): (
          <>
          <div class="row">
            <div class="col ">
              <input
                className="searcher"
                placeholder="Filtrar por nombre"
                value={filter.name}
                onChange={(e) => setFilter({ ...filter, name: e.target.value })}
              />
            </div>
            <div class="col">
              { <select
              className="mx-1 p-4  bg-input-bg-color text-main-text-color rounded  searcher"

              value={filter.category}
              onChange={(e) =>
                setFilter({ ...filter, category: e.target.value })
              }>
              <option value="" disabled>
                Filtrar por categoria
              </option>
              <option value="">Todas</option>
              {[...uniqueCategories].map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>}
            </div>
            
          </div>

          <div class="row">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
            {filteredLocations.map((location) => {
              const photo =
                location.photos.find((photo) =>
                  [".jpeg", ".jpg", ".png"].some((ext) =>
                    photo.toLowerCase().endsWith(ext)
                  )
                ) || "";

              return (
                <div
                  key={location.id}
                  className="card shadow-lg bg-secondary-bg-color rounded-lg p-4"
                >
                  {photo && (
                    <Image
                      className="rounded"
                      src={`https://magnificent-painter.pockethost.io/api/files/somsequ5ehmdtsh/${location.id}/${photo}`}
                      alt={location.name}
                      width={200}
                      height={200}
                    />
                  )}
                  <h2 className=" text-main-text-color font-bold text-lg">{location.name}</h2>
                  <p className="text-white  h-10">{location.address}</p>
                  <h3 className="text-black font-bold h-10">{location.categoryName}</h3>
                  <button
                    className="mt-2 rounded px-2 py-1 hover:bg-secondary-text-color hover:text-main-bg-color transition duration-200" 
                    onClick={() => handleViewDetails(location.id)} >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    Ver detalles
                  </button>
                  <button
                    className="mt-2  rounded px-2 py-1 hover:bg-secondary-text-color hover:text-main-bg-color transition duration-200"
                    onClick={() => handleDelete(location.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" /> Eliminar
                  </button>
                </div>
              );
            })}
          </div>
          </div>
          
          </>
        )
      }
    </div>
  );
}