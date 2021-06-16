create table roles (
	id smallserial primary key,
	role varchar(50) not null,
	displayName varchar(50) not null,
	description varchar(100),
	created_at timestamp not null default now(),
	updated_at timestamp not null default now()
);