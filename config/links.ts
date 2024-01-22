import { IconTypes } from "../utils/getIcon";
interface RouteConfig {
  iconId: IconTypes;
  href: string;
  title: string;
}
const links: RouteConfig[] = [
  { iconId: "home", href: "/", title: "Home" },
  { iconId: "bars", href: "/testui", title: "Test UI" },
  { iconId: "info", href: "/about", title: "About Us" },
  { iconId: "couch", href: "/planMyWeekend", title: "Plan My Weekend" },
  { iconId: "setting", href: "/settings", title: "Settings" },
  { iconId: "app", href: "/todos", title: "ToDo App" },
];
export default links;