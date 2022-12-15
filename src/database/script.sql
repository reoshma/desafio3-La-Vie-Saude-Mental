-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atendimentos`
--

DROP TABLE IF EXISTS `atendimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atendimentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_atendimento` date DEFAULT NULL,
  `observacao` text,
  `id_psicologo` int DEFAULT NULL,
  `id_paciente` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_atendimentos_psicologos_idx` (`id_psicologo`),
  KEY `fk_atendimentos_pacientes1_idx` (`id_paciente`),
  CONSTRAINT `fk_atendimentos_pacientes1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_atendimentos_psicologos` FOREIGN KEY (`id_psicologo`) REFERENCES `psicologos` (`id_psicologo`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atendimentos`
--

LOCK TABLES `atendimentos` WRITE;
/*!40000 ALTER TABLE `atendimentos` DISABLE KEYS */;
INSERT INTO `atendimentos` VALUES (8,'2022-11-20','consulta 8',1,6),(9,'2022-05-23','consulta 9',1,6),(10,'2022-12-15','consulta 10',5,2),(11,'2022-10-05','consulta 11',4,6),(12,'2022-09-22','consulta 12',4,6),(13,'2022-08-26','consulta 13',7,2),(14,'2022-08-05','consulta 14',8,3),(15,'2022-08-05','consulta 14',5,7),(16,'2022-08-05','consulta 15',3,3),(17,'2022-08-05','consulta 16',4,4),(18,'2022-07-15','consulta 17',5,5);
/*!40000 ALTER TABLE `atendimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes` (
  `id_paciente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `idade` date DEFAULT NULL,
  PRIMARY KEY (`id_paciente`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES (1,'joao','email@email.com','1999-09-22'),(2,'sabrina','email@email.com','2001-09-22'),(3,'enzo','email@email.com','2005-09-22'),(4,'gabriela','email@email.com','2005-09-22'),(5,'roberta','email@email.com','1994-09-22'),(6,'larissa','email@email.com','2004-09-22'),(7,'maria','email@email.com','1995-09-22'),(8,'claudia','email@email.com','1990-09-22');
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psicologos`
--

DROP TABLE IF EXISTS `psicologos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psicologos` (
  `id_psicologo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `apresentacao` text,
  PRIMARY KEY (`id_psicologo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psicologos`
--

LOCK TABLES `psicologos` WRITE;
/*!40000 ALTER TABLE `psicologos` DISABLE KEYS */;
INSERT INTO `psicologos` VALUES (1,'Felipe','felipe@email.com','$2a$10$k6AzJ9e2BPEGQaHGQBuYxOmQax/.642xD/ijiqdw6u53SbJE8wIBS','rescem formado'),(2,'Samuel','samuel@email.com','$2a$10$CTwOkCXR.GD2ngxUn4YSjepCGGJZ3NrZEO74VC0mcsOvL08BzMova','Psicologo de gente estressada'),(3,'Julia','julia@email.com','$2a$10$LfxPjtkdnjSHEm35ZcrvQe7ly24AvU2SUlRqkjP7gT08Ld52tiRuy','Psicologa especializada em crianças'),(4,'Claudia','claudia@email.com','$2a$10$4zMTd12wqvpq7XqBe24s0eS3x88vjuEzfMRszHtl.GWhphW6Ff0fK','Psicologa especializada terapia comportamental'),(5,'Maria','maria@email.com','$2a$10$U7Iy9pHKpVxPMrEcUd2f..uYBePRi4MX8DLknEOEkBsAnSnEMFoPG','Psicologa mais experiente da casa'),(6,'Carlos','carlos@email.com','$2a$10$nlQDFE7BN9ZPoD7xY9gxMOMqjf9CVc8aT1nHCHyjcETL6jyz5QlZ2','Segue o lema: Fala que eu te escuto'),(7,'Robson','robson@email.com','$2a$10$2fwlWGxzKVgoe5LeR.v9uOakzG.4T2WjJABKWQAP6CrwIiFYXbWjO','Ele trabalha aqui?'),(8,'Joseria','joseria@email.com','$2a$10$uezlgb.84cjIh50ei/fKWuvIhQr87g8/kFU54ktDyRAxzCV4tsG7O','É sincera com os conselhos'),(10,'teste','email@email.com','$2a$10$YEi4nlYXMAeVRbG7lf0XXOj8SU9ryjoxGxrPNOrBWco.vw8M/pB3S','É sincera com os conselhos');
/*!40000 ALTER TABLE `psicologos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'mydb'
--

--
-- Dumping routines for database 'mydb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 16:14:59
