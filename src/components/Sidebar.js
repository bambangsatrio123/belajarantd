import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

export default function Dashboard() {
  const getCollapseIcon = () => {
    if (collapsed) {
      return <MenuUnfoldOutlined onClick={handleOnCollapse} className="trigger" />;
    }
    return <MenuFoldOutlined onClick={handleOnCollapse} className="trigger" />;
  };

  const [collapsed, setCollapsed] = useState(false);

  const handleOnCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsed={collapsed} handleOnCollapse={handleOnCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div>{window.innerWidth > 992 && getCollapseIcon()}</div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}
