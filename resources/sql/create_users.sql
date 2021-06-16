create type gender_types as enum('Male', 'Female', 'Not Disclosed');

create table users (
	id serial primary key,
	email varchar(50) unique not null,
	password varchar(255) not null constraint password_length_check check (length(password) >= 6),
	first_name varchar(20) not null constraint first_name_length_check check (length(trim(first_name)) > 0),
	last_name varchar(20),
	date_of_birth date not null ,
	gender gender_types not null default 'Not Disclosed',
	is_active boolean default true,
	created_at timestamp not null default now(),
	updated_at timestamp not null default now()
);