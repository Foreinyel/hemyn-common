import React from "react";
import { Card, Spin } from "antd";
import classnames from "classnames";
// import style from './style.less';

interface WhiteCardProps {
  loading?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactElement<any>[] | React.ReactElement;
}

const WhiteCard = (props: WhiteCardProps) => {
  let styl = {};
  if (props.style) {
    styl = { ...props.style, background: "#FFFFFF" };
  } else {
    styl = {
      background: "#FFFFFF",
    };
  }
  const cls = classnames(props.className, "white-card");

  const cardProps: any = {
    ...props,
    loading: false,
  };
  return (
    <Card style={styl} {...cardProps} className={cls}>
      <Spin spinning={!!props.loading}>{props.children}</Spin>
    </Card>
  );
};

export default WhiteCard;
