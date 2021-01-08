CREATE TABLE angle_requests(
	req_id serial PRIMARY KEY,
	req_hour integer NOT NULL,
	req_minute integer,
	req_angle integer,
	req_date date
);