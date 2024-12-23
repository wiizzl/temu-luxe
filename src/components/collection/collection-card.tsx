import { CollectionButton } from "./collection-button";

type CollectionCardProps = {
    item: {
        image: string;
        category: string;
        title: string;
    };
};

const CollectionCard = (props: CollectionCardProps) => {
    return (
        <div className="collectionCard">
            <img src={props.item.image} alt={`Collection : ${props.item.title}`} />
            <div className="content">
                <div>
                    <h3>{props.item.category}</h3>
                    <h1>{props.item.title}</h1>
                </div>
                <CollectionButton />
            </div>
        </div>
    );
};

export { CollectionCard };
