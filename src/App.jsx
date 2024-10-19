import React from "react";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project/:id" element={<ProjectView/>} />
        </Routes>
        <Footer/>
        <ToastContainer position="bottom-right" theme="dark"/>
      </BrowserRouter>
    </ThemeProvider>
  </>;
};

export default App;
