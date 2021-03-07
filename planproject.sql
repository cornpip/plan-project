-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: planproject
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firsttime` datetime DEFAULT CURRENT_TIMESTAMP,
  `lasttime` datetime DEFAULT NULL,
  `title` varchar(30) NOT NULL,
  `description` text,
  `nick` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (80,'2021-02-24 16:59:35','2021-03-03 20:52:59','now','333333',''),(83,'2021-02-24 17:01:02','2021-02-25 01:49:59','888888','qqqqq',''),(84,'2021-02-24 17:01:03','2021-02-25 01:45:29','1111222','qqee',''),(85,'2021-02-24 17:01:55','2021-02-25 01:30:27','567','9933333333',''),(86,'2021-02-25 19:36:38',NULL,'22222','222222222',NULL),(87,'2021-02-25 19:36:52',NULL,'444444','444444444',NULL),(88,'2021-02-25 19:38:06',NULL,'5555555','555555555',NULL),(89,'2021-02-25 19:38:38',NULL,'77777','77777777',NULL),(90,'2021-02-25 19:42:00','2021-03-07 03:34:36','test12','Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web ...','tester'),(91,'2021-02-25 19:46:03',NULL,'10100110','10011010','34ac'),(92,'2021-02-25 21:53:28','2021-03-05 18:27:45','5551111','555555555555','tester'),(93,'2021-03-03 20:42:36',NULL,'01111','344487','tester'),(94,'2021-03-05 19:38:50',NULL,'test','331','qwer1234'),(95,'2021-03-05 22:12:51',NULL,'dddd','22222222222222','12ab'),(96,'2021-03-05 22:13:22',NULL,'3333','33333333','12ab'),(97,'2021-03-05 22:15:20','2021-03-05 22:15:24','11333','11111111111111','12345678'),(98,'2021-03-05 22:16:54',NULL,'커패시터 회로질문','5555555555555','hello'),(99,'2021-03-05 22:27:21','2021-03-07 03:35:17','lms듣고 포트폴리오 깃허브 커밋','게으름피지마','tester'),(100,'2021-03-05 22:27:53',NULL,'한글',':nth-child()와 :nth-last-child()는 특정 순서에 있는 요소를 선택할 때 사용하는 선택자입니다.\r\n:nth-child()는 앞에서부터 세고, :nth-last-child()는 뒤에서부터 셉니다.\r\n인터넷 익스플로러는 IE 9 이상에서 사용할 수 있습니다.','12ab'),(102,'2021-03-06 18:28:14',NULL,'컴퓨터구조','아직 안들었네 ㅠㅠ','tester');
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `teamid` int NOT NULL AUTO_INCREMENT,
  `teamname` varchar(45) NOT NULL,
  `teampass` varchar(50) NOT NULL,
  PRIMARY KEY (`teamid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (4,'test1','1111'),(5,'duly','1234'),(6,'111','222');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamplan`
--

DROP TABLE IF EXISTS `teamplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamplan` (
  `teamid` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` text,
  `nick` varchar(32) NOT NULL,
  `firsttime` datetime DEFAULT CURRENT_TIMESTAMP,
  `lasttime` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamplan`
--

LOCK TABLES `teamplan` WRITE;
/*!40000 ALTER TABLE `teamplan` DISABLE KEYS */;
INSERT INTO `teamplan` VALUES (5,'세션의 동작 순서','만약 session-id가 존재하지 않는다면 서버는 session-id를 생성해 클라이언트에게 돌려준다.\r\n\r\n4. 서버에서 클라이언트로 돌려준 session-id를 쿠키를 사용해 서버에 저장한다(쿠키 이름은 JSESSIONID).\r\n\r\n5. 클라이언트는 재접속 시, 이 쿠키(JSESSIONID)를','tester','2021-03-06 19:57:13',NULL),(5,'1111111','111111111111111','12ab','2021-03-06 23:37:07',NULL);
/*!40000 ALTER TABLE `teamplan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `number` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(64) NOT NULL,
  `user_password` varchar(64) NOT NULL,
  `nick` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'5555','$2a$10$hUTmnTHMCHlwwf0XsmUbGeHqbB.z5T8hxadwLKZ8nV42HaqllHhMS','tester'),(12,'hello','$2a$10$DX4sUvifTD7cjRA1gbRDleED4mMaMBIF5wenojajO2L5MAm/v04Pm','1234'),(13,'1234','$2a$10$I4lvYQbyfw0gtr1ZvhKsu.koxrVWlni9d0j1npHnWYKhn5DzhVvIa','12345678'),(14,'12','$2a$10$nXih65EBFZyn7q95vG7yMuAVKmfiIv.WadVzxfnQWIpPplmbFXpuS','12ab'),(15,'34','$2a$10$FBh0ABtpigcAOwD746kbaOCga70oKJz0PFv/aorMaIWsJHsSsd/Hu','34ac'),(16,'123','$2a$10$4oYgbQ10BChU8xcnRkDume361FPposkWs70ddwJepOcsorRnl9TBa','123aas'),(17,'159','$2a$10$ygfMIdwET1s2/gU3DqO6buS0F4EW8dtDT.9IpNOt/SNNU1jZmkRX2','159hhq'),(18,'soil','$2a$10$2u6Li5ORfc.xXTFAztwrD.UNI55/KT4fYK5hng7yFnNSpfsGuKcw6','soil159'),(19,'he','$2a$10$Yod8BeSNXJhl6iVrb2mer.JzphXYdpHN0gGVmHlD4Pd8mnmMSZ6WO','hello'),(20,'12','$2a$10$pkUQewknoHuP/Zkbon4.I.f0XNdgVZo3vzMW1L1mMk.FXNORIGm9O','1279'),(21,'159','$2a$10$U81PSXWHHZX/dnXlp4DHi.CADN.ir7Q8ZQqlswd41zCbDwM8bmP5S','159777'),(22,'49','$2a$10$bDtXFRWLL2mN9NKfeca.guBJXo3kS0gakdvrYtB8kNNDbVO4T0cKS','4915'),(23,'334','$2a$10$rmaxSVC6vyPgAUi/P.0PPeJXuWsWohl3m5KsHVA.8kZ9u/dcFzB0q','334456'),(24,'46','$2a$10$zIwFlCGLdXiFtfyFdcZCcuGzBXW9RVJGGKs1z0JAw55UjqwVY4mbC','4680'),(25,'ㅁㅁㅁㅁ','$2a$10$fHheNirzfYgz9QvDNOcN6OZKzZNclc45I80/fCOe0BEdPogtxbUO2','ㅁㅁㅁㅁ1234'),(26,'qw','$2a$10$Ugzp79xHQJo4A/lr6tK8VekVgp614Ki9GlHk531jn2/M2OV02rqBm','qwac'),(27,'qwer','$2a$10$eDgfLwhDa75XKlpxc6fP/./5R0Lz4rmVYyVKQgHgX3UZq/M.WzAUy','qwer1234'),(28,'qwer','$2a$10$snxbp.lcOYtFhtHgJUxtWOU1br6CftiJLaOeHT7c6yIriDOi.gS9a','qwer1234');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'planproject'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-07 18:01:19
