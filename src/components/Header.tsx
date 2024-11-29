import { Typewriter } from "react-simple-typewriter";

const Header = () => {
    return (
        <div className=" flex justify-center text-center w-screen mt-7 ">
            <h1 className="font-doto text-4xl text-white">
                <Typewriter words={["My Financial Dashboard"]} typeSpeed={100} />
            </h1>
        </div>
    )
}

export default Header