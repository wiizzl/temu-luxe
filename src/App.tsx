import "./style.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { CollectionButton } from "./components/collection/collection-button";
import { CollectionCard } from "./components/collection/collection-card";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { ProductCard } from "./components/product/product-card";

export default function App() {
    const collections = [
        { image: "/images/collections/1.png", category: "Smartphones", title: "Les miniPhones", href: "/collection" },
        { image: "/images/collections/2.png", category: "Cuisine", title: "Les ustensiles indispensables", href: "#" },
        { image: "/images/collections/3.png", category: "Ordinateur", title: "La puissance d'AMD", href: "#" },
    ];

    const products = [
        { image: "/images/products/1.png", title: "miniPhone 2 Pro", price: 999, href: "/product" },
        { image: "/images/products/2.png", title: "miniPhone 2 Lite", price: 590, href: "#" },
        { image: "/images/products/3.png", title: "tinyPhone 2 SE", price: 390, href: "#" },
    ];

    return (
        <main>
            <section className="videoContainer">
                <video loop autoPlay muted>
                    <source src="/videos/background.mp4" type="video/mp4" />
                    La vidéo n'est pas supportée par votre navigateur.
                </video>
                <div className="content">
                    <img src="/images/logo.png" alt="Logo" className="logo" />
                    <div>
                        <h3>À la une</h3>
                        <h1>Le printemps de TEMU</h1>
                    </div>
                    <a href="#collections">
                        <img src="/images/chevron-bottom.svg" alt="Flèche vers le bas" className="chevron" />
                    </a>
                </div>
            </section>
            <section id="collections" className="collectionsContainer">
                <div className="cardsContainer">
                    {collections.map((item, index) => (
                        <CollectionCard item={item} key={index} />
                    ))}
                </div>
            </section>
            <section className="adContainer">
                <div>
                    <h3>SMARTPHONES</h3>
                    <h1>Les miniPhones</h1>
                </div>
                <CollectionButton href="/collection" />
            </section>
            <section className="productsContainer">
                <div className="cardsContainer">
                    {products.map((item, index) => (
                        <ProductCard item={item} key={index} />
                    ))}
                </div>
            </section>
        </main>
    );
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </StrictMode>
);
