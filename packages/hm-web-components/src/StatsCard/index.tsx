import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import WhiteCard from "../WhiteCard";

const { Title, Text } = Typography;

export interface StatsCardProps {
  loading: boolean;
  onRefresh: () => void;
  children: React.ReactNode | React.ReactNodeArray;
  title: string;
  description: string;
  buttons?: React.ReactNode | React.ReactNodeArray;
}

export default ({
  loading,
  onRefresh,
  children,
  title,
  description,
  buttons,
}: StatsCardProps) => {
  return (
    <WhiteCard loading={loading}>
      <Row justify="start" align="middle">
        <Col>
          <Title level={5} style={{ marginBottom: 0 }}>
            {title}
          </Title>
        </Col>
        <Col flex={1}>
          <Text style={{ marginLeft: 20 }} type="secondary">
            {description}
          </Text>
        </Col>
        <Col>{buttons}</Col>
        <Col>
          <SyncOutlined
            style={{ marginLeft: 20 }}
            spin={loading}
            onClick={onRefresh}
          />
        </Col>
      </Row>
      <Divider dashed />
      <Row>{children}</Row>
    </WhiteCard>
  );
};
