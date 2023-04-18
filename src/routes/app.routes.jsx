import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewMovie } from "../pages/NewMovie";
import { User } from "../pages/User";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/details/:id'
        element={<Details />}
      />
      <Route
        path='/new'
        element={<NewMovie />}
      />
      <Route
        path='/profile'
        element={<User />}
      />
    </Routes>
  );
}
