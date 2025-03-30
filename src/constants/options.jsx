import { IoMdCash } from "react-icons/io";
//import { TbMoneybag } from "react-icons/tb";
import { RiVipCrownFill } from "react-icons/ri";
import { FaPlane } from "react-icons/fa";
import { PiCheersFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { FaBus } from "react-icons/fa6";

export const SelectTravelsList=[
    {
        id:1,
        title:'just Me',
        desc:'A sole traveles in exploration',
        icon:'🛪',
        people:'1 People'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'🛥️',
        people:'5 to 10 People'
    },
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on average side',
        icon:'💰',
    },{
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
]

export const AI_Prompt='Generate Travel Plan For Location: {destination}, for {days} Days for {companion} with a {budget} budget, give me Hotel options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, ticket Pricing, Time travel each of the location for {days} days with each day plan with best time to visit in JSON format.'