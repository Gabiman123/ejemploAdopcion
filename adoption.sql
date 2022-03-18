-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para adoption_system
CREATE DATABASE IF NOT EXISTS `adoption_system` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `adoption_system`;

-- Volcando estructura para tabla adoption_system.adoptions
CREATE TABLE IF NOT EXISTS `adoptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `pet_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `pet_id` (`pet_id`),
  CONSTRAINT `FK_adoptions_pets` FOREIGN KEY (`pet_id`) REFERENCES `pets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_adoptions_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla adoption_system.adoptions: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `adoptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `adoptions` ENABLE KEYS */;

-- Volcando estructura para tabla adoption_system.pets
CREATE TABLE IF NOT EXISTS `pets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alias` varchar(150) NOT NULL,
  `type` enum('DOG','CAT') NOT NULL DEFAULT 'DOG',
  `color` varchar(20) NOT NULL,
  `notes` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla adoption_system.pets: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;

-- Volcando estructura para tabla adoption_system.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `address` varchar(150) NOT NULL,
  `phone` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla adoption_system.users: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
