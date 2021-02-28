import React from "react";
import { PageContainerProps as AntPageContainerProps } from "@ant-design/pro-layout/lib/components/PageContainer";
export interface PageContainerProps extends AntPageContainerProps {
    loading: boolean;
    children: React.ReactNode | React.ReactNode[];
}
declare const _default: (props: any) => JSX.Element;
export default _default;
