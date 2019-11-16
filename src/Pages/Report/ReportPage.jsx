import React, { Component } from "react";

import AppHeader from '../../Components/Header/Header';
import AppSidebar from '../../Components/Sidebar/Sidebar';
import Report from './Report';

import { Layout } from 'antd';
const { Content, Sider, Header } = Layout;

class ReportPage extends Component {
  state = {
    isSidebarCollapsed: false,
  };

  toggle = () => {
    this.setState({
      isSidebarCollapsed: !this.state.isSidebarCollapsed,
    });
  };

  render() {
      return (
        <Layout className="core-layout">
          <Header style={{ background: '#fff', padding: 0 }}>
            <AppHeader 
              onToggle={this.toggle}
              isSidebarCollapsed={this.state.isSidebarCollapsed}
            />
          </Header>
          <Layout style={{ background: '#f0f6f7' }}>
            <Sider
              collapsed={this.state.isSidebarCollapsed}
              collapsible
              style={{ background: '#fff' }}
              trigger={null}
              width={256}
            >
              <AppSidebar 
                isSidebarCollapsed={this.state.isSidebarCollapsed}
              />
            </Sider>
            <Content>
              <Report />
            </Content>
          </Layout>
        </Layout>
      );
  }
}

export default ReportPage;