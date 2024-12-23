import { Link } from "react-router";

type CollectionButtonProps = {
    href: string;
};

const CollectionButton = (props: CollectionButtonProps) => {
    return (
        <Link to={props.href} className="collectionButton">
            Découvrir la collection
        </Link>
    );
};

export { CollectionButton };
