-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 24-02-2021 a las 10:44:53
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `administraciontaquillas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--
USE administraciontaquillas;

CREATE TABLE `administrador` (
  `correo` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `pasword` varchar(20) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`correo`, `pasword`) VALUES
('gonamorosdaniel@gmail.com', 'daniel'),
('jaumatino@gmail.com', 'jaime');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `dni_a` varchar(9) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `nia_a` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `foto_a` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre_a` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `ape_a` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `ape2_a` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `curso_a` enum('ESO','BACHILLER','GRADO') COLLATE utf8_spanish_ci DEFAULT NULL,
  `poblacion_a` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `direccion_a` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombreP_a` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefonoP_a` varchar(9) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombreM_a` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefonoM_a` varchar(9) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email_a` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `password_a` varchar(6) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `tieneReserva_a` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`dni_a`, `nia_a`, `foto_a`, `nombre_a`, `ape_a`, `ape2_a`, `curso_a`, `poblacion_a`, `direccion_a`, `nombreP_a`, `telefonoP_a`, `nombreM_a`, `telefonoM_a`, `email_a`, `password_a`, `tieneReserva_a`) VALUES
('05599699G', NULL, NULL, 'Jorge', 'Benítez Pérez', NULL, 'GRADO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '123456', NULL),
('28665100Q', NULL, NULL, 'Luis', 'Edisson Celada Vilchez', NULL, 'BACHILLER', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '232323', 1),
('38736083N', NULL, NULL, 'Katy', 'Perry Roar', NULL, 'GRADO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '989877', NULL),
('72930692S', NULL, NULL, 'Antonio', 'Cabezudo', NULL, 'ESO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '141232', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosgenerales`
--

CREATE TABLE `datosgenerales` (
  `codCentro_d` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `nomCentro_d` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `plantas_d` varchar(1) COLLATE utf8_spanish_ci DEFAULT NULL,
  `zonas_d` varchar(1) COLLATE utf8_spanish_ci DEFAULT NULL,
  `numTaquillas_d` varchar(3) COLLATE utf8_spanish_ci DEFAULT NULL,
  `direccion_d` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email_d` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_d` varchar(9) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidencias`
--

CREATE TABLE `incidencias` (
  `id_i` int(11) NOT NULL,
  `id_t_i` varchar(6) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_i` date NOT NULL,
  `descripcion_i` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `estado_t_i` varchar(1) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_r` int(11) NOT NULL,
  `dni_a_r` varchar(9) CHARACTER SET latin1 COLLATE latin1_general_cs DEFAULT NULL,
  `compartidaDNI_r` varchar(9) COLLATE utf8_spanish_ci DEFAULT NULL,
  `id_t_r` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_r` date NOT NULL,
  `fechaPago_r` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id_r`, `dni_a_r`, `compartidaDNI_r`, `id_t_r`, `fecha_r`, `fechaPago_r`) VALUES
(5, '72930692S', NULL, NULL, '2021-02-21', '2021-02-21'),
(6, '72930692S', NULL, '103302', '2021-02-21', '2021-02-21'),
(7, '72930692S', NULL, NULL, '2021-02-21', '2021-02-21'),
(8, '72930692S', NULL, NULL, '2021-02-21', '2021-02-23'),
(9, '28665100Q', NULL, NULL, '2021-02-23', '2021-02-24'),
(10, '28665100Q', NULL, NULL, '2021-02-23', '2021-02-23'),
(11, '28665100Q', NULL, NULL, '2021-02-24', '2021-02-24'),
(12, '28665100Q', NULL, NULL, '2021-02-24', '2021-02-24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `taquillas`
--

CREATE TABLE `taquillas` (
  `id_t` varchar(6) COLLATE utf8_spanish_ci NOT NULL,
  `estado_t` varchar(1) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nivel_t` varchar(4) COLLATE utf8_spanish_ci DEFAULT NULL,
  `zonas` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `taquillas`
--

INSERT INTO `taquillas` (`id_t`, `estado_t`, `nivel_t`, `zonas`) VALUES
('000120', '1', '0', 0),
('001121', '1', '2', 1),
('009922', '4', '0', 0),
('010923', '3', '2', 1),
('011210', '4', '0', 0),
('015411', '2', '0', 0),
('016712', '3', '0', 0),
('016813', '2', '2', 1),
('101600', '3', '1', 1),
('102201', '1', '2', 1),
('103302', '2', '1', 1),
('105503', '1', '1', 0),
('107620', '1', '1', 0),
('111121', '4', '1', 1),
('113322', '2', '1', 1),
('116523', '1', '1', 0),
('201210', '1', '2', 1),
('202411', '2', '0', 0),
('204512', '1', '2', 1),
('210213', '3', '2', 1),
('210400', '1', '1', 0),
('211001', '1', '0', 0),
('212402', '1', '2', 1),
('219703', '3', '0', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`correo`);

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`dni_a`),
  ADD KEY `dni_a` (`dni_a`);

--
-- Indices de la tabla `datosgenerales`
--
ALTER TABLE `datosgenerales`
  ADD PRIMARY KEY (`codCentro_d`);

--
-- Indices de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`id_i`),
  ADD KEY `fk_it` (`id_t_i`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_r`),
  ADD KEY `fk_rt` (`id_t_r`),
  ADD KEY `dni_a_r` (`dni_a_r`);

--
-- Indices de la tabla `taquillas`
--
ALTER TABLE `taquillas`
  ADD PRIMARY KEY (`id_t`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `incidencias`
--
ALTER TABLE `incidencias`
  MODIFY `id_i` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_r` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `incidencias`
--
ALTER TABLE `incidencias`
  ADD CONSTRAINT `fk_it` FOREIGN KEY (`id_t_i`) REFERENCES `taquillas` (`id_t`) ON DELETE CASCADE ON UPDATE SET NULL;

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `fk_rt` FOREIGN KEY (`id_t_r`) REFERENCES `taquillas` (`id_t`) ON DELETE CASCADE ON UPDATE SET NULL,
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`dni_a_r`) REFERENCES `alumnos` (`dni_a`) ON DELETE CASCADE ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
