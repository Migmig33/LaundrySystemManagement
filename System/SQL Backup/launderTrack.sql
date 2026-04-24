/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `db_laundertrack` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `db_laundertrack`;

CREATE TABLE IF NOT EXISTS `tbl_customers` (
  `CustomerID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`CustomerID`),
  KEY `idx_customer_role` (`RoleID`),
  KEY `idx_customer_user` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tbl_customers` (`CustomerID`, `RoleID`, `UserID`, `CreatedAt`, `ModifiedAt`) VALUES
	(1, 2, 2, '2026-04-19 23:30:50', NULL),
	(2, 2, 3, '2026-04-19 23:30:50', NULL),
	(3, 2, 4, '2026-04-19 23:30:50', NULL),
	(4, 2, 5, '2026-04-19 23:30:50', NULL),
	(5, 2, 6, '2026-04-19 23:30:50', NULL),
	(6, 2, 7, '2026-04-19 23:30:50', NULL),
	(7, 2, 8, '2026-04-19 23:30:50', NULL),
	(8, 2, 9, '2026-04-19 23:30:50', NULL),
	(9, 2, 10, '2026-04-19 23:30:50', NULL),
	(10, 2, 11, '2026-04-19 23:30:50', NULL),
	(11, 2, 0, '2026-04-22 21:44:44', '2026-04-22 21:44:44'),
	(12, 2, 0, '2026-04-22 21:47:19', '2026-04-22 21:47:19'),
	(13, 2, 14, '2026-04-22 21:51:03', '2026-04-22 21:51:03'),
	(14, 2, 15, '2026-04-24 00:41:56', '2026-04-24 00:41:56');

CREATE TABLE IF NOT EXISTS `tbl_feedbacks` (
  `FeedbackID` int(11) NOT NULL AUTO_INCREMENT,
  `FeedbackDesc` varchar(100) DEFAULT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `OrderID` int(11) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`FeedbackID`),
  KEY `idx_feedback_customer` (`CustomerID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tbl_feedbacks` (`FeedbackID`, `FeedbackDesc`, `CustomerID`, `OrderID`, `CreatedAt`, `ModifiedAt`) VALUES
	(1, 'Great service!', 1, 1, '2026-04-19 23:30:51', NULL),
	(3, 'Affordable price', 3, 3, '2026-04-19 23:30:51', NULL),
	(4, 'Very satisfied', 4, 4, '2026-04-19 23:30:51', NULL),
	(5, 'Will order again', 5, 5, '2026-04-19 23:30:51', NULL),
	(13, 'FASTER NIGGGGGGA', 2, 2, '2026-04-24 22:50:15', '2026-04-24 22:50:15');

CREATE TABLE IF NOT EXISTS `tbl_orders` (
  `OrderID` int(11) NOT NULL AUTO_INCREMENT,
  `Quantity` int(11) NOT NULL,
  `isPaid` tinyint(1) NOT NULL,
  `isFinished` tinyint(1) NOT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `ServiceTypeID` int(11) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`OrderID`),
  KEY `idx_order_customer` (`CustomerID`),
  KEY `idx_order_service` (`ServiceTypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tbl_orders` (`OrderID`, `Quantity`, `isPaid`, `isFinished`, `CustomerID`, `ServiceTypeID`, `CreatedAt`, `ModifiedAt`) VALUES
	(1, 3, 1, 0, 1, 1, '2026-04-19 23:30:50', NULL),
	(2, 2, 1, 1, 2, 2, '2026-04-19 23:30:50', NULL),
	(3, 5, 1, 1, 3, 3, '2026-04-19 23:30:50', NULL),
	(4, 1, 1, 1, 4, 1, '2026-04-19 23:30:50', NULL),
	(5, 4, 0, 0, 5, 4, '2026-04-19 23:30:50', NULL),
	(6, 2, 1, 0, 6, 2, '2026-04-19 23:30:50', NULL),
	(7, 6, 1, 1, 7, 3, '2026-04-19 23:30:50', NULL),
	(8, 3, 0, 0, 8, 1, '2026-04-19 23:30:50', NULL),
	(9, 2, 1, 1, 9, 4, '2026-04-19 23:30:50', NULL),
	(10, 1, 0, 0, 10, 2, '2026-04-19 23:30:50', NULL),
	(11, 1, 1, 0, 1, 1, '2026-04-20 02:08:05', '2026-04-20 02:08:05'),
	(12, 34, 1, 0, 4, 2, '2026-04-20 02:10:59', '2026-04-20 02:10:59'),
	(13, 34, 1, 0, 0, 0, '2026-04-20 02:14:32', '2026-04-20 02:14:32'),
	(15, 11119, 1, 0, 0, 0, '2026-04-20 02:20:18', '2026-04-20 02:24:53'),
	(16, 100, 1, 0, 0, 0, '2026-04-20 02:23:05', '2026-04-20 02:23:05'),
	(17, 100, 1, 0, 0, 0, '2026-04-20 02:23:37', '2026-04-20 02:23:37');

CREATE TABLE IF NOT EXISTS `tbl_roles` (
  `RoleID` int(11) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(20) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`RoleID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tbl_roles` (`RoleID`, `RoleName`, `CreatedAt`, `ModifiedAt`) VALUES
	(1, 'Admin', '2026-04-19 23:30:50', NULL),
	(2, 'Customer', '2026-04-19 23:30:50', NULL);

CREATE TABLE IF NOT EXISTS `tbl_services` (
  `ServiceTypeID` int(11) NOT NULL AUTO_INCREMENT,
  `ServiceType` varchar(30) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ServiceTypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tbl_services` (`ServiceTypeID`, `ServiceType`, `Price`, `CreatedAt`, `ModifiedAt`) VALUES
	(1, 'Wash', 50, '2026-04-19 23:30:50', '2026-04-20 00:43:09'),
	(2, 'Dry Clean', 100, '2026-04-19 23:30:50', '2026-04-20 00:43:10'),
	(3, 'Iron', 30, '2026-04-19 23:30:50', '2026-04-20 00:43:11'),
	(4, 'Wash + Fold', 80, '2026-04-19 23:30:50', '2026-04-20 00:43:55'),
	(6, 'BURGER', 200, '2026-04-24 03:29:05', '2026-04-24 03:29:05');

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(70) NOT NULL,
  `Contact` varchar(12) NOT NULL,
  `Address` varchar(30) DEFAULT NULL,
  `Username` varchar(25) NOT NULL,
  `RoleID` int(11) DEFAULT NULL,
  `Password` varchar(25) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  KEY `idx_user_role` (`RoleID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tbl_users` (`UserID`, `Name`, `Contact`, `Address`, `Username`, `RoleID`, `Password`, `CreatedAt`, `ModifiedAt`, `isActive`) VALUES
	(1, 'POGi', '09170000001', 'Manila', 'admin', 1, 'pass123', '2026-04-19 23:30:50', '2026-04-23 22:36:24', 1),
	(2, 'Miguel', '09170000001', 'Manila', 'cust1', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(3, 'Juanlalla', '09170000002', 'Manila', 'cust2', 2, 'pass123', '2026-04-19 23:30:50', '2026-04-23 22:39:07', 1),
	(4, 'Tamad', '09170000003', 'Manila', 'cust3', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(5, 'Boss Atan', '09170000004', 'Manila', 'cust4', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(6, 'Dogie', '09170000005', 'Manila', 'cust5', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(7, 'Central Bhie', '09170000006', 'Manila', 'cust6', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(8, 'Drake', '09170000007', 'Manila', 'cust7', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(9, 'Ishowspeed', '09170000008', 'Manila', 'cust8', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(10, 'Naruto', '09170000009', 'Manila', 'cust9', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(11, 'Avatar', '09170000010', 'Manila', 'cust10', 2, 'pass123', '2026-04-19 23:30:50', NULL, 1),
	(12, 'Miguel Pogi', '92929', 'Pagitan', 'miguelPogi', 2, '123', '2026-04-22 21:44:43', '2026-04-22 21:44:43', 1),
	(13, 'lL', 'KKKW', 'K', 'K', 2, 'K', '2026-04-22 21:47:19', '2026-04-22 21:47:19', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
