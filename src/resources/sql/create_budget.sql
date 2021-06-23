create table budget (
	id serial primary key,
	user_id integer references users(id),
	type_id smallint references budget_types(id),
	amount numeric(10,2) not null,
	description varchar(255),
	date_of_transaction date not null,
	category_id smallint references categories(id),
	created_at timestamp not null default now(),
	updated_at timestamp not null default now()
);