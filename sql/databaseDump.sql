--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: angle_requests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.angle_requests (
    req_id integer NOT NULL,
    req_hour integer NOT NULL,
    req_minute integer,
    req_angle real,
    req_date date
);


ALTER TABLE public.angle_requests OWNER TO postgres;

--
-- Name: angle_requests_req_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.angle_requests_req_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.angle_requests_req_id_seq OWNER TO postgres;

--
-- Name: angle_requests_req_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.angle_requests_req_id_seq OWNED BY public.angle_requests.req_id;


--
-- Name: angle_requests req_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.angle_requests ALTER COLUMN req_id SET DEFAULT nextval('public.angle_requests_req_id_seq'::regclass);


--
-- Data for Name: angle_requests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.angle_requests (req_id, req_hour, req_minute, req_angle, req_date) FROM stdin;
1	9	0	90	2021-01-08
2	9	7	128.5	2021-01-10
3	9	17	176.5	2021-01-10
4	9	18	171	2021-01-10
5	9	19	165.5	2021-01-10
6	9	20	160	2021-01-10
7	9	21	154.5	2021-01-10
8	9	22	149	2021-01-10
9	9	23	143.5	2021-01-10
10	9	24	138	2021-01-10
11	9	25	132.5	2021-01-10
12	9	26	127	2021-01-10
13	9	27	121.5	2021-01-10
14	9	28	116	2021-01-10
\.


--
-- Name: angle_requests_req_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.angle_requests_req_id_seq', 14, true);


--
-- Name: angle_requests angle_requests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.angle_requests
    ADD CONSTRAINT angle_requests_pkey PRIMARY KEY (req_id);


--
-- PostgreSQL database dump complete
--

