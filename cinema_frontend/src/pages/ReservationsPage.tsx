import { useEffect, useState } from "react";
import { getShows } from "../api/shows.api";

export default function ShowsPage() {
  const [shows, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getShows()
      .then((data) => setReservations(data.results || data))
      .catch(() => setError("Error cargando funciones"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando shows...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Funciones</h2>
      {shows.map((s) => (
        <div key={s.id}>
          <b>{s.title}</b> - {s.room} - ${s.price}
        </div>
      ))}
    </div>
  );
}
