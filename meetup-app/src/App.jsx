import { useState } from "react";
import Header from "./components/Header.jsx";
import EventCard from "./components/EventCard.jsx";
import useFetch from "./data/useFetch.js";

const App = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("eventType");

  const { data, loading, error } = useFetch( "http://localhost:3000/events",[]);

  const filteredEvents = data?.filter((event) => {
    if (type !== "eventType" && event.eventType.toLowerCase() !== type.toLowerCase()) {
      return false;
    }

    if (event.title.toLowerCase().includes(search.toLowerCase()) ||
     event.tags.join(" ").toLowerCase().includes(search.toLowerCase())) {
      return true;
    }

    return false;
  });

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className="container mt-4">
        <div className="d-flex justify-content-between mb-4">
          <h2>Meetup Events</h2>
          <select
            className="form-select w-25"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="eventType">Select Event Type</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div className="row">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;