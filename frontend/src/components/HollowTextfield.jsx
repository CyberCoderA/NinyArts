
function HollowTextfield({ title, placeholder, type }) {
    function isTypePassword() {
        return type=="password" ? (
            <div className="w-full flex justify-end items-center gap-2">
                <input type="checkbox" name="show_password" id="show_password" className="bg-accent lg:size-6" />
                <label htmlFor="show_password" className="text-accent lg:text-2xl">Show Password</label>
            </div>
        ) : "";
    }

    return (
        <div className="flex flex-col gap-2 w-full p-2 lg:gap-5">
            <h1 className="text-primary font-bold text-2xl md:text-4xl lg:text-5xl">{title}</h1>
            <input type={type} placeholder={placeholder}  name={type} id={type} className="border w-full p-1 rounded-md lg:h-16 placeholder:italic lg:placeholder:text-xl lg:p-5 lg:text-xl"/>
            {isTypePassword()}
        </div>
    )
}  

export default HollowTextfield;