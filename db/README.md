Here are the instructions how to setup the DB on your machine


1- Any change done to the tables must be added to the migratioins folder as a new file.

db/migrations/
├── 001_create_users_table.sql
├── 002_add_email_to_users.sql
└── 003_create_orders_table.sql

-- 001_create_users_table.sql : This file is used to create the users table.
-- 002_add_phone_to_users.sql : This file is used to add the phone number to the users table.
-- 003_create_orders_table.sql : This file is used to create the orders table.

2 - use the seeds folders to populate your DB (Any other data you want to seed into the DB must be added to this folder as a new file):

db/seeds/
├── users_seed.sql
├── products_seed.sql
└── orders_seed.sql




# Database Setup Guide

## Local Setup
1. Install Microsoft SQL Server.
2. Run the migration scripts in the `db/migrations/` folder.

## Connect to Shared Database
1. Use the following credentials:
   - SERVER: <server-name>
   - DATABASE: <database-name>
   - USERNAME: <username>
   - PASSWORD: <password>


