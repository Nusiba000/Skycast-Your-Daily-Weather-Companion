-- Create the database (UTF-8)
CREATE DATABASE IF NOT EXISTS skycast_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Switch to it
USE skycast_db;

-- Create a least-privilege app user (local only)
CREATE USER IF NOT EXISTS 'skycast_user'@'localhost' IDENTIFIED BY 'super_secret_password';

-- Grant only what we need (read/write)
GRANT SELECT, INSERT, UPDATE, DELETE ON skycast_db.* TO 'skycast_user'@'localhost';
FLUSH PRIVILEGES;

-- Create the table for logging searches
CREATE TABLE IF NOT EXISTS searches (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  city VARCHAR(100) NOT NULL,
  units ENUM('metric','imperial') NOT NULL DEFAULT 'metric',
  ip VARCHAR(45) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_city (city),
  KEY idx_created (created_at)
);
