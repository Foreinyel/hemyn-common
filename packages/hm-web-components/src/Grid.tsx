import React from "react";
import { Row as AntdRow, Col as AntdCol } from "antd";
import { RowProps as AntdRowProps } from "antd/lib/row";
import { ColProps as AntdColProps } from "antd/lib/col";

export const Row = (props: AntdRowProps) => {
  const { children, ...rest } = props;
  return (
    <AntdRow {...rest} gutter={{ xs: 8, sm: 16, md: 24 }}>
      {children}
    </AntdRow>
  );
};

export const Col = (props: AntdColProps) => {
  const { children, ...rest } = props;
  return (
    <AntdCol
      {...rest}
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 6 }}
    >
      {children}
    </AntdCol>
  );
};
