import { Link } from "react-router";

type ProductCardProps = {
    item: {
        image: string;
        title: string;
        price: number;
        href: string;
    };
};

const ProductCard = (props: ProductCardProps) => {
    return (
        <Link to={props.item.href} className="productCard">
            <img src={props.item.image} alt={`Produit : ${props.item.title}`} />
            <div className="content">
                <h2>{props.item.title}</h2>
                <p>{props.item.price} &euro;</p>
            </div>
        </Link>
    );
};

export { ProductCard };
