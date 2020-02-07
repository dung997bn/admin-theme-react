import Dashboard from "./components/views/Dashboard";
import Icon from "./components/views/Icon";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icon",
    name: "Icon",
    icon: "tim-icons icon-chart-pie-36",
    component: Icon,
    layout: "/admin"
  }
];
export default routes;
