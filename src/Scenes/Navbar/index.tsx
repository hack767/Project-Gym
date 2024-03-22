
import {Nav} from "react-bootstrap"
import Link from "./Link";
import { SelectedPage } from "@/Shared/type";
import useMediaQuery from "@/Hooks/UseMedia";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import ActionButton from "@/Shared/ActionButton";
import { useState } from "react";
type Prop = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}
const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Prop) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 715px)");

    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    return (
        <Nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/*left side */}
                        {  /* image dalni h */}
                        {/*Right side*/}
                        {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full text-sm`}>
                            <div className={`${flexBetween} gap-8`}>
                                <Link page= "Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                                <Link page= "About Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                                <Link page= "Benefit" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                                <Link page= "Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                            </div>

                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                            </div>

                        </div>
                        ): (
                            <button 
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        )}

                    </div>
                </div>

            </div>

            {/* Mobile menu bar */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/*Closed Icon */}
                    <div className="flex justify-end p-12 ">
                        <button 
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400 rounded-full hover:bg-primary-300"/>
                        </button>
                    </div>
                    {/* Menu Items */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                                <Link page= "Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage} />
                                <Link page= "About Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                                <Link page= "Benefit" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                                <Link page= "Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                    </div>
                </div>
            )}


        </Nav>
    )
}

export default Navbar