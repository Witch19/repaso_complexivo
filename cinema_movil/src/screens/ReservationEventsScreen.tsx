import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { getReservationEvents } from "../api/mongo.api";

export default function ReservationEventsScreen() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getReservationEvents()
      .then((data) => setEvents(data))
      .catch(() => setError("Error cargando eventos"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item._id?.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>ID Reserva: {item.reservation_id}</Text>
          <Text>Evento: {item.event_type}</Text>
          <Text>Origen: {item.source}</Text>
          <Text>Nota: {item.note}</Text>
        </View>
      )}
    />
  );
}
