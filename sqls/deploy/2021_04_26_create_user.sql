-- Deploy nftmarket:2021_04_26_create_user to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE "users" (
  "id" bigserial NOT NULL,
  "email" varchar(128) NOT NULL,
  "password_crypt" varchar(128) NOT NULL,
  "nickname" varchar(128),
  "avator" varchar(255)
);



COMMIT;
