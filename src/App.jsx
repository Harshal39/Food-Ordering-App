import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import './style.css';
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="app">
        <Header />
        <Body />
        <Footer />
        </div>
    )
}


const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)