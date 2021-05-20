-- Revert nftmarket:2021_05_20_create_block from pg

BEGIN;

-- XXX Add DDLs here.
drop table "blocks";

COMMIT;
