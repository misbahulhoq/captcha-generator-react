declare module "captcha-generator-react" {
  function generateCaptcha(options?: {
    length?: number;
    width?: number;
    height?: number;
  }): {
    text: string;
    imgUrl: string;
  };
  export { generateCaptcha };
  export default generateCaptcha;
}
