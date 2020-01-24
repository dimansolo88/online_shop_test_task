import React, {useState} from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb, Switch} from 'antd';

const {Header, Content} = Layout;

function App() {
    const [headerColor,setHeaderColor] = useState('dark')

    const changeTheme = () => {
        if(headerColor === 'dark') {
            setHeaderColor('light')
        }else {
            setHeaderColor('dark')
        }
    }

    return (
        <div className="app">
            <Switch style={{position:"absolute", right:'20px'}}
                checked={headerColor === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <Layout>

                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme={headerColor}
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">About</Menu.Item>
                    </Menu>
                </Header>
                <Layout>

                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>

                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>,
        </div>
    );
}

export default App;
