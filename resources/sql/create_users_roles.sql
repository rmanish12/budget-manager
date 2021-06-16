create table users_roles (
	id smallserial primary key,
	user_id integer references users(id) not null,
	role_id smallint references roles(id) not null
);