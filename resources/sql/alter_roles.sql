alter table roles
rename displayname to display_name;

alter table roles
add constraint unique_role unique(role);