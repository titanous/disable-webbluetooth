var script = document.createElement('script');
script.text = `
if (navigator.bluetooth) {
  delete navigator.bluetooth.__proto__.requestDevice;
  delete navigator.__proto__.bluetooth;
}
`;
document.documentElement.appendChild(script);
