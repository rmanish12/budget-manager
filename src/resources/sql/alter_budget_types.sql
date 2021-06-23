alter table budget_types 
add column created_at timestamp not null default now(),
add column updated_at timestamp not null default now();

alter table budget_items
alter column user_id set not null,
alter column type_id set not null,
alter column category_id set not null;