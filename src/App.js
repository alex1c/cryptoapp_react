import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar, SearchPage } from './components';

import './App.css';
import GlobalStats from './components/GlobalStats';

const App = () => (
 
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
            <Homepage />
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <GlobalStats level={5} ></GlobalStats>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022 <br />
          <Link to="/">
          Криптовселенная Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Домашняя</Link>
          <Link to="/exchanges">Обмен</Link>
          <Link to="/news">Новости</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;