import React, { useMemo } from "react";
import Tooltip from "antd/es/tooltip";

interface BigTextProps {
  text: string;
}

const BigText = (props: BigTextProps) => {
  const { text } = props;
  // if (!text) {
  //   return '';
  // }
  const para = text || "";
  const valArr = para.split("\n");
  const ele: any[] = [];
  if (valArr && valArr.length > 0) {
    valArr.forEach((v) => {
      if (v) {
        ele.push(<p key={v}>{v}</p>);
      }
    });
  } else {
    ele.push(<p key="single-para">{para}</p>);
  }

  const data: any = useMemo(() => {
    return {
      isBig: para.length > 10,
      shortText: para.substr(0, 10),
    };
  }, [text]);
  return data.isBig ? (
    <Tooltip title={ele}>{data.shortText}...</Tooltip>
  ) : (
    <span>{ele}</span>
  );
};

export default BigText;
