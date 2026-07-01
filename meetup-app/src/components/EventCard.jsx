import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="col-md-4 mb-4">

      <div className="card h-100 d-flex flex-column">

        <img
          src={event.eventImage}
          className="card-img-top"
          alt={event.title}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column justify-content-between">

          <span className="badge bg-light text-dark">
            {event.eventType} Event
          </span>

          <p className="text-danger mt-2">
            {event.eventDate}
          </p>

          <h4 className="mt-1">{event.title}</h4>

        <div>
           <Link to={`/events/${event._id}`} className="btn btn-primary">View Details</Link>
        </div>

        </div>

      </div>

    </div>
  );
};

export default EventCard;