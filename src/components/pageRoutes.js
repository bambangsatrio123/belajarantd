import { DashboardOutlined, BankOutlined, LogoutOutlined } from "@ant-design/icons";
import Dashboard from "../pages/Dashboard/Dashboard";
import TransactionPage from "../pages/Transaction/TransactionPage";
import FormTransactionPage from "../pages/Transaction/FormTransactionPage";

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
      component: TransactionPage,
    },
    {
      path: "/logout",
      link: "/logout",
      icon: <LogoutOutlined />,
      name: "Logout",
    },
    {
      path: "/transaksi-baru/setoran-pinjaman",
      link: "/transaksi-baru/setoran-pinjaman",
      component:FormTransactionPage,
    },
  ];
};

export default pageRoutes();