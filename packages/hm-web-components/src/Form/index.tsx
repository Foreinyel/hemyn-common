import React from "react";
import { Form as AntdForm, Button as AntdButton } from "antd";
import { FormProps } from "antd/lib/form/Form";
import { ButtonProps } from "antd/lib/button";
import classnames from "classnames";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export const Form = (props: FormProps) => {
  const { children, ...rest } = props;
  return (
    <AntdForm {...rest} {...layout}>
      {children}
    </AntdForm>
  );
};

Form.Item = AntdForm.Item;

// export const FormItem = AntdForm.Item;

const tailLayout = {
  wrapperCol: { xs: { offset: 0, span: 16 }, sm: { offset: 8, span: 16 } },
};

export const TailButton = (props: ButtonProps) => {
  const { children, className, ...rest } = props;
  const cls = classnames("hm-form-button", className);
  return (
    <AntdForm.Item {...tailLayout}>
      <AntdButton className={cls} {...rest}>
        {children}
      </AntdButton>
    </AntdForm.Item>
  );
};
