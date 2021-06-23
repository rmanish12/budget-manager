create table categories (
	id smallserial primary key,
	type_id smallint references budget_types(id),
	name varchar(50) not null,
	description varchar(100)
);