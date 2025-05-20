export function generateQRCode(secret, element) {
  const qr = new QRCode(element, {
    text: secret,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  return qr;
}

export function validateVerificationCode(code) {
  // Add your verification logic here
  return code.length === 6 && /^\d+$/.test(code);
}