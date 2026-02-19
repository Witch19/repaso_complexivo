import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { getMovieCatalog } from "../api/mongo.api";

export default function MovieCatalogScreen() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovieCatalog()
      .then((data) => setMovies(data))
      .catch(() => setError("Error cargando cartelera"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item._id?.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.movie_title}</Text>
          <Text>{item.genre} - {item.rating}</Text>
          <Text>{item.duration_min} min</Text>
        </View>
      )}
    />
  );
}
