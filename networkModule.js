// networkModule.js
const os = require('node:os');

function obtenerInformacionRed() {
  const interfaces = os.networkInterfaces();
  const redes = {};

  Object.keys(interfaces).forEach((nombre) => {
    redes[nombre] = interfaces[nombre].map((iface) => ({
      Familia: iface.family,
      Dirección: iface.address,
      Interno: iface.internal,
    }));
  });

  return redes;
}

module.exports = {
  obtenerInformacionRed,
};
