const generateCaptcha = (options = {}) => {
  const optionsWithDefaults = Object.assign(
    { length: 6, width: 120, height: 40 },
    options
  );
  const { length, width, height } = optionsWithDefaults;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const captchaText = Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");

  canvas.width = width;
  canvas.height = height;

  ctx.font = "24px Arial";
  ctx.fillStyle = "#f0f0f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#000";
  ctx.textBaseline = "middle";
  ctx.fillText(captchaText, 10, canvas.height / 2);

  for (let i = 0; i < length - 1; i++) {
    ctx.strokeStyle = `rgba(0,0,0,${Math.random()})`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }

  return { captchaText, captchaImage: canvas.toDataURL() };
};

export { generateCaptcha };

export default generateCaptcha;
