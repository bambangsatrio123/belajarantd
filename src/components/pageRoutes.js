import { DashboardOutlined, BankOutlined, LogoutOutlined } from "@ant-design/icons";
import Dashboard from "../pages/Dashboard/Dashboard";

const pageRoutes = () => {
  return [
    {
      path: "/beranda",
      link: "/beranda",
      icon: <DashboardOutlined />,
      name: "Beranda",
      component: Dashboard,
    },
    {
      path: "/transaksibaru",
      link: "/transaksibaru",
      icon: <BankOutlined />,
      name: "Transaksi",
    },
    {
      path: "/logout",
      link: "/logout",
      icon: <LogoutOutlined />,
      name: "Logout",
    },
  ];
};

export default pageRoutes();