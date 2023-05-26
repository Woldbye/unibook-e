import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingRoom from "../pages/BookingRoom";
import BookingTime from "../pages/BookingTime";
import BookingConfirmation from "../pages/BookingConfirmation";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Rooms from "../pages/Rooms";
import TopBar from "./TopBar";
import Background from "./Background";

const UnibookRouter = () => {
  // The booking routes might change as we need to transfer meta-data about the booking to the server
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar boxWidth='100vw'/>}>
          <Route index element={<Background children={<Home />} />}/>
          <Route path="rooms" element={<BookingRoom />}/> //page of all rooms with "book" buttons
          <Route path="rooms/:query?/" element={<Rooms />} /> //page of rooms matching the query
          <Route path="book/confirm/:query?/" element={<BookingConfirmation/>}/>
          <Route path="book/date/:query?/" element={<BookingTime/>}/> //page for selecting date and time
          <Route path="book/:query?/" element={<Booking />} />//page for maanaging filter
          <Route path="*" element={<NoPage />}/> //fallback page
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default UnibookRouter;