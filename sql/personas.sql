CREATE DATABASE IF NOT EXISTS personas_db;
USE personas_db;

CREATE TABLE IF NOT EXISTS personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipoDocumento VARCHAR(20),
    numeroDocumento VARCHAR(50),
    nombres VARCHAR(100),
    apellidos VARCHAR(100),
    direccion VARCHAR(150),
    ciudad VARCHAR(50),
    fechaNacimiento DATE,
    correo VARCHAR(100)
);
