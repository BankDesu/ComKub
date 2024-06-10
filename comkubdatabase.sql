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
 
 insert into notebook (brand,model,model_year,notebook_name,category,price,cpu,gpu,ram,display,storage,os,pic_path,performance_score,service_score) values
	(
	'Acer','Swift Edge SFE16-44-R5DT','Jun 2024','Acer Swift Edge SFE16-44-R5DT','โน๊ตบุ้คเกมมิ่ง',
	39990,'AMD Ryzen 7 8840U','AMD Radeon 780M','36 GB LPDDR5 On Board 6400 MHz',
	'16.0 inch (3200x2000) 3.2K','1TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13557-1.png',2.5,4
	),
    (
	'Gigabyte','G5 MF-E2TH333SH','Mar 2023','Gigabyte G5 MF-E2TH333SH','โน๊ตบุ้คเกมมิ่ง',
	31900,'Intel Core i5-12500H','NVIDIA GeForce RTX 4050','8 GB DDR4 3200 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12667-c.jpg',5,5
	),
    (
	'MSI','Cyborg 15 A12VE-419TH','Jan 2023','MSI Cyborg 15 A12VE-419TH','โน๊ตบุ้คเกมมิ่ง',
	35900,'Intel Core i7-12650H','NVIDIA GeForce RTX 4050','16 GB DDR5 4800 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/12515-c.jpg',3,2
	),
    (
	'Asus','ROG Strix G16 G614JU-N3103W','Feb 2023','Asus ROG Strix G16 G614JU-N3103W','โน๊ตบุ้คเกมมิ่ง',
	54990,'Intel Core i9-13980HX','NVIDIA GeForce RTX 4050','16 GB DDR5 4800 MHz',
	'16 inch WQXGA (2560x1600) 2K','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12623-c.jpg',2,4
	),
    (
	'MSI','GF63 Thin 12VE-046TH','Feb 2023','MSI GF63 Thin 12VE-046TH','โน๊ตบุ้คเกมมิ่ง',
	29990,'Intel Core i7-12650H','NVIDIA GeForce RTX 4050','16 GB DDR4 3200 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12611-c.jpg',3,1
	),
    (
	'Acer','Nitro 16 AN16-41-R4ZR','Jun 2023','Acer Nitro 16 AN16-41-R4ZR','โน๊ตบุ้คเกมมิ่ง',
	29990,'AMD Ryzen 5 7640HS','NVIDIA GeForce RTX 4050','16 GB DDR5 5200 MHz',
	'16.0 inch WUXGA (1920x1200) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/12951-c.jpg',4,3
	),
    (
	'Acer','Predator Helios Neo 16 PHN16-71-58MD','Apr 2023','Acer Predator Helios Neo 16 PHN16-71-58MD','โน๊ตบุ้คเกมมิ่ง',
	35990,'Intel Core i5-13500HX','NVIDIA GeForce RTX 4050','16 GB DDR5 4800 MHz',
	'16.0 inch WUXGA (1920x1200) Full HD+','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12786-c.jpg',3.5,2
	),
    (
	'Asus','TUF Gaming A16 Advantage Edition FA617NS-N3085W','Feb 2023','Asus TUF Gaming A16 Advantage Edition FA617NS-N3085W','โน๊ตบุ้คเกมมิ่ง',
	32990,'AMD Ryzen 7 7735HS','AMD Radeon RX 7600S','16 GB DDR5 4800 MHz',
	'16.0 inch WUXGA (1920x1200) Full HD+','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12630-c.jpg',3,3
	),
    (
	'Acer','Nitro V 15 ANV15-51-574G','Sep 2023','Acer Nitro V 15 ANV15-51-574G','โน๊ตบุ้คเกมมิ่ง',
	29990,'Intel Core i5-13420H','NVIDIA GeForce RTX 4050','16 GB DDR5 4800 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13092-1.png',4,4
	),
    (
	'HP','Victus Gaming 16-d1225TX','Aug 2023','HP Victus Gaming 16-d1225TX','โน๊ตบุ้คเกมมิ่ง',
	23990,'Intel Core i5-12500H','NVIDIA GeForce RTX 3050','16 GB DDR5 4800 MHz',
	'16.1 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/13087-c.jpg',4,3
	),
    (
	'HP','Victus Gaming 15-fa0154TX','Mar 2023','HP Victus Gaming 15-fa0154TX','โน๊ตบุ้คเกมมิ่ง',
	24690,'Intel Core i5-12450H','NVIDIA GeForce RTX 3050','16 GB DDR4 3200 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/420x310//storage/notebook/12687-notebook_12098_Victus%2015%20blue-c.jpg',3,3
	),
    (
	'Acer','Predator Helios 16 PHN16-72-9369','Feb 2024','Acer Predator Helios 16 PHN16-72-9369','โน๊ตบุ้คเกมมิ่ง',
	99990,'Intel Core i9-14900HX','NVIDIA GeForce RTX 4080','32 GB DDR5 4800 MHz',
	'16 inch WQXGA (2560x1600) 2K','1TB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/13358-1.jpg',4.5,3
	),
    (
	'Gigabyte','AORUS 17X AZG-65TH665SH','Apr 2024','Gigabyte AORUS 17X AZG-65TH665SH','โน๊ตบุ้คเกมมิ่ง',
	129990,'Intel Core i9-14900HX','NVIDIA GeForce RTX 4090','32 GB DDR5 5600 MHz',
	'17.3 inch (2560x1440) QHD 2K','2TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13463-1.png',5,4
	),
    (
	'Asus','ROG Strix Scar 18 G834JYR-R6052W','Jan 2024','Asus ROG Strix Scar 18 G834JYR-R6052W','โน๊ตบุ้คเกมมิ่ง',
	139990,'Intel Core i9-14900HX','NVIDIA GeForce RTX 4090','32 GB DDR5 5600 MHz',
	'18.0 inch WQXGA (2560x1600) QHD+','2TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13213-1.png',5,5
	),
    (
	'MSI','Titan 18 HX A14VIG-031TH','Jan 2024','MSI Titan 18 HX A14VIG-031TH','โน๊ตบุ้คเกมมิ่ง',
	169990,'Intel Core i9-14900HX','NVIDIA GeForce RTX 4060','64 GB DDR5 5600 MHz',
	'18.0 inch (3840x2400) UHD+','2TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13255-1.png',5,3.3
	);
    
     insert into notebook (brand,model,model_year,notebook_name,category,price,cpu,gpu,ram,display,storage,os,pic_path,performance_score,service_score) values
	(
	'Acer','Aspire 5 A515-58GM-586G','Nov 2023','Acer Aspire 5 A515-58GM-586G','โน๊ตบุ้คทั่วไป',
	19990,'Intel Core i5-13420H','NVIDIA GeForce RTX 2050','8 GB DDR4 3200 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/13143-c.jpg',4,4
	),
    (
	'Lenovo','IdeaPad 3 15ITL6-82H802M8TA','Aug 2022','Lenovo IdeaPad 3 15ITL6-82H802M8TA','โน๊ตบุ้คทั่วไป',
	15990,'Intel Core i5-1135G7','Intel Iris Xe Graphics G7 96EUs','8 GB DDR4 On Board 3200 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2','Windows 11 Home','https://notebookspec.com/resize/420x310//storage/notebook/notebook_11931_Ideapad%203%2015%20grey-c.jpg',5,5
	),
    (
	'Asus','Vivobook Go 15 M1504FA-NJ580W','Nov 2023','Asus Vivobook Go 15 M1504FA-NJ580W','โน๊ตบุ้คทั่วไป',
	13990,'AMD Ryzen 5 7520U','AMD Radeon 610M','16 GB LPDDR5 On Board 5500 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 3','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/13137-c.jpg',3,5
	),
    (
	'Acer','Swift Go SFG14-41-R2QM','Jan 2023','Acer Swift Go SFG14-41-R2QM','โน๊ตบุ้คทั่วไป',
	17990,'AMD Ryzen 5 7530U','AMD Radeon RX Vega 7','16 GB LPDDR4x On Board 4267 MHz',
	'14 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 3','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12556-c.jpg',2,3
	),
    (
	'DELL','Inspiron 15 3535-IN3535X8DK4001OGTH Carbon Black','Apr 2023','DELL Inspiron 15 3535-IN3535X8DK4001OGTH Carbon Black','โน๊ตบุ้คทั่วไป',
	19990,'AMD Ryzen 5 7530U','AMD Radeon RX Vega 7','16 GB DDR4 3200 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/12768-c.jpg',3,5
	),
    (
	'Acer','Aspire 3 A315-24P-R817','Jun 2023','Acer Aspire 3 A315-24P-R817','โน๊ตบุ้คทั่วไป',
	10990,'AMD Ryzen 3 7320U','AMD Radeon 610M	','8 GB LPDDR5 On Board 5500 MHz',
	'15.6 inch (1920x1080) Full HD','256 GB SSD PCIe M.2 Gen 3','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12499-c.jpg',3,3
	),
    (
	'Acer','Predator Helios Neo 16 PHN16-71-58MD','Apr 2023','Acer Predator Helios Neo 16 PHN16-71-58MD','โน๊ตบุ้คทั่วไป',
	35990,'Intel Core i5-13500HX','NVIDIA GeForce RTX 4050','16 GB DDR5 4800 MHz',
	'16.0 inch WUXGA (1920x1200) Full HD+','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12786-c.jpg',3.5,2
	),
    (
	'Asus','Vivobook S14 S3404ZA-LY547WS','May 2023','Asus Vivobook S14 S3404ZA-LY547WS','โน๊ตบุ้คทั่วไป',
	19990,'Intel Core i5-12500H','Intel Iris Xe Graphics G7 96EUs','16 GB DDR4 3200 MHz',
	'14.0 inch WUXGA (1920x1200) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/12852-c.jpg',2,4
	),
    (
	'HP','15s-fq2725TU','Jan 2023','HP 15s-fq2725TU','โน๊ตบุ้คทั่วไป',
	34990,'Intel Core i5-1135G7','Intel Iris Xe Graphics G7 96EUs','16 GB DDR4 3200 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 3','Windows 10 Home (64 Bit)','https://notebookspec.com/resize/648x486//storage/notebook/12558-c.jpg',2,2
	),
    (
	'HP','Victus Gaming 16-d1225TX','Aug 2023','HP Victus Gaming 16-d1225TX','โน๊ตบุ้คทั่วไป',
	23990,'Intel Core i5-12500H','NVIDIA GeForce RTX 3050','16 GB DDR5 4800 MHz',
	'16.1 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/13087-c.jpg',4,3
	);
  
  insert into notebook (brand,model,model_year,notebook_name,category,price,cpu,gpu,ram,display,storage,os,pic_path,performance_score,service_score) values
	(
	'Acer','Swift Go 14 SFG14-73-71ZY','Apr 2024','Acer Swift Go 14 SFG14-73-71ZY','โน๊ตบุ้คบางเบา',
	35990,'Intel Core Ultra 7 155H','Intel Arc 8-Cores iGPU','16 GB LPDDR5X On Board 5200 MHz',
	'14 inch (2880x1800) 2.8K','512 GB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13469-1.png',5,4
	),
    (
	'Asus','VivoBook S16 OLED S5606MA-MX772WS','Apr 2024','Asus VivoBook S16 OLED S5606MA-MX772WS','โน๊ตบุ้คบางเบา',
	41990,'Intel Core Ultra 7 155H','Intel Arc 8-Cores iGPU','16 GB LPDDR5X On Board 6400 MHz',
	'16.0 inch (3200x2000) 3.2K','1TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/420x310//storage/notebook/notebook_11931_Ideapad%203%2015%20grey-c.jpg',5,5
	),
    (
	'Asus','Vivobook Go 15 M1504FA-NJ580W','Nov 2023','Asus Vivobook Go 15 M1504FA-NJ580W','โน๊ตบุ้คบางเบา',
	13990,'AMD Ryzen 5 7520U','AMD Radeon 610M','16 GB LPDDR5 On Board 5500 MHz',
	'15.6 inch (1920x1080) Full HD','512 GB SSD PCIe M.2 Gen 3','Windows 11 Home Single Language','https://notebookspec.com/resize/648x486//storage/notebook/13474-1.png',3,3
	),
    (
	'Asus','Vivobook S 16 OLED D5606UA-MX755WS','May 2024','Asus Vivobook S 16 OLED D5606UA-MX755WS','โน๊ตบุ้คบางเบา',
	38990,'AMD Ryzen 7 8845HS','AMD Radeon 780M','16 GB LPDDR5X On Board 7500 MHz',
	'16.0 inch (3200x2000) 3.2K','1TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13485-1.png',3,3
	),
    (
	'Asus','Vivobook S 14 OLED D5406UA-PP782WS','May 2024','Asus Vivobook S 14 OLED D5406UA-PP782WS','โน๊ตบุ้คบางเบา',
	36990,'AMD Ryzen 7 8845HS','AMD Radeon 780M','16 GB LPDDR5X On Board 7500 MHz',
	'14.0 inch (2880x1800) 2.8K','1TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13486-1.png',4,3
	),
    (
	'DELL','XPS 14 9440-CXN9440CTO01GTH','JMay 2024','DELL XPS 14 9440-CXN9440CTO01GTH','โน๊ตบุ้คบางเบา',
	108890,'Intel Core Ultra 7 155H','NVIDIA GeForce RTX 4050','64 GB DDR5 7467 MHz',
	'14.5 inch (3072x1920) 3K','2TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13487-1.png',3,5
	),
    (
	'Lenovo','Yoga 7i 14IAL7-82QE003LTA','Aug 2022','Lenovo Yoga 7i 14IAL7-82QE003LTA','โน๊ตบุ้คบางเบา',
	38690,'Intel Core i5-1240P','Intel Iris Xe Graphics G7 96EUs','16 GB LPDDR5 On Board 4800 MHz',
	'14 inch (2880x1800) 2.8K','1TB SSD PCIe M.2','Windows 11 Home','https://notebookspec.com/resize/420x310//storage/notebook/notebook_12005_Yoga%207%202022-c.jpg',3.5,3.5
	),
    (
	'Acer','Swift Edge SFA16-41-R8KA','Nov 2022','Acer Swift Edge SFA16-41-R8KA','โน๊ตบุ้คบางเบา',
	29990,'AMD Ryzen 5 6600U','AMD Radeon 660M','16 GB LPDDR5 On Board 6400 MHz',
	'16.0 inch (3840x2400) UHD 4K','1TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/12357-c.jpg',3,4
	),
    (
	'Lenovo','ThinkPad E14 G5-21JK00GBTH','May 2024','Lenovo ThinkPad E14 G5-21JK00GBTH','โน๊ตบุ้คบางเบา',
	34390,'Intel Core i7-1355U','Intel Iris Xe Graphics G7 96EUs','16 GB DDR4 3200 MHz',
	'14.0 inch WUXGA (1920x1200) Full HD','512 GB SSD PCIe M.2 Gen 4','Windows 11 Pro','https://notebookspec.com/resize/648x486//storage/notebook/13496-c.jpg',5,4
	),
    (
	'Asus','ROG Zephyrus G16 GU605MV-QR221WS','May 2024','Asus ROG Zephyrus G16 GU605MV-QR221WS','โน๊ตบุ้คบางเบา',
	79990,'Intel Core Ultra 9 185H','NVIDIA GeForce RTX 4060','32 GB LPDDR5X On Board 7467 MHz',
	'16.0 inch, QHD (2560 x 1600)','1TB SSD PCIe M.2 Gen 4','Windows 11 Home','https://notebookspec.com/resize/648x486//storage/notebook/13493-1.png',5,3
	);
select * from notebook;
SELECT DISTINCT cpu from notebook order by cpu;
SELECT DISTINCT gpu from notebook order by gpu;

select * from review;