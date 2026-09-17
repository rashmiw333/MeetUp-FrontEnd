# MeetUp Application

A full-stack event discovery application built to help users browse,
search, and filter Meetup events and view detailed information about
each event.

------------------------------------------------------------------------

## Quick Start

### Frontend

``` bash
git clone https://github.com/rashmiw333/MeetUp-FrontEnd
cd MeetUp-FrontEnd
npm install
npm run dev
```

### Backend

``` bash
git clone https://github.com/rashmiw333/MeetUp-Backend
cd MeetUp-Backend
npm install
node index.js
```
------------------------------------------------------------------------

## Technologies

-   React JS
-   React Router
-   JavaScript
-   HTML
-   CSS
-   Bootstrap
-   React Hooks
-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   Vercel

------------------------------------------------------------------------

## Features

### Event Listing

-   Display a list of available Meetup events.
-   Display event image, event type, date, and event title.
-   Provide a **View Details** option for each event.
-   Fetch event data from the backend REST API.

### Search

-   Search events by title.
-   Search events using event tags.
-   Display matching events based on the search input.

### Event Type Filter

-   Filter events based on event type.
-   Support **Online** events.
-   Support **Offline** events.
-   Support viewing **Both** types.

### Event Details

-   View complete information about a selected event.
-   Display event title and host information.
-   Display event image and description.
-   Display date and time.
-   Display venue and address.
-   Display event price.
-   Display dress code.
-   Display age restriction.
-   Display event tags.
-   Display speaker information.

### Navigation

-   Use React Router for navigation between the event listing and event
    details pages.
-   Navigate to an individual event using its event ID.

### Loading & Error Handling

-   Display a loading state while event data is being fetched.
-   Handle API errors and unsuccessful requests.
-   Display appropriate information when events cannot be found.

------------------------------------------------------------------------

## Event Discovery Flow

``` text
Home / Event Listing
        ↓
Search / Filter Events
        ↓
Select Event
        ↓
View Details
        ↓
Event Information
```

------------------------------------------------------------------------

## API Reference

The backend provides REST APIs for creating and retrieving Meetup
events.

### Events

#### POST `/events`

Create a new event.

The event information is sent in the request body.

Example request structure:

``` json
{
  "title": "React Meetup",
  "description": "A meetup for React developers.",
  "eventType": "Online"
}
```

#### GET `/events`

Get all events.

Example response structure:

``` json
[
  {
    "_id": "EVENT_ID",
    "title": "React Meetup",
    "description": "A meetup for React developers."
  }
]
```

If no events are available, the API returns:

``` json
{
  "error": "Event Not Found."
}
```

#### GET `/events/:eventId`

Get details of a single event by its ID.

Example response structure:

``` json
{
  "_id": "EVENT_ID",
  "title": "React Meetup",
  "description": "A meetup for React developers."
}
```

If the event does not exist, the API returns:

``` json
{
  "error": "Event Not Found"
}
```

------------------------------------------------------------------------

## Backend Structure

The backend uses an Event Mongoose model for storing Meetup event
information:

``` text
models/
└── event.models.js
```

The Express server provides REST APIs for:

-   Creating events
-   Fetching all events
-   Fetching an event by ID

MongoDB is used for persistent event data, with Mongoose used for
database operations.

------------------------------------------------------------------------

## Frontend Highlights

The React frontend uses:

-   React Router for page navigation.
-   React Hooks for managing component state.
-   A custom `useFetch` hook for API data fetching.
-   Bootstrap for responsive UI components and layout.
-   Search and filtering to help users find relevant events.
-   Dynamic event detail pages based on the event ID.
-   Loading and error states for better user experience.

------------------------------------------------------------------------

## Repository and Deployment Links

### Frontend

GitHub Repository:

https://github.com/rashmiw333/MeetUp-FrontEnd

Vercel Deployment:

https://meetup-frontend-ten.vercel.app/

### Backend

GitHub Repository:

https://github.com/rashmiw333/MeetUp-Backend

Vercel Deployment:

https://meet-up-backend-six.vercel.app/

------------------------------------------------------------------------

## Contact

For bugs or feature requests, please reach out to:

**rashmiwankhade99@gmail.com**
