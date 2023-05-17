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
const { fromUrl} = require('../shared/roomquery.js');
const UnibookRouter = () => {
  // The booking routes might change as we need to transfer meta-data about the booking to the server
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar boxWidth='100vw'/>}>
          <Route index element={<Background children={<Home />} />}/>
          <Route path="rooms" element={<Background children={<Rooms />} />}/>
          <Route path="rooms/:query?/" element={<Rooms />} />
          
          <Route path="book" element={<Background children={<Booking />} />} />
          <Route path="book/date/rooms" element={<Background children={<BookingRoom />}/>}/>
          <Route path="book/date/rooms/confirm" element={<Background children={<BookingConfirmation/>}/>}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default UnibookRouter;