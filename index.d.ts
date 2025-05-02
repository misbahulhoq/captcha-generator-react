declare module "captcha-generator-react" {
  function generateCaptcha(options?: {
    length?: number;
    width?: number;
    height?: number;
  }): {
    captchaText: string;
    captchaImage: string;
  };
  export { generateCaptcha };
  export default generateCaptcha;
}
