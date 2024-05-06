-- Contains commands for dropping/creating our database depending on answers to prompts. 

\echo 'Delete and recreate photo_gallery db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE photo_gallery;
CREATE DATABASE photo_gallery;
\connect photo_gallery

\i photo_gallery-schema.sql
\i photo_gallery-seed.sql

\echo 'Delete and recreate photo_gallery_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE photo_gallery_test;
CREATE DATABASE photo_gallery_test;
\connect photo_gallery_test

\i photo_gallery-schema.sql