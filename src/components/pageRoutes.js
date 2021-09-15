import { DashboardOutlined, BankOutlined, LogoutOutlined } from "@ant-design/icons";

const pageRoutes = () => {
  return [
    {
      path: "/berandas",
      link: "/berandas",
      icon: <DashboardOutlined />,
      name: "Beranda",
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