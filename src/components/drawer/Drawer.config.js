/* Name:        Drawer.config.js
** Last modif:  25/05/2022 - Axel Virot
** Description: Configuration file for the Drawer
** Export:      drawerWith
**              routesConfig
*/

/* Import the MUI icons used in routesConfig
*/
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MicrowaveOutlinedIcon from '@mui/icons-material/MicrowaveOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

/* Drawer Width
*/
export const drawerWidth = '260px';

/* Drawer routes for Subheader and Link elements
*/
export const routesConfig =
[
    {
        index: "general",
        displayName: "GENERAL",
        routes: [
            {
                index: "accueil",
                href: "/",
                displayName: "Accueil",
                icon: <HomeOutlinedIcon />,
            },
            {
                index: "my-fridge",
                href: "/my-fridge",
                displayName: "Mon frigo",
                icon: <AcUnitOutlinedIcon />,
            },
            {
                index: "my-calendar",
                href: "/my-calendar",
                displayName: "Calendrier",
                icon: <CalendarMonthOutlinedIcon />,
            }
        ]
    },
    {
        index: "recette",
        displayName: "RECETTE",
        routes: [
            {
                index: "recipes",
                href: "/recipes",
                displayName: "Catalogue",
                icon: <LibraryBooksOutlinedIcon />,
            },
            {
                index: "new-recipe",
                href: "/new-recipe",
                displayName: "Creation",
                icon: <RestaurantOutlinedIcon />,
            },
            {
                index: "favoris",
                href: "/favoris",
                displayName: "Favoris",
                icon: <FavoriteBorderOutlinedIcon />,
            },
            {
                index: "my-receipt",
                href: "/my-receipt",
                displayName: "Inventaire",
                icon: <WorkOutlineOutlinedIcon />,
            },
            {
                index: "recipe-from-fridge",
                href: "/recipe-from-fridge",
                displayName: "Cuisinable",
                icon: <MicrowaveOutlinedIcon />,
            }
        ]
    },
    {
        index: "course",
        displayName: "COURSE",
        routes: [
            {
                index: "shopping-list",
                href: "/shopping-list",
                displayName: "Liste",
                icon: <ListAltOutlinedIcon />,
            },
            {
                index: "orders",
                href: "/orders",
                displayName: "Commande",
                icon: <ShoppingCartOutlinedIcon />,
            }
        ]
    }
];