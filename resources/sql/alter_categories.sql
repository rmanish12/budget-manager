alter table categories 
add column created_at timestamp not null default now(),
add column updated_at timestamp not null default now();

alter table categories alter column type_id set not null;