import React from 'react'
import { Bs0Circle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsAwardFill } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";

export const SidebarData = [
    {
        title: "Home",
        icon: <Bs0Circle />,
        link: "/home"
    },
    {
        title: "Sobre",
        icon: <BsApple />,
        link: "/about"
    },
    {
        title: "School",
        icon: <BsAwardFill />,
        link: "/schools"
    },
    {
        title: "Contact",
        icon: <BsBank2 />,
        link: "/contact"
    }
    


]
