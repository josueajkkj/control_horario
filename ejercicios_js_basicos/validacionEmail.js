function validarEmail(email) {
  const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (expresion.test(email)) {
    console.log(`✅ Email válido: ${email}`);
    return true;
  }
  console.log(`❌ Email inválido: ${email}`);
  return false;
}

// Pruebas
validarEmail("josue@gmail.com");
validarEmail("correo-sin-arroba.com");
validarEmail("otro@dominio.pe");
