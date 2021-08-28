CREATE DATABASE IF NOT EXISTS administracionTaquillas CHARACTER SET 'utf8' COLLATE 'utf8_spanish_ci';
USE administracionTaquillas;

CREATE TABLE IF NOT EXISTS datosGenerales (
	codCentro_d VARCHAR(6) PRIMARY KEY NOT NULL,
    nomCentro_d VARCHAR(100),
    plantas_d VARCHAR(1),
    zonas_d VARCHAR(1),
    numTaquillas_d VARCHAR(3),
    direccion_d VARCHAR(255),
    email_d VARCHAR(100),
    telefono_d VARCHAR(9)
);

CREATE TABLE IF NOT EXISTS alumnos (
    dni_a VARCHAR(9) PRIMARY KEY NOT NULL,
    nia_a VARCHAR(10) NOT NULL,
    foto_a VARCHAR(50) NOT NULL,
    nombre_a VARCHAR(50) NOT NULL,
    ape_a VARCHAR(100) NOT NULL,
    ape2_a VARCHAR(100),
    curso_a ENUM("1ESO","2ESO","3ESO","4ESO"),
    poblacion_a VARCHAR(50) NOT NULL,
    direccion_a VARCHAR(255) NOT NULL,
    nombreP_a VARCHAR(50) NOT NULL,
    telefonoP_a VARCHAR(9) NOT NULL,
    nombreM_a VARCHAR(50) NOT NULL,
    telefonoM_a VARCHAR(9) NOT NULL,
    email_a VARCHAR(100),
    password_a VARCHAR(6),
    tieneReserva_a boolean
);

CREATE TABLE IF NOT EXISTS taquillas (
    id_t VARCHAR(6) PRIMARY KEY NOT NULL,
    estado_t VARCHAR(1) UNIQUE
    nivel_t varchar (4) zona("1","2","3","4"),
) COMMENT "Los estados se encuentran en un fichero de texto secuencialmente enumerados";

CREATE TABLE IF NOT EXISTS incidencias (
    id_i INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	id_t_i VARCHAR(6),
    fecha_i DATE NOT NULL,
    descripcion_i VARCHAR(255) NOT NULL, 
    estado_t_i VARCHAR(1),

    CONSTRAINT fk_it FOREIGN KEY (id_t_i) REFERENCES taquillas(id_t) ON DELETE CASCADE ON UPDATE SET NULL
);

CREATE TABLE IF NOT EXISTS reservas (
    id_r INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    dni_a_r VARCHAR(9),
    compartidaDNI_r VARCHAR(9),
    id_t_r VARCHAR(10),
    fecha_r DATE NOT NULL,
    fechaPago_r DATE,

    CONSTRAINT fk_ra FOREIGN KEY (dni_a_r) REFERENCES alumnos(dni_a) ON DELETE CASCADE ON UPDATE SET NULL,
    CONSTRAINT fk_rt FOREIGN KEY (id_t_r) REFERENCES taquillas(id_t) ON DELETE CASCADE ON UPDATE SET NULL
);