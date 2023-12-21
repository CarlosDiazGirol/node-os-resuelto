const {obtenerInformacionSistema} = require('./osModule');
const {obtenerInformacionRed} = require('./networkModule');

const sistemaOperativo = obtenerInformacionSistema();
const informacionRed = obtenerInformacionRed();

// Imprimir información del sistema operativo
console.log('Información del Sistema Operativo:');
console.log('--------------------------------');
Object.entries(sistemaOperativo).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

// Imprimir información de la red
console.log('\nInformación de la Red:');
console.log('----------------------');
Object.entries(informacionRed).forEach(([nombre, interfaces]) => {
  console.log(`\nInterfaz ${nombre}:`);
  interfaces.forEach((iface) => {
    console.log(`  Familia: ${iface.Familia}`);
    console.log(`  Dirección: ${iface.Dirección}`);
    console.log(`  Interno: ${iface.Interno}`);
  });
});
