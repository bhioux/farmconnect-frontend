import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import BottomNavigation from "../components/BottomNavigation";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";



export default function Layout(){
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Layout must be used within an AppProvider");
    }

    const { nav } = context;

    return (
        <>
        {/* <Navigation nav={nav} /> */}
        <Outlet />
        <BottomNavigation />
        </>
    )
}