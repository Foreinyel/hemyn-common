declare module "antd" {
  export const message: any;
}
declare module "antd/es/message" {
  export const success: (args: ant) => void;
  export const error: (args: ant) => void;
}
