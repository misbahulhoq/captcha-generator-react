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
import { useEffect, useState } from "react";

function CaptchaGenerator() {
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [captchaImage, setCaptchaImage] = useState(null);

  useEffect(() => {
    const { text, imgUrl } = generateCaptcha();
    setCaptchaText(text);
    setCaptchaImage(imgUrl);
  }, []);

  return (
    <>
      <img src={captchaImage || undefined} alt="" className="mb" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log();
          console.log(captchaText === captcha);
        }}
      >
        <input
          type="text"
          name="captcha"
          onChange={(e) => {
            setCaptcha(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default CaptchaGenerator;
```

# Customize

```js
//if you want to adjust the height, width or length,just include it as an object in the generateCaptcha() function parameter.

const { text, imgUrl } = generateCaptcha({ length: 4 }); // generates a captcha of 4 characters.

// you can also add height and width as well.
```
