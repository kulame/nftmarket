-- Deploy nftmarket:2021_05_20_create_block to pg

BEGIN;

-- XXX Add DDLs here.
-- XXX Add DDLs here.
CREATE TABLE "blocks" (
  "id" bigserial NOT NULL,
  "block_id" varchar(128) NOT NULL,
  "parent_id" varchar(128) NOT NULL,
  "height" bigint NOT NULL,
  "timestamp" timestamp without time zone,
  "collection_guarantees" jsonb not null,
  "block_seals" jsonb not null,
  "signatures" varchar(128) [],
  unique (block_id)
);


COMMIT;
