create schema comkub;
-- drop database comkub;
use comkub;

create table notebook (
	notebook_id int auto_increment primary key not null,
    brand varchar(255) not null,
    model varchar(255) not null,
    model_year varchar(255) not null,
    notebook_name varchar(255) not null,
    category varchar(255) not null,
    price int not null,
    cpu varchar(255) not null,
    gpu varchar(255) not null,
    ram varchar(255) not null,
    display varchar(255) not null,
    storage varchar(255) not null,
    os varchar(255) not null,
    pic_path VARCHAR(255) not null,
    link varchar(255)
);
-- drop table notebook;

create table user (
	userid int auto_increment not null primary key,
	username varchar(255) unique not null ,
    password varchar(255) not null,
    birthday date not null,
    gender varchar(10) not null,
    email varchar(255) not null
);
-- drop table user;

create table bookmark (
	bookmarkid int auto_increment not null primary key,
	userid int not null ,
    notebook_id int not null,
    FOREIGN KEY (userid) REFERENCES user(userid),
	FOREIGN KEY (notebook_id) REFERENCES notebook(notebook_id)
);
drop table bookmark;

create table review (
	reviewid int auto_increment not null primary key,
	userid int not null ,
    notebook_id int not null,
    review_title varchar(255),
    perfromance_score int,
    service_score int,
	FOREIGN KEY (userid) REFERENCES user(userid),
	FOREIGN KEY (notebook_id) REFERENCES notebook(notebook_id)

);
-- drop table review;
 
 INSERT INTO user (username,password,birthday,gender,email) VALUES ('BankDesu','bank2739','2003-07-01','Male',''); 

 select * from user ;