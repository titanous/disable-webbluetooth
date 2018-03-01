var script = document.createElement('script');
script.text = '{ navigator.__defineGetter__("bluetooth", () => undefined); }';
document.documentElement.appendChild(script);
