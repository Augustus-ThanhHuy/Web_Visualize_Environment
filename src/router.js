import BarGrap from "./chart/bar/bargrap";
import Donut from "./chart/donut/donut";
import Line from "./chart/line/line";
import Radar from "./chart/radar/radar";
import Masterlayout from "./masterlayout";
import { Route, Routes } from "react-router-dom";

const renderUserRouter = () =>{
    
    return (
       <Masterlayout>
            <Routes >
                <Route path="/" element={<BarGrap/>}></Route>
                <Route path="/line" element={<Line/>}></Route>
                <Route path="/donut" element={<Donut/>}></Route>
                <Route path="/radar" element={<Radar/>}></Route>
            </Routes>
       </Masterlayout>
    )
}

const RouterCustom = () =>{
    return renderUserRouter();
};

export default RouterCustom;