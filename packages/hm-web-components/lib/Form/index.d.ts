/// <reference types="react" />
import { FormProps } from "antd/lib/form/Form";
import { ButtonProps } from "antd/lib/button";
export declare const Form: {
    (props: FormProps): JSX.Element;
    Item: typeof import("antd/lib/form/FormItem").default;
};
export declare const TailButton: (props: ButtonProps) => JSX.Element;
