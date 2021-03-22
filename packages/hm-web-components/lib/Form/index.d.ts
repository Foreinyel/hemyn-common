/// <reference types="react" />
import { FormProps } from "antd/lib/form/Form";
import { ButtonProps } from "antd/lib/button";
export declare const Form: {
    (props: FormProps): JSX.Element;
    Item: typeof import("antd/es/form/FormItem").default;
    useForm: typeof import("antd/es/form/Form").useForm;
};
export declare const TailButton: (props: ButtonProps) => JSX.Element;
