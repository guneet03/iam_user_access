-- Create the database
CREATE DATABASE IF NOT EXISTS iam_user_access;

-- Use the database
USE iam_user_access;

-- Drop the table if it exists (optional - for testing)
DROP TABLE IF EXISTS user_access;

-- Create the table
CREATE TABLE user_access (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    role VARCHAR(50) NOT NULL,
    access_area VARCHAR(100),
    approver VARCHAR(100),
    grant_date DATE,
    revoke_date DATE,
    status ENUM('Active', 'Revoked') DEFAULT 'Active',
    comments TEXT
);
