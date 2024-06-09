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
    performance_score FLOAT DEFAULT 0,
    service_score FLOAT DEFAULT 0
);
-- drop table notebook;

create table user (
	userid int auto_increment not null primary key,
	username varchar(255) unique not null ,
    password varchar(255) not null,
    email varchar(255) not null
);
-- drop table user;

create table review (
	reviewid int auto_increment not null primary key,
	userid int not null ,
    notebook_id int not null,
    performance_score FLOAT,
    service_score FLOAT,
	FOREIGN KEY (userid) REFERENCES user(userid),
	FOREIGN KEY (notebook_id) REFERENCES notebook(notebook_id)
);
-- drop table review;
 
 -- INSERT INTO user (username,password,email) VALUES ('BankDesu','bank2739','psuwimonopas@gmail.com'); 
 
 select * from user ;
 
 insert into notebook (brand,model,model_year,notebook_name,category,price,cpu,gpu,ram,display,storage,os,pic_path) values
(
	'MSI','Prestige 16 AI Studio B1VFG-028TH','Jan 2024','MSI Prestige 16 AI Studio B1VFG-028TH','gaming',
	72990,'Intel Core Ultra 7 155H','NVIDIA GeForce RTX 4060','32 GB LPDDR5 On Board6400 MHz',
	'16.0 inch, QHD (2560 x 1600)','1TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13239-1.png'
);
select * from notebook;

select * from review;