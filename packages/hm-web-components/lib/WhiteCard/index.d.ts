import React from "react";
interface WhiteCardProps {
    loading?: boolean;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactElement<any>[] | React.ReactElement;
}
declare const WhiteCard: (props: WhiteCardProps) => JSX.Element;
export default WhiteCard;
