import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";

function ArtistHome() {
  const params = useParams();
  const { id } = params;
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await axiosInstance.get(`/artist/artistHome/${id}`);
        setArtist(response.data.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
        setError("Failed to fetch artist data.");
      }
    };
    fetchArtistData();
  }, [id]);

  return (
    <div className="text-white pt-6 h-screen flex flex-col items-center">
      <h3 className="gradient-text font-bold flex gap-2 items-end font-collageFont">
        <span className="text-2xl">Welcome..</span>
        <span className="text-3xl">{artist.name}</span>
      </h3>
    </div>
  );
}

export default ArtistHome;
