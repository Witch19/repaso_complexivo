import { useEffect, useState } from "react";
import { getReservations, createReservation } from "../api/reservations.api";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadReservations = () => {
    setLoading(true);
    getReservations()
      .then((data) => setReservations(data.results || data))
      .catch(() => setError("Error cargando reservas"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadReservations();
  }, []);

  // Crear reserva desde la interfaz
  const handleCreate = async () => {
    try {
      await createReservation({
        show: 1, 
        customer_name: "Cliente Web",
        seats: 2,
        status: "RESERVED",
      });

      // recargar lista automáticamente
      loadReservations();
    } catch (err) {
      alert("Error creando reserva");
    }
  };

  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Reservas</h2>

      <button onClick={handleCreate}>Crear reserva</button>

      {reservations.map((r) => (
        <div key={r.id}>
          Cliente: {r.customer_name} | Seats: {r.seats} | Estado: {r.status}
        </div>
      ))}
    </div>
  );
}
