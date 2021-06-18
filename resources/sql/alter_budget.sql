alter table budget rename to budget_items;

alter table budget_items rename column type_id to budget_type;
alter table budget_items rename column category_id to category;
alter table budget_items rename column user_id to "user";