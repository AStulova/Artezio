create database firmdb;
use firmdb;

create table staff (
	id_stuff int (3) auto_increment not null primary key,
	first_name varchar(50) not null,
	last_name varchar(50) not null,
	post varchar(70) not null,
	salary int (6) not null
	);

create table ratio (
	chief int (3) not null,
	subordinate int (3) not null,
	foreign key (chief) references stuff (id_stuff),
	foreign key (subordinate) references stuff (id_stuff)
	);
	

insert into staff (first_name, last_name, post, salary) values
	('Igor', 'Pokrovski', 'Administrator', 40000),
	('Viktor', 'Tulpanov', 'Manager', 28000),
    ('Olga', 'Chernikina', 'Shop assistant', 18000),
	('Nina', 'Gerasimova', 'Shop assistant', 18000);

insert into ratio (chief, subordinate) values
	(1, 2),
    (1, 3),
    (1, 4),
    (2, 3),
    (2, 4);
    
select first_name, last_name, post from staff where salary<30000;
select first_name, last_name, post from staff where post like 'Shop assistant' and salary<30000;
select subordinate from ratio where chief=1;