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

# Usage in plain React.

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
          if (captchaText === captcha) {
            alert("success");
          } else {
            alert("fail");
          }
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

# Usage in Nextjs server components (v13 and up).

```js
"use client";
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
          if (captchaText === captcha) {
            alert("success");
          } else {
            alert("fail");
          }
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

if you want to adjust the height, width or length of the captcha, just include it as an object in the generateCaptcha() function's parameter.

```js
const { text, imgUrl } = generateCaptcha({ length: 4 }); // generates a captcha of 4 characters.
const { text, imgUrl } = generateCaptcha({ length: 7, height: 50, width: 220 }); // generates a captcha where the height is 50 pixels, width is 220 pixels and the length is 7.
```
