-- Terminal command to open connection to database
-- psql -d postgres://ibujopfv:c77X5vuThLgKIoyG6JVmnNscmjJfqmui@drona.db.elephantsql.com/ibujopfv -f stocks_postgres_create.sql
-- psql -d postgres://snuesdza:tRXD3mMdWahXfBAxshy_6bkmeSMSpEqh@isilo.db.elephantsql.com/snuesdza -f starwars_postgres_create.sql
-- timeout is disabled
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
-- backslashes are taken literally
SET standard_conforming_strings = on;
-- pg_catalog is system catalog schema
SELECT pg_catalog.set_config('search_path', '', false);
-- false means we are not doing validation
SET check_function_bodies = false;
SET xmloption = content;
-- Sets the message levels that are sent to the client
SET client_min_messages = warning;
SET row_security = off;
-- ^ learn more at https://postgresqlco.nf/doc/en/param/

-- OIDs are considered deprecated https://stackoverflow.com/questions/5625585/sql-postgres-oids-what-are-they-and-why-are-they-useful
CREATE TABLE public.users (
    "_id" serial NOT NULL,
    "fName" varchar(15) NOT NULL,
    "lName" varchar(15) NOT NULL,
    "image" varchar(100) NOT NULL,
    "funds" decimal(8,2) NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("_id")
);

-- User Initial $5000 ... buy 10 shares AAPL * $100/share = $1000. User Current = $4000, amount invested = $1000... 
-- AAPL shares increase to $110/share... User sells 5 shares... 5*110 = $550. User Current = $4550, amount invested = 1000 - 550 = $450 of 5 shares ... sell remaining 5 for $120

CREATE TABLE public.stocks (
    "_id" serial NOT NULL,
    "ticker" varchar(10) NOT NULL,
    "quantity" integer NOT NULL,
    CONSTRAINT "stocks_pk" PRIMARY KEY ("_id")
);

-- This is the join table between people and stocks 
CREATE TABLE public.portfolio (
    "_id" serial NOT NULL,
    "user_id" integer NOT NULL,
    "stock_id" integer NOT NULL,
    CONSTRAINT "portfolio_pk" PRIMARY KEY ("_id")
);

-- in a one to many relationship, the foreign key should be on the many table
-- add foreign key to users table
ALTER TABLE public.portfolio ADD CONSTRAINT "portfolio_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("_id");
ALTER TABLE public.portfolio ADD CONSTRAINT "portfolio_fk1" FOREIGN KEY ("stock_id") REFERENCES public.stocks("_id");