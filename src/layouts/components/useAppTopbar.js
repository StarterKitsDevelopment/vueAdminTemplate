
import defaultResturantLogo from "../../assets/images/default-logo.png";

export const useAppTopbar = {
    defaultResturantLogo : defaultResturantLogo,
    topbarMenu: [
        {
            id: "event",
            name: "Event",
            icon: "pi-calendar",
            to: "/event"
        },
        {
            id: "settings",
            name: "Settings",
            icon: "pi-cog",
            to: "/setting"
        },
        {
            id: "profile",
            name: "Profile",
            icon: "pi-user",
            to: "/profile"
        }
    ],
}