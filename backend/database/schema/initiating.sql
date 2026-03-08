-- Initialize the database schema for the stakeholder management system

/* ===============================
   Database: stakeholder_management
   =============================== */

CREATE DATABASE IF NOT EXISTS stakeholder_management
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE stakeholder_management;

/* ===============================
   Table: users
   =============================== */
   CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(120) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
role ENUM('admin','manager','analyst','viewer') DEFAULT 'viewer',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* ===============================
   Table: stakeholder_groups
   =============================== */
CREATE TABLE stakeholder_groups (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(150) NOT NULL,
description TEXT,
created_by INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (created_by) REFERENCES users(id)
ON DELETE SET NULL
);


/* ===============================
   Table: stakeholders
   =============================== */
   CREATE TABLE stakeholders (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(150) NOT NULL,
organization VARCHAR(150),
position VARCHAR(150),

type ENUM(
'internal',
'external',
'government',
'community',
'partner'
) DEFAULT 'external',

group_id INT,

influence_level ENUM(
'low',
'medium',
'high'
) DEFAULT 'medium',

interest_level ENUM(
'low',
'medium',
'high'
) DEFAULT 'medium',

support_level ENUM(
'supporter',
'neutral',
'opponent'
) DEFAULT 'neutral',

phone VARCHAR(50),
email VARCHAR(120),
location VARCHAR(150),

notes TEXT,

created_by INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (group_id) REFERENCES stakeholder_groups(id)
ON DELETE SET NULL,

FOREIGN KEY (created_by) REFERENCES users(id)
ON DELETE SET NULL
);



/* ===============================
   Table: interactions
   =============================== */
   CREATE TABLE interactions (
id INT AUTO_INCREMENT PRIMARY KEY,

stakeholder_id INT NOT NULL,

interaction_type ENUM(
'meeting',
'call',
'email',
'visit',
'message'
) NOT NULL,

subject VARCHAR(200),

description TEXT,

interaction_date DATE,

result TEXT,

next_action TEXT,

created_by INT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (stakeholder_id) REFERENCES stakeholders(id)
ON DELETE CASCADE,

FOREIGN KEY (created_by) REFERENCES users(id)
ON DELETE SET NULL
);

/* ===============================
   Table: issues
   =============================== */
   CREATE TABLE issues (
id INT AUTO_INCREMENT PRIMARY KEY,

stakeholder_id INT NOT NULL,

title VARCHAR(200) NOT NULL,

description TEXT,

status ENUM(
'open',
'in_progress',
'resolved',
'closed'
) DEFAULT 'open',

priority ENUM(
'low',
'medium',
'high'
) DEFAULT 'medium',

created_by INT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (stakeholder_id) REFERENCES stakeholders(id)
ON DELETE CASCADE,

FOREIGN KEY (created_by) REFERENCES users(id)
ON DELETE SET NULL
);


-- Indexes for performance optimization

CREATE INDEX idx_stakeholder_group
ON stakeholders(group_id);

CREATE INDEX idx_interaction_stakeholder
ON interactions(stakeholder_id);

CREATE INDEX idx_issue_stakeholder
ON issues(stakeholder_id);