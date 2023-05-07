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
const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });




function App()
{
  return (
    <div>
      <RootLayout></RootLayout>
    </div>)
}

export default App;