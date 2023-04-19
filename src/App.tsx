import RootLayout from "./layouts/RootLayout";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import CreateBounties from "./pages/CreateBounties";
import Bounties from "./pages/Bounties";
import Statistics from "./pages/Statistics";
import YourProfile from "./pages/YourProfile";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Dummy from "./pages/Dummy";
import BountyCard from "./components/BountyCard";

// const appRouter = createBrowserRouter(
//   createRoutesFromElements(

//     <Route>
//       <Route path='/' element={<RootLayout />}>
//         <Route path='/home' index element={<Home />} />
//         <Route path='/createbounties' element={<CreateBounties />} />
//         <Route path='/bounties' element={<Bounties />} />
//         <Route path='/statistics' element={<Statistics />} />
//         <Route path='/yourprofile' element={<YourProfile />} />
//       </Route>
//       <Route path='/login' element={<Login />} />
//       <Route path="*" element={<NoPage />} />
//       <Route path='/dummy' element={<Dummy />} />
//     </Route>
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
      <RootLayout></RootLayout>
      {/* <Header></Header> */}
    </div>)
}

export default App;