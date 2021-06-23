create table permissions (
	id smallserial primary key,
	permission varchar(50) not null,
	displayName varchar(50) not null,
	description varchar(100),
	created_at timestamp not null default now(),
	updated_at timestamp not null default now()
);