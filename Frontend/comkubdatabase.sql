-- create schema comkub;
-- use comkub;

create table notebook (
	notebook_id int auto_increment primary key not null,
    notebook_name varchar(255),
    price int ,
    cpu varchar(255),
    gpu varchar(255),
    ram varchar(255),
    display varchar(255),
    storage varchar(255),
    os varchar(255),
    pic varchar(255),
    link varchar(255)
);
    
create table username (
	usename varchar(255) unique not null primary key,
    password varchar(255) not null,
    email varchar(255) 
);

create table bookmark (
	usename varchar(255) not null ,
    notebook_id int not null,
    notebook_name varchar(255),
    pic varchar(255)
);

-- INSERT INTO notebook (notebook_name, price, cpu, gpu, ram, display, storage, os, pic, link)
-- VALUES ("MSI Prestige 16 AI Studio B1VFG-028TH", 72990, "Intel Core Ultra 7 155H", "NVIDIA GeForce RTX 4060", "ram", "16.0 inch, QHD (2560 x 1600)", "1TB SSD PCIe M.2 Gen 4", "Windows 11 Home", "https://imgur.com/ynqr8I7", "https://notebookspec.com/notebook/13239-msi-prestige-16-ai-studio-b1vfg-028th.html");

-- select * from notebook ;
