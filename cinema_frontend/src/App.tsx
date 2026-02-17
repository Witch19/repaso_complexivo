import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

import ShowsPage from "./pages/ShowsPage";
import ReservationsPage from "./pages/ReservationsPage";

export default function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cinema UI
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button color="inherit" component={Link} to="/shows">Shows</Button>
            <Button color="inherit" component={Link} to="/reservations">Reservas</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
