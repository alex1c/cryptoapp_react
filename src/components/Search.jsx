import React, { useEffect, useState } from "react";
import { Input, Space, Row, Col, Card, Tooltip } from "antd";
import { Link } from "react-router-dom";
import {  FallOutlined, RiseOutlined } from "@ant-design/icons";
import {
  
  useGetSearchQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import millify from "millify";

const { Search } = Input;
//const onSearch = (value) => console.log(value);

/* const suffix = (
  <AudioOutlined
    style={{
     // fontSize: 16,
     // color: "#1890ff",
    }}
  />
); */

const SearchPage = () => {
  //const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptos, getNewResult] = useState();

  //debugger
  const { data, isFetching } = useGetSearchQuery(searchTerm);
  // console.log('bit ', data)

  useEffect(() => {
    getNewResult(data);
  }, [searchTerm, data]);

  console.log("cryptos ", cryptos);
  console.log("searchTerm ", searchTerm);
  console.log("data ", data);
  console.log(data?.data?.coins);

  if (isFetching) return <Loader />;

  return (
    <div>
      <Space direction="horizontal">
        <Search
        style={{ margin: 'auto',
          width: '200%',
          textAlign: 'center',
          padding: '30px'}}
          placeholder="название или код крипты"
          allowClear          
          enterButton="Поиск"
          size="large"
          onSearch={(e) => setSearchTerm(e)} //setSearchTerm(e.target.value.toLowerCase())}
        />
      </Space>

      <Row gutter={[32, 32]} className="crypto-card-container">
        {data?.data?.coins?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt="crypto"
                  />
                }
                hoverable
                // onClick={(t)=>handlerCardClick(t.target)}
              >
                <p>Цена: {millify(currency.price ? currency.price : 0)}</p>
                <p>Код валюты: {currency.symbol}</p>
                <p>Идентификатор валюты: {currency.uuid}</p>
                <hr></hr>
                {data?.data?.exchanges?.map((exchange) => (
                  <>
                    <Space direction="vertical" wrap="true" size="large">
                      <p className={{ paddingTop: "30px" }}>
                        <img
                          className="crypto-image"
                          src={exchange.iconUrl}
                          alt="crypto"
                        />{" "}
                        Биржа {exchange.name}
                        <Tooltip title="Рекомендована"></Tooltip>{" "}
                        {exchange.recommended ? (
                          <RiseOutlined />
                        ) : (
                          <FallOutlined />
                        )}
                        <span></span>
                      </p>
                    </Space>
                  </>
                ))}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchPage;
