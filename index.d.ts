declare module "captcha-generator-react" {
  export function generateCaptcha(options?: {
    length?: number;
    width?: number;
    height?: number;
  }): {
    captchaText: string;
    captchaImage: string;
  };
}
