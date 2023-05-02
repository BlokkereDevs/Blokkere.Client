import RootLayout from "./layouts/RootLayout";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import CreateBounties from "./pages/CreateBounties";
import Bounties from "./pages/Bounties";
import Statistics from "./pages/Statistics";
import YourProfile from "./pages/YourProfile";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Dummy from "./pages/Dummy";
import BountyCard from "./components/BountyCard";
import DummyPayment from "./pages/DummyPayment";


// const appRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="dummypayment" element={<DummyPayment />} />
//     </Routes>
//   )
// );

function App()
{
  return (
    <div>
      {/* <RouterProvider router={appRouter} />
      <RootLayout></RootLayout>
      <Header></Header> */}
      {/* <BountyCard></BountyCard> */}
      {/* <RouterProvider router={appRouter} /> */}
      <RootLayout></RootLayout>
      {/* <Header></Header> */}
    </div>)
}

export default App;