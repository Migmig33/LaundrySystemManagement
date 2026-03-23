-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2026 at 07:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_laundertrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customers`
--

CREATE TABLE `tbl_customers` (
  `CustomerID` int(11) NOT NULL,
  `RoleID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedbacks`
--

CREATE TABLE `tbl_feedbacks` (
  `FeedbackID` int(11) NOT NULL,
  `FeedbackDesc` varchar(100) DEFAULT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `OrdersID` int(11) NOT NULL,
  `Price` decimal(6,0) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `isPaid` tinyint(1) NOT NULL,
  `isFinished` tinyint(1) NOT NULL,
  `FeedbackID` int(11) DEFAULT NULL,
  `CustomerID` int(11) DEFAULT NULL,
  `ServiceTypeID` int(11) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_roles`
--

CREATE TABLE `tbl_roles` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(20) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

CREATE TABLE `tbl_services` (
  `ServiceTypeID` int(11) NOT NULL,
  `ServiceType` varchar(30) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `UserID` int(11) NOT NULL,
  `Name` varchar(70) NOT NULL,
  `Contact` varchar(12) NOT NULL,
  `Address` varchar(30) DEFAULT NULL,
  `Username` varchar(25) NOT NULL,
  `RoleID` int(11) DEFAULT NULL,
  `Password` varchar(25) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_customers`
--
ALTER TABLE `tbl_customers`
  ADD PRIMARY KEY (`CustomerID`),
  ADD KEY `fk_customerole` (`RoleID`),
  ADD KEY `fk_usercustomer` (`UserID`);

--
-- Indexes for table `tbl_feedbacks`
--
ALTER TABLE `tbl_feedbacks`
  ADD PRIMARY KEY (`FeedbackID`),
  ADD KEY `fk_customerfeedback` (`CustomerID`);

--
-- Indexes for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`OrdersID`),
  ADD KEY `fk_customerorder` (`CustomerID`),
  ADD KEY `fk_serviceorder` (`ServiceTypeID`),
  ADD KEY `fk_ordersfeedback` (`FeedbackID`);

--
-- Indexes for table `tbl_roles`
--
ALTER TABLE `tbl_roles`
  ADD PRIMARY KEY (`RoleID`);

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`ServiceTypeID`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `fk_userrole` (`RoleID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_customers`
--
ALTER TABLE `tbl_customers`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_feedbacks`
--
ALTER TABLE `tbl_feedbacks`
  MODIFY `FeedbackID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  MODIFY `OrdersID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_roles`
--
ALTER TABLE `tbl_roles`
  MODIFY `RoleID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `ServiceTypeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_customers`
--
ALTER TABLE `tbl_customers`
  ADD CONSTRAINT `fk_customerole` FOREIGN KEY (`RoleID`) REFERENCES `tbl_roles` (`RoleID`),
  ADD CONSTRAINT `fk_usercustomer` FOREIGN KEY (`UserID`) REFERENCES `tbl_users` (`UserID`);

--
-- Constraints for table `tbl_feedbacks`
--
ALTER TABLE `tbl_feedbacks`
  ADD CONSTRAINT `fk_customerfeedback` FOREIGN KEY (`CustomerID`) REFERENCES `tbl_customers` (`CustomerID`);

--
-- Constraints for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD CONSTRAINT `fk_customerorder` FOREIGN KEY (`CustomerID`) REFERENCES `tbl_customers` (`CustomerID`),
  ADD CONSTRAINT `fk_ordersfeedback` FOREIGN KEY (`FeedbackID`) REFERENCES `tbl_feedbacks` (`FeedbackID`),
  ADD CONSTRAINT `fk_serviceorder` FOREIGN KEY (`ServiceTypeID`) REFERENCES `tbl_services` (`ServiceTypeID`);

--
-- Constraints for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD CONSTRAINT `fk_roleuser` FOREIGN KEY (`RoleID`) REFERENCES `tbl_roles` (`RoleID`),
  ADD CONSTRAINT `fk_userrole` FOREIGN KEY (`RoleID`) REFERENCES `tbl_roles` (`RoleID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
