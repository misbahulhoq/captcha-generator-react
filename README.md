# Generate captcha

A lightweight utility to generate image-based captchas using the HTML5 Canvas API. Returns a base64 image and the corresponding captcha text for easy verification.

## ✨ Features

- Generates random captchas using alphanumeric characters
- Returns both captcha text and base64 image
- Customizable width, height, and character length
- Adds random interference lines for better security

## 📦 Installation

Using npm

```bash
npm install captcha-generator-react
```

Using pnpm

```bash
pnpm add captcha-generator-react
```

# Usage

```js
import generateCaptcha from "generate-captcha";

const { captchaText, captchaImage } = generateCaptcha();

console.log(captchaText); // Example: "aZ4pQ2"
console.log(captchaImage); // Base64-encoded PNG image

// You can also customize the captcha length, width, and height:
const { captchaText, captchaImage } = generateCaptcha(5, 150, 50);
```
