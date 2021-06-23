create table roles_permissions (
	id smallserial primary key,
	role_id smallint references roles(id) not null,
	permission_id smallint references permissions(id) not null
);