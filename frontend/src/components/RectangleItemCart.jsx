import { FaTimes } from "react-icons/fa";

function RectangleItemCart({ title, price, image, onRemove }) {
    return (
        <div className="w-full p-3 bg-secondary flex items-center justify-between rounded-2xl">
            <div className="flex items-center gap-3">
                <img src={image} alt="item" className="h-20 w-20 rounded-2xl"/>
                <div>
                    <h2 className="text-primary font-semibold">{title}</h2>
                    <p className="text-accent">{price}</p>
                </div>
            </div>
            <button onClick={onRemove}><FaTimes/></button>
        </div>
    )
}

export default RectangleItemCart;