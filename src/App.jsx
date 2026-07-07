import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import ReservationConfirmation from "./pages/ReservationConfirmation/ReservationConfirmation";
import ReservationForm from "./pages/ReservationForm/ReservationForm";
import ReservationSummary from "./pages/ReservationSummary/ReservationSummary";
import Reservations from "./pages/Reservations/Reservations";
import TableSelection from "./pages/TableSelection/TableSelection";

function App() {
  const getPageFromHash = () => {
    if (window.location.hash === "#/reservar") {
      return "reservar";
    }

    if (window.location.hash === "#/mesa") {
      return "mesa";
    }

    if (window.location.hash === "#/resumen") {
      return "resumen";
    }

    if (window.location.hash === "#/confirmacion") {
      return "confirmacion";
    }

    return window.location.hash === "#/reservas" ? "reservas" : "home";
  };

  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (page === "reservas") {
    return <Reservations />;
  }

  if (page === "reservar") {
    return <ReservationForm />;
  }

  if (page === "mesa") {
    return <TableSelection />;
  }

  if (page === "resumen") {
    return <ReservationSummary />;
  }

  if (page === "confirmacion") {
    return <ReservationConfirmation />;
  }

  return <Home />;
}

export default App;
