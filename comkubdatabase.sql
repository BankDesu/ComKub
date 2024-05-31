create schema comkub;
-- drop database comkub;
use comkub;

create table notebook (
	notebook_id int auto_increment primary key not null,
    brand varchar(255),
    model varchar(255),
    model_year varchar(255),
    notebook_name varchar(255),
    category varchar(255),
    price int ,
    cpu varchar(255),
    gpu varchar(255),
    ram varchar(255),
    ram_slot varchar(255),
    max_cap  varchar(255),
    display varchar(255),
    Panel varchar(255),
    Resolution  varchar(255),
    Refresh_Rate varchar(255),
    storage varchar(255),
    HDD varchar(255),
    SSD varchar(255),
    M2 varchar(255),
    USB_port varchar(255),
    HDMI varchar(255),
    DisplayPort varchar(255),
    os varchar(255),
    link varchar(255)
);
-- drop table notebook;

create table CPU(
	cpu varchar(255) primary key,
    Core varchar(255),
    Threads varchar(255),
	Cache varchar(255),
    TDP varchar(255)
);
-- drop table CPU;

create table GPU(
	gpu varchar(255) primary key,
    Clock_speed varchar(255),
    Memory_size  varchar(255),
    TGP varchar(255)
);
-- drop table GPU;

create table notebook_pic(
	notebook_id int not null,
    pic1 varchar(255),
    pic2  varchar(255),
    pic3 varchar(255),
    pic4 varchar(255),
    foreign key (notebook_id) references notebook(notebook_id)
);
-- drop table notebook_pic;

create table username (
	username varchar(255) unique not null primary key,
    password varchar(255) not null,
    gender varchar(10) not null,
    email varchar(255)
);
-- drop table username;


create table bookmark (
	username varchar(255) not null ,
    notebook_id int not null,
    FOREIGN KEY (username) REFERENCES username(username),
	FOREIGN KEY (notebook_id) REFERENCES notebook(notebook_id)

);
-- drop table bookmark;

create table review (
	username varchar(255) not null ,
    notebook_id int not null,
    review_title varchar(255),
    score int,
	FOREIGN KEY (username) REFERENCES username(username),
	FOREIGN KEY (notebook_id) REFERENCES notebook(notebook_id)

);
-- drop table review;


-- select * from notebook ;
