import React, { Suspense } from "react";
import Nav from "./components/Nav";
import MainContent from "./components/Main";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsData from "./projects.json";

//lazy load everything but landing page
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
let Data = ProjectsData;
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route
                            path="/portfolio"
                            element={
                                <Suspense fallback={<>Loading...</>}>
                                    <Portfolio ppa={Data} />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <Suspense fallback={<>Loading...</>}>
                                    <About />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Suspense fallback={<>Loading...</>}>
                                    <Contact />
                                </Suspense>
                            }
                        />
                    </Routes>
                </MainContent>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
