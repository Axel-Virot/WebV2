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
			displayName: "",
			routes: [
				{
					index: "accueil",
					href: "/",
					displayName: "Accueil",
					icon: <HomeOutlinedIcon />,
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
			displayName: "RECETTES",
			routes: [
				{
					index: "recipes",
					href: "/recipes",
					displayName: "Recettes",
					icon: <LibraryBooksOutlinedIcon />,
				},
				{
					index: "new-recipe",
					href: "/new-recipe",
					displayName: "Créer une recette",
					icon: <RestaurantOutlinedIcon />,
				},
				{
					index: "my-receipt",
					href: "/my-receipt",
					displayName: "Mes créations",
					icon: <WorkOutlineOutlinedIcon />,
				},
				{
					index: "my-fridge",
					href: "/my-fridge",
					displayName: "Mon frigo",
					icon: <AcUnitOutlinedIcon />,
				},
				{
					index: "recipe-from-fridge",
					href: "/recipe-from-fridge",
					displayName: "Recettes cuisinables",
					icon: <MicrowaveOutlinedIcon />,
				},
				{
					index: "favoris",
					href: "/favoris",
					displayName: "Mes favoris",
					icon: <FavoriteBorderOutlinedIcon />,
				}

			]
		},
		{
			index: "course",
			displayName: "COURSES",
			routes: [
				{
					index: "shopping-list",
					href: "/shopping-list",
					displayName: "Liste de courses",
					icon: <ListAltOutlinedIcon />,
				},
				{
					index: "orders",
					href: "/orders",
					displayName: "Passer commande",
					icon: <ShoppingCartOutlinedIcon />,
				}
			]
		}
	];