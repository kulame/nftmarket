-- Revert nftmarket:2021_04_26_create_user from pg

BEGIN;

-- XXX Add DDLs here.
drop table "user";
COMMIT;
