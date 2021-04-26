-- Verify nftmarket:2021_04_26_create_user on pg

BEGIN;

-- XXX Add verifications here.
select 1 from user limit 1;

ROLLBACK;
