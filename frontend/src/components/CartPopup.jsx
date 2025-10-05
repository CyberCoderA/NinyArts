import RectangleItemCart from "./RectangleItemCart";

function CartPopup({ cartItems, onRemove, onClose }) {
    const renderCart = () => {
        return cartItems.length === 0 ? <p>No items in the cart</p> : cartItems.map(item => (
            <RectangleItemCart key={item.index} title={item.title} price={item.price} image={item.image} onRemove={() => onRemove(item.index)} />
        ));
    };

    return (
        <div className="w-10/12 h-10/12 rounded-2xl bg-white p-5 flex flex-col justify-between">
            <div className="flex flex-col gap-3 lg:gap-20">
                <div className="flex flex-col gap-2 lg:gap-8">
                    <h1 className="text-primary text-3xl font-bold">Email</h1>
                    <input type="text" placeholder="*someone’s_email@gmail.com" className="border-b-2 border-accent outline-none w-full"/>
                </div>

                <div className="flex flex-col gap-2 lg:gap-8">
                    <h1 className="text-primary text-3xl font-bold">Message</h1>
                    <textarea placeholder="Tell us about something" className="border-b-2 border-accent outline-none w-full"/>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="text-primary text-3xl font-bold">Cart</h1>

                <div className="overflow-y-scroll flex flex-col gap-3">
                    {renderCart()}
                </div>
            </div>

            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-row gap-2 lg:gap-0">
                    <input type="checkbox" name="" id="" className="lg:w-20"/>
                    <h1 className="lg:text-2xl">Custom Order</h1>
                </div>
                <div className="flex flex-row-reverse gap-5">
                    <button className="w-40 p-2 bg-primary text-white border border-primary flex justify-center rounded hover:cursor-pointer"><h1 className="text-xl font-semibold">Order</h1></button>
                    <button onClick={onClose} className="w-40 p-2 bg-white text-primary border border-primary flex justify-center rounded hover:cursor-pointer"><h1 className="text-xl font-semibold">Cancel</h1></button>
                </div>
            </div>
        </div>
    )
}

export default CartPopup;