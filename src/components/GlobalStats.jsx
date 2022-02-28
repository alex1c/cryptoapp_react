import React from 'react'
import { useGetGlobalStatsQuery } from '../services/cryptoApi';
import Loader from './Loader';
import { Card, Col, Row } from 'antd';

const GlobalStats = () => {


    const { data, isFetching } = useGetGlobalStatsQuery();
    const statsList = data?.data?.totalCoins;
    const totalMarkets = data?.data?.totalMarkets
    const totalMarketCap = data?.data?.totalMarketCap
    const total24hVolume = data?.data?.total24hVolume
   // Note: To access this endpoint you need premium plan
   
   //console.log('data ',data)
   //console.log('statsList ',statsList)
   //debugger
    if (isFetching) return <Loader />;
  

  return (
    <div className="site-card-wrapper">
    <Row gutter={20}>
      <Col span={5}>
        <Card title="Всего криптовалют" bordered={false}>
          {statsList}
        </Card>
      </Col>
      <Col span={5}>
        <Card title="Общее количество рынков, используемых для расчета цены" bordered={false}>
          {totalMarkets}
        </Card>
      </Col>
      <Col span={5}>
        <Card title="Рыночная капитализация. Цена умножается на оборотное предложение" bordered={false}>
          {totalMarketCap}
        </Card>
      </Col>
      <Col span={5}>
        <Card title="Общий объем торгов за 24 часа, рассчитанный в базовой валюте" bordered={false}>
          {total24hVolume}
        </Card>
      </Col>
      
    </Row>
  </div>
    
  )
}

export default GlobalStats