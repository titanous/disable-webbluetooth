var script = document.createElement('script');
script.text = `
if (navigator.bluetooth) {
  delete navigator.bluetooth.__proto__.requestDevice;
  navigator.__defineGetter__("bluetooth", () => undefined);
}
`;
document.documentElement.appendChild(script);
