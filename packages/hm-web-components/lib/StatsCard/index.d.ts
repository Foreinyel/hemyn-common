import React from "react";
export interface StatsCardProps {
    loading: boolean;
    onRefresh: () => void;
    children: React.ReactNode | React.ReactNodeArray;
    title: string;
    description: string;
    buttons?: React.ReactNode | React.ReactNodeArray;
}
declare const _default: ({ loading, onRefresh, children, title, description, buttons, }: StatsCardProps) => JSX.Element;
export default _default;
