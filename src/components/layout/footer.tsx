import { Link } from "react-router";

const Footer = () => {
    return (
        <footer>
            <p>Pays de livraison : France</p>
            <img src="/images/logo.png" alt="Logo" className="logo" />
            <ul>
                <li>
                    <Link to="#">Plan du site</Link>
                </li>
                <li>
                    <Link to="#">Mentions légales</Link>
                </li>
                <li>
                    <Link to="#">Cookies</Link>
                </li>
                <li>
                    <Link to="#videoContainer">Haut de la page</Link>
                </li>
            </ul>
        </footer>
    );
};

export { Footer };
