type ProductCardProps = {
    item: {
        image: string;
        title: string;
        price: number;
    };
};

const ProductCard = (props: ProductCardProps) => {
    return <div>{props.item.title}</div>;
};

export { ProductCard };
