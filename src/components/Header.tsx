import { Typewriter } from "react-simple-typewriter";

const Header = () => {
    return (
        <div className=" w-1/2  border py-4 justify-self-center pb-6 bg-transparent shadow-2xl flex justify-center text-center self-center mt-7 ">
            <h1 className=" mt-4 font-doto text-4xl text-white">
                <Typewriter words={["My Financial Dashboard"]} typeSpeed={100} />
            </h1>
        </div>
    )
}

export default Header