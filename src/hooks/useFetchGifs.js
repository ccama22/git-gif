import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// un hook es una funcion que regresa algo
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  // // solo se va ejecutar la primera ves que se crea o construye este componente
  useEffect(() => {
    getImages();
    // getGifs(category).then((newImages) => setImages(newImages));
  }, []);
  return {
    images,
    isLoading: isLoading,
  };
};
