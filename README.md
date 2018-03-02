# Disable WebBluetooth

[Disable
WebBluetooth](https://chrome.google.com/webstore/detail/disable-webbluetooth/cmbdmgflaalfkimclkgndgciniiandfc)
is a Chrome extension that disables the WebBluetooth API. It has no
configuration settings, and is suitable for force-installing via Chrome
Enterprise management.

## Why?

WebBluetooth provides access to devices that may not be designed with an
adversarial threat model in mind, protected only by a permissions dialog that
does not make the risks clear.

Given the lack of widely-deployed uses of WebBluetooth, disabling it is
a prudent defense-in-depth measure.

_You may also be interested in [disabling WebUSB](https://github.com/titanous/disable-webusb)._
