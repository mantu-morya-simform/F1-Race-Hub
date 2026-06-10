# 🏎️ F1 Race Hub

A mid-level React + TypeScript project demonstrating **Redux Toolkit**, **Redux Thunk**, async state management, API integration, filtering, sorting, routing, and scalable folder architecture using the F1 API.

## Overview

F1 Race Hub is a Formula 1 dashboard application where users can explore:

- Drivers
- Circuits
- Standings
- Race schedules

The project is built to demonstrate **Redux Toolkit best practices**, including:

- `createSlice`
- `createAsyncThunk`
- Global state management
- Async API handling
- Error handling
- Loading states
- Filtering & sorting
- Route-based pages
- Reusable selectors
- Scalable architecture

---

## Features

### Dashboard

- Overview statistics
- Quick navigation cards
- Formula 1 summary

### Drivers

- Fetch all drivers
- Search drivers
- Sort alphabetically
- Driver details page

### Circuits

- View all F1 circuits
- Search circuits
- Filter by country
- Circuit details

### Standings

- Driver standings
- Constructor standings

### Race Schedule

- Upcoming races
- Season-based race listing

### UI Features

- Responsive design
- Loading skeletons
- Error handling
- Empty states
- Clean reusable components

---

## Tech Stack

### Frontend

- React
- TypeScript
- Redux Toolkit
- Redux Thunk
- React Router DOM
- CSS / Tailwind / Chakra UI _(choose your UI library)_

### API

F1 API

API Documentation:

https://f1api.dev/docs

---

## Project Structure

```txt
src/
│── app/
│   └── store.ts
│
│── features/
│   │
│   ├── drivers/
│   │   ├── driverSlice.ts
│   │   ├── driverThunk.ts
│   │   ├── driverTypes.ts
│   │   └── selectors.ts
│   │
│   ├── circuits/
│   │   ├── circuitSlice.ts
│   │   ├── circuitThunk.ts
│   │   └── circuitTypes.ts
│   │
│   ├── standings/
│   │   ├── standingSlice.ts
│   │   └── standingThunk.ts
│   │
│   └── races/
│       ├── raceSlice.ts
│       └── raceThunk.ts
│
│── components/
│   ├── Navbar/
│   ├── Card/
│   ├── Loader/
│   ├── SearchBar/
│   └── EmptyState/
│
│── pages/
│   ├── Dashboard.tsx
│   ├── Drivers.tsx
│   ├── DriverDetails.tsx
│   ├── Circuits.tsx
│   ├── Standings.tsx
│   └── RaceSchedule.tsx
│
│── hooks/
│   ├── useAppDispatch.ts
│   └── useAppSelector.ts
│
│── routes/
│   └── AppRoutes.tsx
│
│── types/
│
│── App.tsx
│── main.tsx
```

---

## Application Flow

### 1. Store Configuration

All reducers are combined inside Redux store.

```ts
configureStore({
  reducer: {
    drivers,
    circuits,
    standings,
    races,
  },
});
```

---

### 2. API Fetching using Thunk

Each feature uses `createAsyncThunk` for API calls.

Example:

```ts
export const fetchDrivers = createAsyncThunk(
  "drivers/fetchDrivers",
  async () => {
    const response = await fetch("https://f1api.dev/api/drivers");

    if (!response.ok) {
      throw new Error("Failed to fetch drivers");
    }

    return response.json();
  },
);
```

---

### 3. State Management

Redux handles:

- Loading state
- API success
- API failure
- Data caching

Example state structure:

```ts
{
  data: [],
  loading: false,
  error: null
}
```

---

### 4. Component Flow

```txt
Page
 ↓
Dispatch thunk
 ↓
Redux Store
 ↓
API request
 ↓
Store updated
 ↓
UI re-render
```

---

### 5. Routing Flow

```txt
/
├── Dashboard
├── /drivers
├── /drivers/:id
├── /circuits
├── /standings
└── /races
```

---

## Redux Toolkit Concepts Covered

This project demonstrates:

### createSlice

Used to create reducers and actions.

### createAsyncThunk

Used for async API fetching.

### configureStore

Centralized global state management.

### Typed Hooks

Custom Redux hooks:

```ts
useAppDispatch();
useAppSelector();
```

### Extra Reducers

Used for handling async states.

```ts
builder
  .addCase(fetchDrivers.pending)
  .addCase(fetchDrivers.fulfilled)
  .addCase(fetchDrivers.rejected);
```

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into project folder:

```bash
cd f1-race-hub
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Environment Setup

No environment variables required.

The application uses:

```txt
https://f1api.dev/api
```

---

## Future Improvements

Planned improvements:

- Favorites system
- Dark mode
- Pagination
- Charts & analytics
- Compare drivers
- Race prediction UI
- Persisted Redux state

---

## Learning Goals

This project was built to practice:

- Redux Toolkit architecture
- Async thunk handling
- TypeScript with Redux
- API state management
- Clean scalable project structure
- Reusable React components

---

## Screenshots

Add screenshots here after completing UI.

```txt
screenshots/
```

---

## Author

Your Name

GitHub:
https://github.com/your-username
