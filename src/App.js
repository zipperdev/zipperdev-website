import React, { useState, useEffect, useCallback } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Spark from "./pages/studios/Spark";
import Dailyface from "./pages/studios/Dailyface";
import ZipperdevStudios from "./pages/studios/Index";
import NotFound from "./pages/NotFound";
import Scroll from "./Scroll";

const queryClient = new QueryClient();

export function Loading({ loading }) {
    const [ dotCounter, setDotCounter ] = useState(3);

    const changeDotCount = useCallback(() => {
        setDotCounter(3 <= dotCounter ? 1 : dotCounter + 1);
    }, [ dotCounter, setDotCounter ]);

    useEffect(() => {
        const dotInterval = setInterval(changeDotCount, 750);
        return () => clearInterval(dotInterval);
    }, [ loading, dotCounter, changeDotCount ]);

    return (
        <div className="bg-[#1b1b1d] flex justify-center items-center w-full h-full">
            <Helmet>
                <title>Zipperdev | 로딩 중...</title>
            </Helmet>
            <h1 className="font-bold text-3xl text-gray-300">로딩 중{".".repeat(dotCounter)}</h1>
        </div>
    );
};

function App() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const requireImages = require.context("./img/", true, /\.(png|jpe?g|svg)/);
        requireImages.keys().forEach(imgName => {
            const image = new Image();
            image.src = imgName;
        });
        setLoading(false);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <Router>
                    <Scroll />
                    <Switch>
                        <Route exact path="/" component={() => <Home loading={loading} />} />
                        <Route exact path="/projects" component={() => <Projects loading={loading} />} />
                        <Route exact path="/zipperdev-studios" component={() => <ZipperdevStudios loading={loading} />} />
                        <Route exact path="/zipperdev-studios/spark" component={() => <Spark loading={loading} />} />
                        <Route exact path="/zipperdev-studios/dailyface" component={() => <Dailyface loading={loading} />} />
                        <Route path="*" component={() => <NotFound loading={loading} />} />
                    </Switch>
                </Router>
            </HelmetProvider>
        </QueryClientProvider>
    );
}

export default App;