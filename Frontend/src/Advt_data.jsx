import React from "react";

function Advt_data({ data }) {
  const { id, maintitle, image0 } = data;

  return (
    <>
      <div className="w-full h-full justify-center mb-4 text-white">
        <h1 className="font-mono text-3xl font-medium mt-12 mb-8 text-center">
          {maintitle}
        </h1>
        <div className="w-full h-full flex justify-center">
          {image0 && (
            <img
              src={image0}
              alt={maintitle}
              className="article-image justify-self-center w-6/12 h-6/12"
            />
          )}
        </div>
        {id == 1 && (
          <div className="h-full w-full flex">
            <div className="w-6/12 mx-auto justify-center justify-self-center ">
              <p className="mt-6">
                ใครกำลังมองหาโน้ตบุ๊กเครื่องใหม่ ที่สามารถตอบโจทย์ในการทำงาน
                เล่นเกม ดูหนัง ฟังเพลง ครบจบในเครื่องเดียว ราคาจับต้องได้
                แต่ไม่รู้ว่าจะซื้อโน้ตบุ๊กรุ่นไหนดี
                ถ้างั้นไม่ควรพลาดบทความนี้เลย วันนี้ Shopee
                มัดรวมโน้ตบุ๊กที่มาพร้อมดีไซน์โฉบเฉี่ยว ฟังก์ชันครบครัน
                ใช้ทำงานได้ดี เล่นเกมลื่นไหล สามารถตอบโจทย์ได้ครบทุกการใช้งาน
                เพื่อให้คุณมีตัวเลือกในการเปรียบเทียบสเปกโน้ตบุ๊กแต่ละรุ่น
                แต่ละยี่ห้อ ก่อนที่จะตัดสินใจกวักเงินซื้อ รวมถึงการเลือกซื้อ
                Notebook รุ่นไหนดี ให้ตรงโจทย์การใช้งานมากที่สุด
                ไม่รอช้า…ตามไปดูกันสิว่าเราจะแนะนำโน้ตบุ๊กรุ่นไหนกันบ้าง ไปดูกัน
              </p>
              <h1 className="mt-20 text-3xl font-medium">
                5 วิธีดูสเปกที่ควรรู้ก่อนตัดสินใจซื้อ โน้ตบุ๊กรุ่นไหนดี
              </h1>
              <p>
                การจะเลือกซื้อ โน้ตบุ๊กรุ่นไหนดี
                สักเครื่องนั้นก็อาจไม่ใช่เรื่องง่ายสำหรับใครหลายคน
                เนื่องจากการจะเลือกซื้อโน้ตบุ๊กต้องพิจารณาด้วยกันหลายปัจจัย
                โดยเฉพาะสเปกโน้ตบุ๊กที่จะเป็นตัวกำหนดราคาและการใช้งาน ดังนั้น
                เราจึงมีวิธีดูสเปกคอมพิวเตอร์แบบง่าย ๆ มาแนะนำให้กับทุกคน
                เพื่อช่วยให้ตัดสินใจซื้อได้ง่ายขึ้น
                และทำให้ได้โน้ตบุ๊กตรงความต้องการในการใช้งาน
              </p>
              <h3 className="20 text-left text-2xl font-medium">1. CPU</h3>
              <p>
                CPU เป็นหน่วยประมวลผลเปรียบเสมือนหัวใจการทำงานของโน้ตบุ๊ก
                โดยปัจจุบัน CPU มีด้วยกัน 2 ค่ายยักษ์ใหญ่ คือ Intel และ AMD
                ซึ่งทั้งสองค่ายนี้จะแบ่งออกเป็นรุ่นต่าง ๆ ถ้าเป็นค่าย Intel จะมี
                Core i3, Core i5, Core i7 ส่วนค่าย AMD จะมี Ryzen 3, Ryzen 5,
                Ryzen 7 รุ่นเหล่านี้บ่งบอกถึงคุณสมบัติในการใช้งาน
                และราคาของโน้ตบุ๊ก
              </p>
              <h3 className="mt-8 text-left text-2xl font-medium">
                2. Graphic Card
              </h3>
              <p>
                การ์ดจอ (Graphic Card) หน้าที่ในการประมวลผลด้านกราฟิก
                ปัจจุบันโน้ตบุ๊กมีให้เลือกทั้งการ์ดจอออนบอร์ด (Integrated
                Graphic) และการ์ดจอแยก (Dedicated Graphic Card) ซึ่งการ์ดจอทั้ง
                2 ประเภทนี้จะมีการใช้งานที่ไม่เหมือนกัน
                ถ้าเป็นการ์ดจอแยกจะใช้ทำงานงานหรือเล่นเกมที่ต้องการพลังประมวลผลด้านกราฟิกสูง
                ๆ และมีราคาสูง แต่ถ้าการ์ดจอออนบอร์ดเหมาะสำหรับทำงานเอกสารทั่วไป
                เล่นเว็บไซต์ สตรีมมิง (Streaming) เล่นเกมเล็กน้อยได้
                และราคาไม่แพง
              </p>
              <h3 className="mt-8 text-left text-2xl font-medium">
                3. HDD / SSD
              </h3>
              <p>
                HDD (Hard Disk Drive) และ SDD (Solid State Drive)
                ซึ่งเป็นอุปกรณ์สำหรับการจัดเก็บข้อมูลทุกอย่างที่มีอยู่ในคอมพิวเตอร์
                ถ้าอยากให้โน้ตบุ๊กสามารถเปิดโปรแกรมต่าง ๆ ได้รวดเร็ว
                แนะนำให้เลือกรุ่นที่ใช้เป็น SDD
                แต่ราคาอาจจะสูงสักหน่อยแต่ถ้าเทียบกับความเร็วก็คุ้มอยู่
                สำหรับใครที่งบน้อยอาจจะเลือกเป็นโน๊ตบุ๊ครุ่นที่มี HDD
                มาใช้ก่อนก็ได้ แล้วเมื่อไรที่มีเงินค่อยอัพเกรดใส่ SSD
                เพิ่มก็ยังได้
              </p>
              <h3 className="mt-8 text-left text-2xl font-medium">4. RAM</h3>
              <p>
                RAM คือ หน่วยความจำชั่วคราวจะต้องใช้ในการรันโปรแกรมต่าง ๆ
                เริ่มตั้งแต่เปิดเครื่องไปจนถึงเปิดโปรแกรมในการทำงาน
                รวมถึงความเร็วในการอ่านหรือเขียนข้อมูลต่าง ๆ ก็จะต้องใช้ RAM
                เพื่อช่วยให้ทำงานได้สะดวกมากยิ่งขึ้น ดังนั้น
                แนะนำให้ซื้อโน้ตบุ๊กที่มีมี RAM 8GB ขึ้นไป
                แต่ถ้าใครงบน้อยให้เลือกรุ่นที่สามารถอัพเกรดได้
                ไว้พอมีเงินค่อยมาซื้อ RAM เพิ่มก็ได้เช่นกัน
              </p>
              <h3 className="mt-8 text-left text-2xl font-medium">
                5. Display Screen
              </h3>
              <p>
                Display Screen อีกหนึ่งปัจจัยของการจะเลือก Notebook รุ่นไหนดี
                ซึ่งขนาดหน้าจอโน้ตบุ๊กจะมีขนาดตั้งแต่ 11 นิ้วขึ้นไป จนถึง 17-18
                นิ้ว ยิ่งขนาดจอใหญ่ ก็ทำให้เห็นมุมภาพได้กว้างขึ้น
                แต่ก็ต้องแลกมากับน้ำหนักของโน้ตบุ๊กและราคา
                ซึ่งขนาดมาตรฐานที่คนนิยมใช้กันคือ 14 นิ้ว 15.6 นิ้ว และ 17.3
                นิ้ว ส่วนความละเอียดภาพ มีตั้งแต่ HD (1280×720), Full-HD
                (1920×1080) และ 4K (3840×2160)
                ราคาจะลดหลั่นไปขึ้นอยู่กับแต่ละยี่ห้อ
                ถ้าให้แนะนำก็ควรเลือกความละเอียดหน้าจอ Full HD เหมาะกับการทำงาน
                เล่นอินเทอร์เน็ต ดูหนังซีรีส์ ฟังเพลง และเล่นเกมได้ดี
              </p>
              <h1 className="mt-16 text-left text-3xl font-medium">
                แปะลิสต์ 10 โน้ตบุ๊กรุ่นไหนดี ฟังก์ชันครบ ตอบโจทย์ทุกการใช้งาน
              </h1>
              <p>
                คัดมาให้แล้ว! 10 โน้ตบุ๊กรุ่นไหนดี สเปกแรง ฟังก์ชันจัดเต็ม
                ใช้ได้ทั้งทำงานทั่วไป งานกราฟิกตัดต่อ ครีเอเตอร์
                หรือเล่นเกมได้ลื่นไหล ราคาไม่แพงจนเกินไป
                ใครที่ยังไม่รู้ว่าจะซื้อแล็ปท็อป รุ่นไหนดี
                เตรียมจดลิสต์โน้ตบุ๊กรุ่นยอดนิยมได้เลย
                ว่าแต่เราจะแนะนำโน้ตบุ๊กรุ่นไหน ยี่ห้อไหน ราคาเท่าไหร่กันบ้าง
                มาดูกัน
              </p>
              <h2 className="mt-8 text-left text-lg font-light">
                1. Asus Vivobook 16X K3605ZC-N1787W
              </h2>
              <img
                src="https://shopee.co.th/blog/wp-content/uploads/2021/11/Shopee-Blog-%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B8%9A%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-Asus-Vivobook-16X-K3605ZC-N1787W.jpg"
                alt="com1"
              />
              <p className="mt-6">
                โน้ตบุ๊กรุ่นไหนดี ขอแนะนำ Asus Vivobook 16X K3605ZC-N1787W
                แบรนด์ยอดนิยมจาก Asus มาพร้อมดีไซน์โฉบเฉี่ยว ทันสมัย บางเบา
                กะทัดรัด พกพาสะดวก ด้วยน้ำหนักเพียงแค่ 1.8 กิโลกรัม
                สเปกเครื่องแรงสุด ๆ ด้วยชิปประมวลผล Intel Core i7-12650H
                จับคู่กับ NVIDIA GeForce RTX 4050 Laptop 6GB GDDR6 RAM 16GB และ
                SSD 512GB พร้อมจอขนาดใหญ่ 16 นิ้ว ระดับ 100% sRGB Color สีตรง
                ไม่เพี้ยน แถมลื่นไหลระดับ 120Hz
                ครบจบในเครื่องเดียวได้ทั้งการทำงานทั่วไป จนไปถึงการตัดต่อ
                งานครีเอเตอร์ และเล่นเกมกราฟิกหนัก ๆ ได้ และการันตีความทนทานด้วย
                MIL-STD-810H ผ่านมาตรฐานทดสอบความทนทานทางการทหารของสหรัฐอีกด้วย
              </p>
              <h2 className="mt-4 text-lg  font-bold">
                สเปก Asus Vivobook 16X K3605ZC-N1787W
              </h2>
              <ul>
                <li>
                  CPU: Intel Core i5-12450H 2.0 GHz (12M Cache, up to 4.4 GHz, 8
                  cores)
                </li>
                <li>- GPU: NVIDIA GeForce RTX 4050 Laptop 6GB GDDR6</li>
                <li>- SSD: 512GB M.2 NVMe PCIe 4.0</li>
                <li>- RAM: 16GB DDR4</li>
                <li>- Display: 16 นิ้ว WUXGA (1920×1200) Full HD</li>
                <li>- Port: USB 3.2 Type C / USB 3.2 Type A </li>
                <li>- Wireless: Wi-Fi 6E (802.11ax) / Bluetooth 5.3</li>
                <li>- OS: Windows 11 Home</li>
                <li>- Weight: 1.8 กิโลกรัม</li>
                <li>- ราคาประมาณ 33,990 บาท</li>
              </ul>
              <h2 className="mt-20 text-left text-lg font-light">
                2. HP Victus 16-d1226TX Gaming
              </h2>
              <img
                src="https://shopee.co.th/blog/wp-content/uploads/2021/11/Shopee-Blog-%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B8%9A%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-HP-Victus-16-d1226TX-Gaming.jpg"
                alt="com2"
              />
              <p className="mt-6">
                ใครกำลังมองหาโน้ตบุ๊กเกมมิ่ง เราแนะนำ HP Victus 16-d1226TX
                Gaming จากแบรนด์ HP มาพร้อมสเปกเครื่องที่เอาใจเกมเมอร์โดนเฉพาะ
                ด้วยชิปประมวลผล Intel Core i5-12500H ทำงานคู่กับการ์ดจอ GeForce
                RTX 3060 เพื่อตอบสนองกับเหล่าเกมเมอร์ทุกประเภท
                ไม่ว่าจะเล่นเกมที่มีกราฟิกเยอะ ๆ หรือเกมเบา ๆ เล่นได้สบาย
                หรือทำงานทั่วไป หรืองานตัดต่อกราฟิกก็ทำได้ดี พร้อมจอขนาดใหญ่
                16.1 นิ้ว Full HD อัตรารีเฟรชหน้าจอที่ 144Hz พร้อมกับ SSD ความจุ
                512GB และ RAM DDR5 16GB จัดสเปกมาให้แบบครบจบในเครื่อง
                ได้ทั้งเล่นเกม ทำงานตัดต่อ งานทั่วไป
                ถ้าไม่รู้จะซื้อโน้ตบุ๊กรุ่นไหนดี ราคาไม่แพงมาก
                แนะนำโน้ตบุ๊กรุ่นนี้เลย
              </p>
              <h2 className="mt-4 text-lg  font-bold">
                สเปก HP Victus 16-d1226TX Gaming
              </h2>
              <ul>
                <li>
                  - CPU: Intel Core i5-12500H (3.30 GHz, 18 MB L3 Cache, up to
                  4.50 GHz, 12 cores)
                </li>
                <li>- GPU: NVIDIA GeForce RTX 3060 (6GB GDDR6)</li>
                <li>- SSD: 512GB SSD PCIe M.2 Gen 4</li>
                <li>- RAM: 16GB DDR5 4800Mhz</li>
                <li>- Display: 16.1 นิ้ว (1920×1200) Full HD</li>
                <li>- Port: USB 3.2 Type C / USB 3.2 Type A </li>
                <li>- Wireless: Wi-Fi 6E (802.11ax) / Bluetooth 5.3</li>
                <li>- OS: Windows 11 Home</li>
                <li>- Weight: 2.4 กิโลกรัม</li>
                <li>- ราคาประมาณ 31,990 บาท</li>
              </ul>
              <h2 className="mt-20 text-left text-lg font-light">
                3. MSI THIN GF63-12VF-249TH
              </h2>
              <img
                src="https://shopee.co.th/blog/wp-content/uploads/2021/11/Shopee-Blog-%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B8%9A%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-MSI-THIN-GF63-12VF-249TH.jpg"
                alt="com3"
              />
              <p className="mt-6">
                อยากได้โน้ตบุ๊กเครื่องใหม่ ที่ฟังก์ชันครบครัน
                แต่ไม่รู้ว่าจะเลือก โน้ตบุ๊กรุ่นไหนดี ใช้ทำงานได้ดี
                เล่นเกมลื่นไหล ราคาจับต้องได้ ต้องโน้ตบุ๊ก MSI THIN
                GF63-12VF-249TH จาก MSI ซึ่งเป็นแบรนด์ขึ้นเรื่องสเปกเกมขั้นเทพ
                รุ่นนี้จัดสเปกมาให้แรงสุดคุ้ม ด้วยชิปประมวลผล Intel Core
                i5-12450H การ์ดจอแยกเป็น NVIDIA GeForce RTX 4060
                ทำให้โน้ตบุ๊กทำงานได้มีประสิทธิภาพมากยิ่งขึ้น พร้อมด้วย RAM 16GB
                และ SSD ความจุ 512GBตอบสนองทุกการใช้งานได้ราบรื่นรวดเร็ว
                รุ่นนี้มีกล้องเว็บแคม HD (720p) พร้อมไมค์ดิจิตอล 2 ตัว
                และติดตั้ง Windows 11 Home ใช้งานได้ทันทีอีกด้วย
              </p>
              <h2 className="mt-4 text-lg  font-bold">
                สเปก MSI THIN GF63-12VF-249TH
              </h2>
              <ul>
                <li>
                  - CPU: Intel Core i5-12450H (3.30 GHz, 12 MB L3 Cache, up to
                  4.40 GHz, 8 cores)
                </li>
                <li>- GPU: NVIDIA GeForce RTX 4060 (8GB GDDR6) 45 Watt TGP</li>
                <li>- SSD: 512GB SSD PCIe M.2 Gen 4</li>
                <li>- RAM: 16GB DDR4 3200Mhz</li>
                <li>- Display: 15.6 นิ้ว (1920×1200) Full HD</li>
                <li>- Port: USB 3.2 Type C / USB 3.2 Type A </li>
                <li>- Wireless: Wi-Fi 6E (802.11ax) / Bluetooth 5.2 </li>
                <li>- OS: Windows 11 Home</li>
                <li>- Weight: 1.86 กิโลกรัม</li>
                <li>- ราคาประมาณ 34,990 บาท</li>
              </ul>
              <h2 className="mt-20 text-left text-lg font-light">
                4. Acer Predator Helios Neo 16 PHN16-71-78P1
              </h2>
              <img
                src="https://shopee.co.th/blog/wp-content/uploads/2021/11/Shopee-Blog-%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B8%9A%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-Acer-Predator-Helios-Neo-16-PHN16-71-78P1.jpg"
                alt="com4"
              />
              <p className="mt-6">
                ใครที่ต้องการโน้ตบุ๊กเพื่อมาทำงานด้านกราฟิก ตัดต่อคลิปวิดีโอ
                หรือเล่นเกมที่มีกราฟิกหนัก ๆ แนะนำโน้ตบุ๊ก Acer Predator Helios
                Neo 16 PHN16-71-78P1 จาก Acer
                เป็นแบรนด์ยอดนิยมที่คนนิยมซื้อมาใช้กันมาก
                สเปกเครื่องรุ่นนี้จัดมาให้เต็มพิกัด ด้วยขุมพลังของ Intel Core
                i7-13700HX จับคู่กับ NVIDIA GeForce RTX 4050 หน้าจอ IPS WQXGA
                (2560 x 1600) จอขนาดใหญ่ 16 นิ้ว อัตราการรีเฟรช 165Hz
                เล่นเกมได้ราบรื่นไม่มีกระตุก
                สามารถรองรับเกมล่าสุดทั้งหมดด้วยเฟรมเรตสูง พร้อมกับ RAM 16GB และ
                SSD 512GB อีกทั้งมี คีย์บอร์ด Full Size ปุ่มกว้าง
                ทำให้กดหรือพิมพ์ได้อย่างแม่นยำ มาพร้อมกับไฟ RGB แบบ 4
                โซนที่ปรับแต่งได้อย่างอิสระ ถ้าถามว่าจะซื้อ โน้ตบุ๊กรุ่นไหนดี
                ตอบโจทย์ทุกการทำงาน รุ่นนี้เป็นอีกหนึ่งตัวเลือกที่น่าสนใจ
              </p>
              <h2 className="mt-4 text-lg  font-bold">
                สเปก Acer Predator Helios Neo 16 PHN16-71-78P1
              </h2>
              <ul>
                <li>
                  - CPU: Intel Core i7-13700HX (3.70 GHz, 30 MB L3 Cache, up to
                  5.00 GHz, 16 cores)
                </li>
                <li>- GPU: NVIDIA GeForce RTX 4050 (6GB GDDR6) 120 Watt TGP</li>
                <li>- SSD: 512GB SSD PCIe M.2 Gen 4</li>
                <li>- RAM: 16GB DDR5 4800Mhz</li>
                <li>- Display: 16 นิ้ว WQXGA (2560×1600) 2K</li>
                <li>- Port: USB 3.2 Type C / USB 3.2 Type A </li>
                <li>- Wireless: Wi-Fi 6 (802.11ax) / Bluetooth 5.1 </li>
                <li>- OS: Windows 11 Home</li>
                <li>- Weight: 2.6 กิโลกรัม</li>
                <li>- ราคาประมาณ 43,990 บาท</li>
              </ul>
              <h2 className="mt-20 text-left text-lg font-light">
                5. DELL XPS 13 Plus
              </h2>
              <img
                src="https://shopee.co.th/blog/wp-content/uploads/2021/11/Shopee-Blog-%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B8%9A%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-DELL-XPS-13-Plus.jpg"
                alt="com5"
              />
              <p className="mt-6">
                รีวิวต่อกับ DELL XPS 13 Plus ต้องบอกเลยว่าโน้ตบุ๊ก DELL
                รุ่นนี้ถือว่าดีไซน์ตัวเครื่องมีความโดดเด่นมากที่ดูสวยงามเรียบหรู
                มาพร้อมฟังก์ชันความปลอดภัยจัดเต็มมีทั้งสแกนใบหน้าและนิ้วมือ
                คีย์บอร์ดและทัชแพดก็ได้เปลี่ยมโฉมใหม่ ทัชแพดเป็นกระจกแบบ
                Seamless ไม่มีกรอบใด ๆ ทำให้ตัวทัชแพดผสานลงไปกับตัวบอดี้เลย
                ชิปประมวลผล Intel Core i7-1360P การ์ดจอ On-Board Intel Iris Xe
                พร้อมด้วย RAM 16GB DDR5 และ SSD ความจุ 512GB ขนาดจอ 13.4 นิ้ว
                ความละเอียด 3.5K (3456×2160) พาเนล OLED ซึ่งเป็นจอทัชสกรีน
                และน้ำหนักตัวเครื่อง เพียง 1.26 กิโลกรัม ทำให้เบาพกพาง่าย
                โน้ตบุ๊กอีกรุ่นที่อยากแนะนำ แต่ราคาอาจจะสูงสักหน่อย
                แต่รับประกันเครื่องสเปกว่าคุ้มค่าสุด ๆ
              </p>
              <h2 className="mt-4 text-lg  font-bold">สเปก DELL XPS 13 Plus</h2>
              <ul>
                <li>
                  - CPU: Intel Core i7-1260P (4 P-core + 8 E-core Up to 4.7GHz,
                  12 cores)
                </li>
                <li>- GPU: On-Board Intel Iris Xe</li>
                <li>- SSD: M.2 NVMe SSD 512GB</li>
                <li>- RAM: 16GB LPDDR5 5200 MHz</li>
                <li>- Display: ทัชสกรีนได้ 13.4 นิ้ว (3456×2160) 3.5K</li>
                <li>- Port: USB 3.2 Type C / USB 3.2 Type A </li>
                <li>- Wireless: Wi-Fi 6 (802.11ax) / Bluetooth 5.1 </li>
                <li>- OS: Windows 11 Home</li>
                <li>- Weight: 1.26 กิโลกรัม</li>
                <li>- ราคาประมาณ 84,990 บาท</li>
              </ul>
              <div className="mt-12 text-zinc-600">
                <a href="https://shopee.co.th/blog/recommended-best-laptop/">
                  source=https://shopee.co.th/blog/recommended-best-laptop/
                </a>
              </div>
            </div>
            <div className="w-4/12 justify-center text-center ">
              <img
                className="h-9/12 w-9/12 justify-center mt-20 mx-auto justify-self-center"
                src="https://media.wired.com/photos/64daad6b4a854832b16fd3bc/191:100/w_1280,c_limit/How-to-Choose-a-Laptop-August-2023-Gear.jpg"
                alt=""
              />
              <p className="mt-6 ml-12 mr-12 text-sm">
                โน๊ตบุ๊ค
                ถือเป็นอุปกรณ์ที่จำเป็นในชีวิตประจำวันของผู้คนอย่างหนึ่ง
                ยิ่งในช่วงสถานการณ์แบบนี้หลาย ๆบริษัทให้พนักงาน work form home
                มากขึ้น หรือหลาย ๆ คนก็ทำงานอยู่บ้านมากขึ้น โน๊ตบุ๊ค
                จึงเป็นอีกสิ่งที่สำคัญเลยทีเดียว ไม่ว่าจะเป็นใช้เพื่อความบันเทิง
                รีแลกซ์จากการทำงาน หรือใช้สำหรับการทำงานโดยเฉพาะ{" "}
              </p>
            </div>
          </div>
        )}
        {id == 2 && (
          <div>
            <div className="h-full w-full flex">
              <div className="w-6/12 mx-auto justify-center justify-self-center ">
                <p className="mt-6">
                  สำหรับนักเรียนและนักศึกษาในยุคปัจจุบัน
                  คงไม่มีอุปกรณ์ใดสำคัญไปกว่าโน๊ตบุ๊คสำหรับการเรียนออนไลน์อีกแล้ว
                  ด้วยความสะดวกสบายต่อการพกพา
                  ไม่จำเป็นต้องต่ออุปกรณ์เชื่อมอะไรให้ยุ่งยาก
                  แถมยังสามารถใช้ประโยชน์ได้มากมาย ไม่ว่าจะเป็นการเรียนออนไลน์
                  อัดวิดีโอย้อนหลัง จดเลคเชอร์ ค้นคว้าข้อมูล
                  และผ่อนคลายจากการเรียนด้วยการดูหนัง ฟังเพลง และเล่นเกม
                  ซึ่งนั่นทำให้โน๊ตบุ๊คสำหรับนักเรียน นักศึกษา
                  กลายมาเป็นอีกหนึ่งอุปกรณ์การเรียนชิ้นสำคัญที่ผู้ปกครองและน้องๆ
                  วัยมัธยมและมหาวิทยาลัยต่างมองหา
                  เพื่อเอาไว้ใช้เพิ่มความสะดวกในการเรียนออนไลน์
                  หาข้อมูลทำงานและการบ้านต่างๆ ได้ง่ายขึ้น
                </p>
                <h1 className="mt-20 text-3xl font-medium">
                  แนะนำ 7 โน๊ตบุ๊คสำหรับนักเรียน นักศึกษา เรียนออนไลน์ก็ดี
                  ทำงานก็ได้ แถมราคาโดนใจ 2023-2024
                </h1>
                <p>
                  สำหรับน้องๆ นักเรียน นักศึกษา
                  และผู้ปกครองที่กำลังมองหาโน๊ตบุ๊คคู่ใจราคาเอื้อมถึงได้ในสเปคดีๆ
                  สำหรับการเรียนออนไลน์และการทำงานทั่วไป
                  วันนี้บานาน่าออนไลน์จะมาแนะนำโน๊ตบุ๊คสำหรับนักศึกษาและนักเรียน
                  7 ตัวที่น่าใช้ คุ้มค่า ราคาเบาๆ ผู้ปกครองเอื้อมถึงได้มาฝากกัน
                </p>

                <h2 className="mt-8 text-left text-lg font-light">
                  1. Acer Notebook Travelmate Spin B3 TMB311R-31-A14PG Black
                  ราคา 9,900.-
                </h2>
                <img
                  src="https://blog.bnn.in.th/wp-content/uploads/2022/04/Acer-Notebook-Travelmate-Spin-1024x566.png"
                  alt="com1"
                />
                <p className="mt-6">
                  จุดเด่น : หน้าจอทัชสกรีนที่ใช้งานง่ายเพียงปลายนิ้วสัมผัส
                  แถมหน้าจอสามารถปรับให้ใช้งานได้หลากหลายรูปแบบ
                  ดีไซน์เครื่องโดดเด่น ตัวเล็ก เพรียวบาง น้ำหนักเบาเพียง 1.49
                  กก. สะดวกในการพกพา ตามคอนเซ็ปต์ “ไปได้ทุกหนแห่งอย่างมีสไตล์”
                  มาพร้อมกล้องหน้าจาก Acer Webcam รองรับการประชุมออนไลน์
                  จึงเป็นโน๊ตบุ๊คที่เหมาะสำหรับนักเรียน นักศึกษา
                  ที่ตอบโจทย์การเรียนออนไลน์ ทำการบ้าน
                  ทำงานทั่วไปและรับชมเอนเตอร์เทนเมนต์ ในความคมชัดระดับ HD
                  แถมแบตเตอรี่ใช้งานได้ยาวนานถึง 6 ชั่วโมง
                </p>
                <h2 className="mt-4 text-lg  font-bold">
                  สเปค : โน๊ตบุ๊ค Acer Travelmate Spin B3
                </h2>
                <ul>
                  <li>- หน่วยประมวลผล: Intel Celeron N4020</li>
                  <li>- หน้าจอทัชสกรีน: รองรับ</li>
                  <li>
                    - ขนาดหน้าจอ: ขนาด 11.6 inch ความคมชัดระดับ HD ความละเอียด
                    1,366 x 768 px
                  </li>
                  <li>- แรม/ความจำ: 4 GB DDR4 / 64 GB eMMC</li>
                  <li>- กราฟิกหน้าจอ: Intel UHD Graphics 600 </li>
                  <li>- ระบบปฏิบัติการ: Windows 10 Pro (64-bit) </li>
                  <li>- แบตเตอรี่: 3-cell สามารถใช้งานได้ยาวนาน 6 ชั่วโมง </li>
                  <li>- น้ำหนัก: 1.49 Kg.</li>
                  <li>- รับประกันยาวนานถึง: 2 ปี</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  2. HP Notebook 15s-gr0511AU Silver ราคา 13,990.-
                </h2>
                <img
                  src="https://blog.bnn.in.th/wp-content/uploads/2022/04/HP-Notebook-15-1024x435.png"
                  alt="com2"
                />
                <p className="mt-6">
                  จุดเด่น : เป็นโน๊ตบุ๊คสำหรับนักเรียน
                  นักศึกษาอีกรุ่นที่โดดเด่นด้วยดีไซน์การออกแบบที่สวยงามของตัวเครื่อง
                  ขอบจอบางเฉียบและพกพาสะดวก แบตเตอรี่แบบ HP Fast Charge
                  รองรับการใช้งานได้อย่างยาวนาน หน้าจอใหญ่ คมชัดระดับ Full HD
                  จะเรียนออนไลน์ ทำการบ้าน หาข้อมูล
                  หรือรับชมความบันเทิงก็ใช้งานได้รวดเร็ว ลื่นไหลไม่มีสะดุด
                  แถมยังรองรับการเชื่อมต่อ SuperSpeed ที่หลากหลาย ไม่ว่าจะเป็น
                  USB Type-C, USB Type-A, HDMI, RJ-45, AC Smart pin และ
                  Headphone พร้อมกล้องหน้า HP True Vision ที่ให้ความคมชัดระดับ
                  HD 720p
                </p>
                <h2 className="mt-4 text-lg  font-bold">
                  สเปค : โน๊ตบุ๊ค 15s-gr0511AU จากแบรนด์ HP
                </h2>
                <ul>
                  <li>- หน่วยประมวลผล: AMD Athlon 3150U</li>
                  <li>- หน้าจอทัชสกรีน: ไม่รองรับ</li>
                  <li>
                    - ขนาดหน้าจอและความคมชัด: ขนาด 15.6 inch ความคมชัดแบบ
                    Diagonal FHD 1,920 x 1,080 px
                  </li>
                  <li>
                    - แรมและความจำ: 4 GB DDR4 1DM 2400 / 256 GB PCIe value
                  </li>
                  <li>- กราฟิกหน้าจอ: AMD Radeon Graphics</li>
                  <li>- ระบบปฏิบัติการ: Windows 10 Home </li>
                  <li>- แบตเตอรี่: 3-cell, 41 Whr </li>
                  <li>- น้ำหนัก: 1.74 Kg.</li>
                  <li>- รับประกันยาวนานถึง: 2 ปี</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  3. Lenovo Notebook IdeaPad Slim3i 14ITL6-82H701ARTA Arctic
                  Grey ราคา 15,990.-
                </h2>
                <img
                  src="https://blog.bnn.in.th/wp-content/uploads/2022/04/Lenovo-Notebook-IdeaPad-Slim3i-Corei5-1024x488.png"
                  alt="com3"
                />
                <p className="mt-6">
                  จุดเด่น :
                  โน๊ตบุ๊คแบรนด์นี้มีชื่อเสียงเรื่องความทนทานต่อการใช้งาน
                  บอดี้เครื่องเป็นสี Arctic Grey เรียบหรู ถือใช้แล้วดูดี
                  สามารถปรับจอได้ถึง 180 องศา มาพร้อมเทคโนโลยีการทำงาน Q-Control
                  ที่ช่วยสลับโหมดการใช้งานให้มีประสิทธิภาพตอบโจทย์การใช้งานแต่ละแบบและเงียบมากขึ้น
                  หน้าจอมาในขนาด 14 นิ้ว ความคมชัดระดับ FHD
                  และกล้องหน้าความคมชัด 720p
                  ที่มาพร้อมระบบป้องกันความเป็นส่วนตัว Privacy Webcam
                  ใช้เรียนออนไลน์ ทำงาน ประชุมวิดีโอคอลก็คมชัดและปลอดภัย
                  สบายใจได้ยิ่งขึ้น อีกทั้งยังรองรับการเชื่อมต่อทั้ง Card
                  reader, HDMI, Headphone, USB 2.0, USB 3.2 และ Wi-Fi 6 11ax
                </p>
                <h2 className="mt-4 text-lg  font-bold">
                  สเปค : โน๊ตบุ๊ค Lenovo IdeaPad Slim3i
                </h2>
                <ul>
                  <li>- หน่วยประมวลผล: AMD Athlon 3150U</li>
                  <li>- หน้าจอทัชสกรีน: ไม่รองรับ</li>
                  <li>
                    - ขนาดหน้าจอและความคมชัด: ขนาด 15.6 inch ความคมชัดแบบ
                    Diagonal FHD 1,920 x 1,080 px
                  </li>
                  <li>
                    - แรมและความจำ: 4GB Soldered DDR4-3200 + 4GB SO-DIMM
                    DDR4-3200 / 256GB SSD
                  </li>
                  <li>- กราฟิกหน้าจอ: Integrated Intel UHD Graphics</li>
                  <li>- ระบบปฏิบัติการ: Windows 11 Home 64 </li>
                  <li>- แบตเตอรี่: Integrated 38Wh </li>
                  <li>- น้ำหนัก: 1.74 Kg.</li>
                  <li>- รับประกันยาวนานถึง: 2 ปี</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  4. Huawei Notebook MateBook D15 (i3-53012LBS) Silver ราคา
                  15,990.-
                </h2>
                <img
                  src="https://blog.bnn.in.th/wp-content/uploads/2022/04/Huawei-Notebook-MateBook-D15-1024x600.png"
                  alt="com4"
                />
                <p className="mt-6">
                  จุดเด่น : โน๊ตบุ๊คแบรนด์ Huawei รุ่น MateBook D15
                  เรียกได้ว่าเป็นโน๊ตบุ๊คสำหรับนักเรียน
                  นักศึกษาในการใช้งานทั่วไประดับพรีเมียม โดดเด่นด้วยความบางเบา
                  สามารถพกพาได้อย่างสะดวก
                  บอดี้ของตัวเครื่องเป็นสีเงินเมทัลลิคเรียบหรู
                  อีกทั้งยังพกการประมวลผล Intel Core i3
                  ที่เร็วและแรงในระดับมาตรฐานการใช้งานทั่วไป ไม่ว่าจะเรียน
                  ทำงานหรือใช้งานเอนเตอร์เทนเมนต์ก็ไม่มีสะดุด
                  หน้าจอใหญ่เต็มตาคมชัดระดับ FHD พร้อมกล้องแบบ Hidden Camera
                  ที่ซ่อนอยู่ในคีย์บอร์ด และรองรับการเชื่อมต่อหลากหลาย
                  ไม่ว่าจะเป็น USB 3.2 Gen1, USB-A, HDMI และ USB-C
                  และขั้นสุดของความปลอดภัยกับปุ่มเปิดสแกนลายนิ้วมือแบบ Built-In
                  Fingerprint
                  ให้คุณเปิดเครื่องและล็อกอินได้อย่างปลอดภัยและง่ายเพียงสัมผัสเดียว
                </p>
                <h2 className="mt-4 text-lg  font-bold">
                  สเปค : โน๊ตบุ๊ค Huawei MateBook D15
                </h2>
                <ul>
                  <li>- หน่วยประมวลผล: Intel CoreTM i3-10110U</li>
                  <li>- หน้าจอทัชสกรีน: ไม่รองรับ</li>
                  <li>
                    - ขนาดหน้าจอและความคมชัด: ขนาด 15.6 inch ความคมชัดแบบ Full
                    HD 1,920 x 1,080 px
                  </li>
                  <li>- แรมและความจำ: 8 GB DDR4 / 256 GB NVMe PCIe SSD</li>
                  <li>- กราฟิกหน้าจอ: Intel UHD Graphic 620 </li>
                  <li>- ระบบปฏิบัติการ: Windows 10 Home </li>
                  <li>- แบตเตอรี่: 42 Wh</li>
                  <li>- น้ำหนัก: ประมาณ 1.53 Kg.</li>
                  <li>- รับประกันยาวนานถึง: 1 ปี</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  5. Asus Notebook X515EA-EJ303W Grey ราคา 16,990.-
                </h2>
                <img
                  src="https://blog.bnn.in.th/wp-content/uploads/2022/04/Asus-Notebook-X515EA-1024x630.png"
                  alt="com5"
                />
                <p className="mt-6">
                  จุดเด่น :
                  เรียกได้ว่าเป็นโน๊ตบุ๊คเพื่อการทำงานได้อย่างครอบคลุมและมีประสิทธิภาพ
                  ด้วยระบบการประมวลผล Intel Core i3
                  เร็วแรงเพียงพอต่อการใช้งานพื้นฐานได้แบบไม่มีสะดุด
                  อีกทั้งยังโดดเด่นด้วยหน้าจอแสดงผล NanoEdge ให้พื้นที่จอกว้าง
                  เพิ่มมุมมองจอแบบ 178 องศา พร้อมเคลือบป้องกันแสงสะท้อน
                  และรองรับการเชื่อมต่อหลายรูปแบบ USB 3.2 Gen1, USB Type-A, USB
                  Type-C, HDMI, Audio Jack 3.5 mm และ DC-in
                  ตอบโจทย์การใช้งานเพื่อการเรียนและการทำงานทั่วไปได้อย่างมีประสิทธิภาพ
                </p>
                <h2 className="mt-4 text-lg  font-bold">
                  สเปค : โน๊ตบุ๊ค Asus Notebook X515E A-EJ303W
                </h2>
                <ul>
                  <li>- หน่วยประมวลผล: Intel Core i3 11th Generation</li>
                  <li>- หน้าจอทัชสกรีน: ไม่รองรับ</li>
                  <li>
                    - ขนาดหน้าจอและความคมชัด: ขนาด 15.6 inch ความคมชัดแบบ FHD
                    1,920 x 1,080 px
                  </li>
                  <li>
                    - แรมและความจำ: 4 GB DDR4 on board / 512 GB M.2 NVMe PCIe
                    3.0 SSD
                  </li>
                  <li>- กราฟิกหน้าจอ: Intel UHD Graphics </li>
                  <li>- ระบบปฏิบัติการ: Windows 11 Home (64bit)</li>
                  <li>- แบตเตอรี่: 2S1P, 2-cell Li-ion </li>
                  <li>- น้ำหนัก: 1.80 Kg.</li>
                  <li>- รับประกันยาวนานถึง: 2 ปี</li>
                </ul>
                <div className="mt-24 text-zinc-600">
                  <a href="https://blog.bnn.in.th/recommend-7-notebook-for-student/">
                    source=https://blog.bnn.in.th/recommend-7-notebook-for-student/
                  </a>
                </div>
              </div>
              <div className="w-4/12 justify-center text-center ">
                <img
                  className="h-9/12 w-9/12 justify-center mt-20 mx-auto justify-self-center"
                  src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16lN4?ver=46fe&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
                  alt=""
                />
                <p className="mt-6 ml-12 mr-12 text-sm">
                  โน้ตบุ๊กจัดเป็น สินค้าไอที ยอดฮิตอันดับต้นๆ
                  ที่ยังมีความจำเป็นเป็นอย่างมากอยู่ในยุคปัจจุบัน
                  บทความนี้จะเป็นการแนะนำโน้ตบุ๊กที่มีความน่าสนใจ
                  สำหรับผู้ที่สนใจที่จะเลือกซื้อโน้ตบุ๊กที่เหมาะสำหรับคุณมากที่สุด
                </p>
              </div>
            </div>
          </div>
        )}
        {id == 3 && (
          <div>
            <div className="h-full w-full flex">
              <div className="w-6/12 mx-auto justify-center justify-self-center ">
                <p className="mt-6">
                  สำหรับบทความที่แล้วหรือก็คือ " โน๊ตบุ๊คเล่นเกมคืออะไร
                  เหมาะกับใคร ตัวไหนน่าสนใจบ้าง "
                  ได้ให้ทุกคนได้รู้จักกับโน๊ตบุ๊คเกมมิ่งไปบ้างแล้ว
                  วันนี้เราจะมาเน้นที่การแนะนำโน๊ตบุ๊คเกมมิ่งหรือโน๊ตบุ๊คเล่นเกม
                  2024 ที่น่าสนใจ หรือเป็นที่น่าจับตามองกัน
                  ตัวไหนต้องซื้อตัวไหนต้แงมี แล้วแต่ละแบรนด์ แต่ละแบบ
                  แต่ละสเปคกับราคาตัวไหนเหมาะกับใครไม่เหมาะกับใครมาดูกันได้เลย
                </p>
                <h1 className="mt-20 text-3xl font-medium">
                  โน๊ตบุ๊คเล่นเกม 2024
                </h1>
                <p>
                  แน่นอนว่าโน๊ตบุ๊คเล่นเกมนั้นสำหรับปี 2024 หรือช่วงนี้
                  มีตัวที่น่าสนใจกันเยอะมากๆ และนอกจากนี้โน๊ตบุ๊คเล่นเกม 2024
                  มีการพัฒนาอย่างต่อเนื่องทั้งในด้านประสิทธิภาพและดีไซน์
                  โน๊ตบุ๊ครุ่นใหม่ ๆ มักใช้ชิปประมวลผลรุ่นใหม่ล่าสุดจาก Intel
                  หรือ AMD และกราฟิกการ์ดรุ่นใหม่จาก NVIDIA หรือ AMD
                  ซึ่งช่วยให้เล่นเกมได้ลื่นไหลและกราฟิกสวยงามสมจริงยิ่งขึ้น
                  นอกจากนี้ โน๊ตบุ๊คเกมมิ่งรุ่นใหม่ ๆ
                  ยังมาพร้อมหน้าจอที่มีอัตราการรีเฟรชสูง (144Hz หรือ 240Hz)
                  ช่วยให้ภาพเคลื่อนไหวลื่นไหลและดูสมจริงยิ่งขึ้นอีกด้วย
                  เดี๋ยวเรามาดูกันดีกว่าว่าโน๊ตบุ๊คเล่นเกมทั้งในปี 2023
                  ที่มีสเปคที่ไปต่อได้และน่าสนใจกับโน๊ตบุ๊ค 2024
                  ที่ทุกคนต้องมีตัวไหนน่าสนใจกันบ้างนะ
                </p>
                <h3 className="mt-20 text-left text-2xl font-medium">
                  การเลือกซื้อโน๊ตบุ๊คเล่นเกมควรพิจารณาจากปัจจัยต่าง ๆ ดังนี้
                </h3>
                <h3 className="mt-8 text-left text-xl font-medium">งบประมาณ</h3>
                <p>โน๊ตบุ๊คเล่นเกมมีราคาตั้งแต่หลักหมื่นไปจนถึงหลักแสนบาท</p>
                <h3 className="mt-8 text-left text-xl font-medium">
                  ประเภทของเกมที่ต้องการเล่น
                </h3>
                <p>เกมบางเกมต้องการสเปคที่สูงจึงจะสามารถเล่นได้อย่างลื่นไหล</p>
                <h3 className="mt-8 text-left text-xl font-medium">
                  ขนาดและน้ำหนัก{" "}
                </h3>
                <p>
                  โน๊ตบุ๊คเล่นเกมมีให้เลือกหลายขนาดและน้ำหนัก
                  เลือกให้เหมาะกับการใช้งาน
                </p>
                <h3 className="mt-8 text-left text-xl font-medium">
                  ดีไซน์และฟีเจอร์
                </h3>
                <p>
                  โน๊ตบุ๊คเล่นเกมแต่ละรุ่นมีดีไซน์และฟีเจอร์ที่แตกต่างกัน
                  เลือกให้ตรงกับความต้องการ
                </p>

                <p className="mt-16">
                  วันนี้เราก็จะมาแนะนำ2รุ่นล่าสุดจากแบรนด์ Dell
                  ที่ทางร้านของเราได้คัดมาให้แล้วว่าแรง และใช้ได้นานๆ
                  ปี2024ก็ยังใหม่แน่นอนเพราะเครื่องแรงสเปคสูงคุ้มค่ากับราคาแน่นอน
                  ซึ่งก่อนหน้านี้เราก็ได้แนะนำโน๊ตบุ๊ค dell ไปทั้งหมด5รุ่น
                  สามารถเข้าไปดูได้ที่บทความ แนะนำโน๊ตบุ๊คdell ได้เลย
                  และวันนี้โน๊ตบุ๊คdell ที่เราหยิบมาแนะนำได้แก่
                </p>
                <h2 className="mt-8 text-left text-lg font-light">
                  Notebook Dell Inspiron G15 Gaming (GN55303W0CP001OGTH)
                </h2>
                <img
                  src="https://www.neoshop.co.th/wp-content/uploads/2023/12/vnezcx.jpg-1.webp"
                  alt="com1"
                />
                <p className="mt-6">
                  โน้ตบุ๊ครุ่นนี้ขับเคลื่อนด้วยโปรเซสเซอร์ Intel Core i7-13650HX
                  รุ่นล่าสุดและกราฟิกการ์ด NVIDIA GeForce RTX 4060 จอแสดงผลขนาด
                  15.6 นิ้วมีความละเอียด Full HD 1920 x 1080
                  พิกเซลและอัตราการรีเฟรช 165 Hz มาพร้อมมีหน่วยความจำ RAM ขนาด
                  16 GB และพื้นที่เก็บข้อมูล SSD ขนาด 512 GB
                </p>
                <h2 className="mt-4 text-lg  font-bold">สเปค</h2>
                <ul>
                  <li>- CPU: Intel Core i7-13650HX เจนเนอเรชั่น 13</li>
                  <li>- GPU: NVIDIA GeForce RTX 4060 8GB</li>
                  <li>- RAM: 16GB DDR5</li>
                  <li>- Storage: 512GB M.2 SSD</li>
                  <li>
                    - Display: 15.6 นิ้ว ความละเอียด Full HD (1920 x 1080)
                    และอัตราการรีเฟรช 165Hz
                  </li>
                  <li>- Battery: 56Whr </li>
                  <li>
                    - ประสิทธิภาพที่ยอดเยี่ยม:
                    โน้ตบุ๊กรุ่นนี้ขับเคลื่อนด้วยซีพียู Intel Core i7-13650HX
                    เจนเนอเรชั่น 13 และ NVIDIA GeForce RTX 4060 8GB
                    ทำให้มีประสิทธิภาพที่ยอดเยี่ยมสำหรับการเล่นเกมระดับ AAA
                    และงานสร้างสรรค์ระดับสูง
                  </li>
                  <li>
                    - ดีไซน์ที่เรียบง่ายแต่ดูมีสไตล์:
                    โน้ตบุ๊กรุ่นนี้มีดีไซน์ที่เรียบง่ายแต่ดูมีสไตล์พร้อมให้เลือก
                    2 สี ได้แก่ Quantum White และ Dark Shadow Grey
                  </li>
                  <li>
                    - หน้าจอที่ยอดเยี่ยม: โน้ตบุ๊กรุ่นนี้มีหน้าจอขนาด 15.6 นิ้ว
                    ความละเอียด Full HD (1920 x 1080) และอัตราการรีเฟรช 165Hz
                    หน้าจอมีสีสันสดใสและตอบสนองได้ดีเยี่ยมสำหรับการเล่นเกม
                  </li>
                  <li>- ราคาประมาณ 41,990 บาท</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  Notebook DELL Alienware X16-ANX160UCFG001CGTH
                </h2>
                <img
                  src="https://www.neoshop.co.th/wp-content/uploads/2023/12/notebook-dell-alienware-m18-anm1-1.webp"
                  alt="com2"
                />
                <p className="mt-6">
                  DELL Alienware X16-ANX160UCFG001CGTH เป็นโน๊ตบุ๊คเกมมิ่งขนาด
                  16 นิ้ว รุ่นใหม่ล่าสุดจาก Dell เปิดตัวในปี 2023
                  มาพร้อมกับสเปคที่แรงจัดเต็ม
                  เหมาะสำหรับเกมเมอร์ที่ต้องการประสิทธิภาพสูงสุด
                  และผู้ที่ชื่นชอบโน๊ตบุ๊คฝั่งDell
                  รวมถึงอยากได้โน๊ตบุ๊คที่เล่นเกมได้หนักๆ
                  และมีประสิทธิภาพที่สูงมากๆ ต้องตัวนี้
                  เพราะโน๊ตบุ๊คตัวนี้จัดอยู่ในโน๊ตบุ๊คเล่นเกมระดับสูงที่โน๊ตบุ๊คเล่นเกม
                  2024 ต้องจับตามองและไม่แพ้ใครแน่นอน
                  มาพร้อมกับการขับเคลื่อนด้วยโปรเซสเซอร์ Intel Core i9-13900HK
                  รุ่นล่าสุดและการ์ดจอ NVIDIA GeForce RTX 4090 มาพร้อมกับหน้าจอ
                  QHD+ 240Hz หน่วยความจำ LPDDR5 ขนาด 32GB และพื้นที่เก็บข้อมูล
                  SSD PCIe NVMe ขนาด 2TB
                </p>
                <h2 className="mt-4 text-lg  font-bold">สเปค</h2>
                <ul>
                  <li>
                    - CPU: Intel Core i9-13900HK (14-core, 24MB L3 cache, up to
                    5.4GHz Max Turbo Frequency)
                  </li>
                  <li>- GPU: NVIDIA GeForce RTX 4090 16GB GDDR6</li>
                  <li>- RAM: 32GB LPDDR5 6000MHz</li>
                  <li>- DISPLAY: 16" QHD+ (2560x1600) 240Hz</li>
                  <li>- STORAGE: 2TB M.2 PCIe NVMe SSD</li>
                  <li>- OS: Windows 11 Home </li>
                  <li>
                    - ประสิทธิภาพการเล่นเกมที่ยอดเยี่ยม DELL Alienware
                    X16-ANX160UCFG001CGTH มาพร้อมซีพียู Intel Core i9-13900HK
                    และกราฟิกการ์ด NVIDIA GeForce RTX 4090
                    ซึ่งเป็นสเปคที่แรงที่สุดในระดับโน้ตบุ๊คเกมมิ่งในปัจจุบัน
                    สามารถทำคะแนนทดสอบประสิทธิภาพการเล่นเกมได้สูง
                    เล่นเกมระดับสูงได้ลื่นไหล เฟรมเรตสูง
                  </li>
                  <li>
                    - หน้าจอขนาดใหญ่ ความละเอียดสูง หน้าจอขนาด 16 นิ้ว
                    ความละเอียด QHD+ อัตรารีเฟรช 240Hz แสดงภาพได้คมชัดสมจริง
                    เหมาะสำหรับการเล่นเกมและงานตัดต่อวิดีโอสุดๆ
                  </li>
                  <li>
                    - การออกแบบที่โดดเด่นเป็นเอกลักษณ์
                    ดีไซน์ที่โดดเด่นเป็นเอกลักษณ์ เน้นความดุดันและประสิทธิภาพ
                    วัสดุที่ใช้ผลิตแข็งแรงทนทาน คุณสมบัติเด่นเหล่านี้ทำให้ DELL
                    Alienware X16-ANX160UCFG001CGTH
                    เหมาะสำหรับเกมเมอร์ที่ต้องการโน้ตบุ๊คเกมมิ่งที่มีประสิทธิภาพสูง
                    มาพร้อมหน้าจอขนาดใหญ่ ความละเอียดสูง และการออกแบบที่โดดเด่น
                  </li>
                  <li>- ราคาประมาณ 185,490 บาท</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  MSI Notebook GF63 Thin 11UCX-1627TH
                </h2>
                <img
                  src="https://www.neoshop.co.th/wp-content/uploads/2023/12/siiwo1ioqtegzkdr3lvb-946x1024.webp"
                  alt="com3"
                />
                <p className="mt-6">
                  หากคุณอยากได้โน๊ตบุ๊คเล่นเกม ราคาไม่เกิน 20000
                  โน๊ตบุ๊ครุ่นนี้ถือเป็นโน๊ตบุ๊คที่น่าลองอีกหนึ่งตัว
                  หากจะนึกถึงโน๊ตบุ๊คเล่นเกม 2024 ที่คุ้มค่าคุ้มราคา
                  และเหมาะสำหรับคนที่มีงบน้อยหรืองบจำกัด เราก็ขอแนะนำ MSI
                  Notebook GF63 Thin 11UCX-1627TH ตัวนี้เลย GF63 Thin
                  11UCX-1627TH เป็นแล็ปท็อปเกมมิ่งขนาด 15.6 นิ้วที่มีราคาไม่แพง
                  เปิดตัวในปี 2023 แล็ปท็อปนี้ขับเคลื่อนด้วยโปรเซสเซอร์ Intel
                  Core i5-11400H และกราฟิก NVIDIA GeForce RTX 2050
                  มาพร้อมกับหน้าจอ IPS ขนาด 15.6 นิ้วที่มีอัตราการรีเฟรช 144Hz
                  และหน่วยความจำ DDR4 8GB
                </p>
                <h2 className="mt-4 text-lg  font-bold">สเป8</h2>
                <ul>
                  <li>- โปรเซสเซอร์: Intel Core i5-11400H</li>
                  <li>- กราฟิก: NVIDIA GeForce RTX 2050</li>
                  <li>
                    - หน้าจอ: จอแสดงผล IPS ขนาด 15.6 นิ้ว ความละเอียด 1920x1080
                    อัตราการรีเฟรช 144Hz
                  </li>
                  <li>- หน่วยความจำ: DDR4 8GB</li>
                  <li>- พื้นที่เก็บข้อมูล: SSD PCIe NVMe ขนาด 512GB</li>
                  <li>- ระบบปฏิบัติการ: Windows 11 Home</li>
                  <li>
                    - การเชื่อมต่อ: Wi-Fi 6, Bluetooth 5.2, USB 3.2 Gen 1 Type-A
                    x 3, USB 3.2 Gen 1 Type-C, HDMI, RJ45
                  </li>
                  <li>- ขนาดและน้ำหนัก: 359.5 x 254 x 22.9 มม., 2.2 กก.</li>
                  <li>
                    - ประสิทธิภาพการเล่นเกมที่ยอดเยี่ยม ด้วยโปรเซสเซอร์ Intel
                    Core i5-11400H และกราฟิก NVIDIA GeForce RTX 2050
                    แล็ปท็อปสามารถเล่นเกม AAA
                    ยอดนิยมได้อย่างราบรื่นที่การตั้งค่ากราฟิกปานกลางถึงสูง
                    ตัวอย่างเช่น แล็ปท็อปสามารถรันเกม Apex Legends ที่ 1080p
                    60fps ที่การตั้งค่ากราฟิกกลาง
                  </li>
                  <li>- ราคาประมาณ 17,990 บาท</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  MSI Notebook Bravo 15 C7UDX-260TH
                </h2>
                <img
                  src="https://shopee.co.th/blog/wp-content/uploads/2021/11/Shopee-Blog-%E0%B9%82%E0%B8%99%E0%B9%89%E0%B8%95%E0%B8%9A%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%B5-Acer-Predator-Helios-Neo-16-PHN16-71-78P1.jpg"
                  alt="com4"
                />
                <p className="mt-6">
                  โน๊ตบุ๊ครุ่นนี้เป็นโน้ตบุ๊คเกมมิ่งรุ่นยอดนิยมจาก MSI
                  เหมาะสำหรับผู้ที่กำลังตามหา โน๊ตบุ๊คเล่นเกม ราคาไม่เกิน 30000
                  ปี 2023 อยู่และสามารถไปใช้ใน2024ได้ด้วย
                  มาพร้อมสเปคที่ครบครันและราคาที่จับต้องได้
                  โน้ตบุ๊ครุ่นนี้ใช้หน่วยประมวลผล AMD Ryzen 5 7535HS
                  รุ่นใหม่ล่าสุดที่มีประสิทธิภาพสูง หน่วยประมวลผลกราฟิก NVIDIA
                  GeForce RTX 3050 ที่รองรับการเล่นเกมความละเอียดสูงระดับ 1440p
                  จอแสดงผลขนาด 15.6 นิ้ว ความละเอียด Full HD อัตราการรีเฟรช
                  144Hz ตอบสนองได้รวดเร็วทันใจ หน่วยความจำ RAM 16GB DDR5
                  และที่เก็บข้อมูล SSD 512GB PCIe NVMe Gen4 เร็วแรงและจุใจ
                </p>
                <h2 className="mt-4 text-lg  font-bold">สเปค</h2>
                <ul>
                  <li>- โปรเซสเซอร์ AMD Ryzen 5 7535HS</li>
                  <li>- กราฟิกการ์ด NVIDIA GeForce RTX 3050</li>
                  <li>
                    - หน้าจอขนาด 15.6 นิ้ว ความละเอียด Full HD (1920 x 1080
                    พิกเซล) อัตราการรีเฟรช 144Hz
                  </li>
                  <li>- หน่วยความจำ RAM ขนาด 16GB</li>
                  <li>- หน่วยเก็บข้อมูล SSD ความจุ 512GB</li>
                  <li>- ระบบปฏิบัติการ Windows 11 Home </li>
                  <li>
                    - ประสิทธิภาพที่ดี: โน้ตบุ๊ครุ่นนี้ใช้โปรเซสเซอร์ AMD Ryzen
                    5 7535HS และกราฟิกการ์ด NVIDIA GeForce RTX 3050
                    มีประสิทธิภาพเพียงพอสำหรับการเล่นเกมระดับ AAA
                    ได้อย่างราบรื่น
                    นอกจากนี้ยังสามารถใช้งานทั่วไปได้อย่างมีประสิทธิภาพ เช่น
                    ตัดต่อวิดีโอ ทำงานกราฟิก หรือเล่นสตรีมมิ่ง{" "}
                  </li>
                  <li>
                    - ราคาไม่แพง:
                    โน้ตบุ๊ครุ่นนี้มีราคาไม่แพงเมื่อเทียบกับโน้ตบุ๊คเกมมิ่งรุ่นอื่นๆ
                    ที่มีสเปคใกล้เคียงกัน
                  </li>
                  <li>
                    - หน้าจอขนาดใหญ่และสว่างสดใส:
                    โน้ตบุ๊ครุ่นนี้มาพร้อมกับหน้าจอขนาด 15.6 นิ้ว ความละเอียด
                    Full HD (1920 x 1080 พิกเซล) อัตราการรีเฟรช 144Hz
                    หน้าจอมีขนาดใหญ่และสว่างสดใส
                    จึงเหมาะสำหรับการเล่นเกมและดูภาพยนตร์
                  </li>
                  <li>- ราคาประมาณ 26,990 บาท</li>
                </ul>
                <h2 className="mt-20 text-left text-lg font-light">
                  Acer Gaming Notebook Nitro V 15 ANV15-51-578S
                </h2>
                <img
                  src="https://www.neoshop.co.th/wp-content/uploads/2023/12/nitro_v_15_ci5__0_nh.qnast_.002.webp"
                  alt="com5"
                />
                <p className="mt-6">
                  Acer Gaming Notebook Nitro V 15 ANV15-51-578S
                  เป็นโน้ตบุ๊คเกมมิ่งระดับเริ่มต้นที่เปิดตัวในปี 2023
                  โน้ตบุ๊ครุ่นนี้มาพร้อมกับหน่วยประมวลผล Intel Core i5-13420H
                  และกราฟิก NVIDIA GeForce RTX 2050
                  ซึ่งทำให้เหมาะสำหรับการเล่นเกมระดับกลางถึงระดับสูง
                </p>
                <h2 className="mt-4 text-lg  font-bold">สเปค</h2>
                <ul>
                  <li>
                    - หน่วยประมวลผล: Intel Core i5-13420H (2.10GHz up to
                    4.60GHz, 8C(4P+4E)/12T, 12 MB Intel Smart Cache)
                  </li>
                  <li>- กราฟิก: NVIDIA GeForce RTX2050 4GB GDDR6</li>
                  <li>
                    - หน้าจอแสดงผล: 15.6 inch Full HD (1920 x 1080) IPS 144Hz
                  </li>
                  <li>- RAM: 16GB (1x16GB) DDR5 SO-DIMM</li>
                  <li>- พื้นที่เก็บข้อมูล: 512GB M.2 NVMe PCIe 4.0</li>
                  <li>- ระบบปฏิบัติการ: Windows 11 Home</li>
                  <li>
                    - หน่วยประมวลผล Intel Core i5-13420H
                    เป็นหน่วยประมวลผลประสิทธิภาพสูงรุ่นล่าสุดจาก Intel
                    ที่ใช้สถาปัตยกรรม Raptor Lake ประกอบด้วยคอร์ประสิทธิภาพสูง 4
                    คอร์และคอร์ประหยัดพลังงาน 4 คอร์ ความเร็วฐานอยู่ที่ 2.10GHz
                    และความเร็วเทอร์โบสูงสุดอยู่ที่ 4.60GHz
                    ช่วยให้การเล่นเกมและการใช้งานทั่วไปเป็นไปอย่างลื่นไหล{" "}
                  </li>
                  <li>
                    - กราฟิก NVIDIA GeForce RTX2050
                    เป็นการ์ดจอระดับกลางที่รองรับการเล่นเกมระดับกลางถึงระดับสูง
                    มาพร้อมหน่วยความจำ GDDR6 ขนาด 4GB
                    ช่วยให้เล่นเกมได้ภาพที่สวยงามและลื่นไหล
                  </li>
                  <li>
                    - หน้าจอแสดงผลขนาด 15.6 นิ้ว Full HD (1920 x 1080) IPS 144Hz
                    อัตราการรีเฟรชสูงถึง 144Hz
                    ทำให้เหมาะสำหรับการเล่นเกมที่รวดเร็ว
                    ช่วยให้ภาพเคลื่อนไหวมีความลื่นไหลและต่อเนื่อง
                  </li>
                  <li>- ราคาประมาณ 25,990 บาท</li>
                </ul>
                <div className="mt-24 text-zinc-600">
                  <a href="https://www.neoshop.co.th/gaming-laptop-2024/">
                    source=https://www.neoshop.co.th/gaming-laptop-2024/
                  </a>
                </div>
              </div>
              <div className="w-4/12 justify-center text-center ">
                <img
                  className="h-9/12 w-9/12 justify-center mt-20 mx-auto justify-self-center"
                  src="https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
                  alt=""
                />
                <p className="mt-6 ml-12 mr-12 text-sm">
                  เมื่อเทคโนโลยีเข้ามามีบทบาทในชีวิตประจำวันมากขึ้นเรื่อย ๆ
                  คอมพิวเตอร์และโน๊ตบุ๊คจึงกลายเป็นอุปกรณ์ที่ขาดไม่ได้สำหรับคนวัยเรียนและวัยทำงานยุคใหม่
                  เพราะสามารถใช้งานได้แบบสารพัดประโยชน์ ทั้งเพื่อการเรียน
                  การทำงาน ความบันเทิง และวัตถุประสงค์อื่น ๆ อีกมากมาย
                </p>
              </div>
            </div>
          </div>
        )}
        {!(id == 1 || id == 2 || id == 3) && <div>Content not found</div>}
      </div>
    </>
  );
}

export default Advt_data;
