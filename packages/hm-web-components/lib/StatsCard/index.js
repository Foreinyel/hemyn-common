import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import WhiteCard from "../WhiteCard";
var Title = Typography.Title, Text = Typography.Text;
export default (function (_a) {
    var loading = _a.loading, onRefresh = _a.onRefresh, children = _a.children, title = _a.title, description = _a.description, buttons = _a.buttons;
    return (React.createElement(WhiteCard, { loading: loading },
        React.createElement(Row, { justify: "start", align: "middle" },
            React.createElement(Col, null,
                React.createElement(Title, { level: 5, style: { marginBottom: 0 } }, title)),
            React.createElement(Col, { flex: 1 },
                React.createElement(Text, { style: { marginLeft: 20 }, type: "secondary" }, description)),
            React.createElement(Col, null, buttons),
            React.createElement(Col, null,
                React.createElement(SyncOutlined, { style: { marginLeft: 20 }, spin: loading, onClick: onRefresh }))),
        React.createElement(Divider, { dashed: true }),
        React.createElement(Row, null, children)));
});
