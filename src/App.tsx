import "./styles/main.css";
import "./styles/reset.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { CollectionButton } from "./components/collection/collection-button";
import { CollectionCard } from "./components/collection/collection-card";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { ProductCard } from "./components/product/product-card";

export default function App() {
    const collections = [
        { image: "/images/collections/1.png", category: "Smartphones", title: "Les miniPhones" },
        { image: "/images/collections/2.png", category: "Cuisine", title: "Les ustensiles indispensables" },
        { image: "/images/collections/3.png", category: "Ordinateur", title: "La puissance d'AMD" },
    ];

    const products = [
        { image: "/images/products/1.png", title: "miniPhone 2 Pro", price: 999 },
        { image: "/images/products/2.png", title: "miniPhone 2 Lite", price: 590 },
        { image: "/images/products/3.png", title: "tinyPhone 2 SE", price: 390 },
    ];

    return (
        <main>
            <Header />
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
                {collections.map((item, index) => (
                    <CollectionCard item={item} key={index} />
                ))}
            </section>
            <section className="adContainer">
                <div>
                    <h3>SMARTPHONES</h3>
                    <h1>Les miniPhones</h1>
                </div>
                <CollectionButton />
            </section>
            <section className="productsContainer">
                {products.map((item, index) => (
                    <ProductCard item={item} key={index} />
                ))}
            </section>
            <Footer />
        </main>
    );
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
