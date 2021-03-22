import React from "react";
import { PageContainer } from "@ant-design/pro-layout";
import Spin from "antd/es/spin";
import { PageContainerProps as AntPageContainerProps } from "@ant-design/pro-layout/lib/components/PageContainer";

export interface PageContainerProps extends AntPageContainerProps {
  loading: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export default (props: any) => {
  const { loading = false, ...restProps } = props;
  return (
    <PageContainer {...restProps}>
      <Spin spinning={loading}>{props.children}</Spin>
    </PageContainer>
  );
};
