-- Verify nftmarket:2021_05_20_create_block on pg

BEGIN;

-- XXX Add verifications here.
select 1 from blocks limit 1
ROLLBACK;
