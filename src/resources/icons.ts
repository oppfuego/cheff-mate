import {HiOutlineGlobeAlt} from "react-icons/hi";
import {MdOutlineSpeed} from "react-icons/md";
import {RiSimCardLine} from "react-icons/ri";
import {FiShield} from "react-icons/fi";
import {FaCoins} from "react-icons/fa";
import {IoMdPhonePortrait} from "react-icons/io";
import {HiOutlineLogin} from "react-icons/hi";
import { FaWallet } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoAccessibilitySharp } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";
import { PiChefHatFill } from "react-icons/pi";
import { FaBrain } from "react-icons/fa";
import { PiPathFill } from "react-icons/pi";
import { MdSubscriptions } from "react-icons/md";
import { GiFlexibleStar } from "react-icons/gi";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaCalendarTimes } from "react-icons/fa";
import { GoZap } from "react-icons/go";
import { FaUser, FaCheck, FaClock } from "react-icons/fa";

export const ICONS = {
    globe: HiOutlineGlobeAlt,
    speed: MdOutlineSpeed,
    sim: RiSimCardLine,
    shield: FiShield,
    coins: FaCoins,
    phone: IoMdPhonePortrait,
    login: HiOutlineLogin,
    wallet: FaWallet,
    mail: IoMdMailOpen,
    call: FaPhoneVolume,
    pay: BsCurrencyExchange,
    accessibility: IoAccessibilitySharp,
    settings: GiSettingsKnobs,
    bulb: FaLightbulb,
    community: RiUserCommunityLine,
    chef: PiChefHatFill,
    brain: FaBrain,
    path: PiPathFill,
    subscriptions: MdSubscriptions,
    flex: GiFlexibleStar,
    priceTag: IoPricetagsSharp,
    calendar: FaCalendarTimes,
    zap: GoZap,
    user: FaUser,
    check: FaCheck,
    clock: FaClock,
} as const;

export type IconKey = keyof typeof ICONS;
