import { useParams, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import useFetch from "../data/useFetch.js";

const EventDetails = () => {


  const { data, loading, error } = useFetch(`https://meet-up-backend-six.vercel.app/events`,[]);
  const { eventId } = useParams();

   const event = data?.find((event) => event._id === eventId);

  
    if (loading) {
      return (
      <div className="container mt-5">
      <h3>Loading...</h3>
      </div>
    );
  }

    if (error) {
      return (
      <div className="container mt-5">
      <h3>{error}</h3>
      </div>
    );
  }


  if (!event) {
    return (
      <>
        <Header search="" setSearch={() => {}}/>
        <div className="container mt-5">
          <h2>Event Not Found</h2>
          <Link to="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header search="" setSearch={() => {}} />
      <div className="container mt-4">
        <Link to="/" className="btn btn-secondary mb-3">
          ← Back
        </Link>
        <div className="row">
          {/* Left Section */}
          <div className="col-md-8">
            <h2>{event.title}</h2>
            <p>
              <strong>Hosted By:</strong> {event.hostedBy}
            </p>
            <img
              src={event.eventImage}
              alt={event.title}
              className="img-fluid rounded mb-3"
            />
            <h4>Details</h4>
            <p>{event.description}</p>
            <h4 className="mt-4">Additional Information</h4>
            <p>
              <strong>Dress Code:</strong> {event.dressCode}
            </p>
            <p>
              <strong>Age Restriction:</strong> {event.ageRestriction}
            </p>
            <h4 className="mt-4">Event Tags</h4>
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="badge bg-secondary me-2"
              >{tag}</span>))}
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <div className="card p-3">
              <p>
                <strong>Date:</strong>
                <br />
                {event.eventDate}
              </p>

              <p>
                <strong>Time:</strong>
                <br />
                {event.eventTime}
              </p>

              <p>
                <strong>Venue:</strong>
                <br />
                {event.venue}
              </p>

              <p>
                <strong>Address:</strong>
                <br />
                {event.address}
              </p>

              <p>
                <strong>Price:</strong> {event.price}
              </p>

            </div>

            <h4 className="mt-4">
              Speakers ({event.speakers.length})
            </h4>

            {event.speakers.map((speaker, index) => (
              <div className="card mt-3 p-3 text-center" key={index}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="rounded-circle mx-auto"
                  width="80"
                  height="80"
                />
                <h5 className="mt-3">{speaker.name}</h5>
                <p>{speaker.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;