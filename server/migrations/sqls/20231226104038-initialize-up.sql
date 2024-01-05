/* Replace with your SQL commands */
-- Table: public.authentication

-- DROP TABLE IF EXISTS public.authentication;

CREATE TABLE IF NOT EXISTS public.authentication
(
    id integer NOT NULL,
    username character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT authentication_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.authentication
    OWNER to postgres;