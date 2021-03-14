
import React from 'react'
import { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap'
import Product from './Product/Product'
import Slider from './Slider/Slider'
import './Home.css'
const Home = () => {

   return (
      <Fragment>
         {/* HOme SLider serction  */}
         <Slider />
         <section className=" ">
            <div className="container-fluid">
               <div className="home-row-one ProductCard row ">
                  <div className="col-lg-4">
                     <Product
                        id='118'
                        title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
                        price={93.99}
                        ratting={5}

                        Link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfE5GW9inTg0QtrF85d_frHWzUHb6gbb5y_dEtGQ5SFYSlcwSiL783YnYKWYGtbZdpQ1U&usqp=CAU&ec=45780877"} />
                  </div>
                  <div className="col-lg-4">
                     <Product
                        id='119'
                        title='SAMSUNG LC24F396FHNXZA 23.5" FHD Curved LED-Lit FreeSync Monito'
                        price={250}
                        ratting={'1'}
                        Link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvYE1NNww47WuthEMKqJYMa1uVei6-QZzMw&usqp=CAU"} />
                  </div>
                  <div className="col-lg-4">
                     <Product
                        id='120'
                        title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI"
                        price={200.43}
                        ratting={4}
                        Link={"https://m.media-amazon.com/images/I/81bkp5rYYuL._AC_UL320_.jpg"} />
                  </div>
               </div>



               <div className="home-row-tow row mt-5 mb-2">
                  <div className="col-lg-3">
                     <Product
                        id='121'
                        title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI"
                        price={200}
                        ratting={2}
                        Link={"https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UL320_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='122'
                        title="LG 32QN600-B 32-Inch QHD (2560 x 1440) IPS Monitor with HDR 10, AMD FreeSync with Dual HDMI Inputs, Black"
                        price={400}
                        ratting={1}
                        Link={"https://m.media-amazon.com/images/I/81-lVaD1rAL._AC_UL320_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='124'
                        title="LG 27GN950-B 27 Inch UHD (3840 x 2160) Nano IPS Display Ultragear Gaming Monitor with 1ms Response Time 144Hz"
                        price={475}
                        ratting={1}
                        Link={"https://m.media-amazon.com/images/I/81fdHiIG1dL._AC_UL320_.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='123'
                        title="LG 27GL850-B 27 Inch Ultragear QHD Nano IPS 1ms NVIDIA G-Sync Compatible Gaming Monitor, Black"
                        price={500}
                        ratting={3}
                        Link={"https://m.media-amazon.com/images/I/81ZYbkU1uKL._AC_UL320_.jpg"} />
                  </div>
               </div>




               <div className="home-row-three row mt-5">
                  <div className="col-lg-4  ">
                     <Product
                        id='12'
                        title="This is our product title"
                        price={1200}
                        ratting={3}
                        Link={"https://www.reviewgeek.com/p/uploads/2020/06/ea40ecd5.jpg"} />
                  </div>
                  <div className="col-lg-4 ">
                     <Product
                        id='12'
                        title="This is our product title"
                        price={1200}
                        ratting={3}
                        Link={"https://www.reviewgeek.com/p/uploads/2020/06/ea40ecd5.jpg"} />
                  </div>
                  <div className="col-lg-4 ">
                     <Product
                        id='12'
                        title="This is our product title"
                        price={1200}
                        ratting={3}
                        Link={"https://www.reviewgeek.com/p/uploads/2020/06/ea40ecd5.jpg"} />
                  </div>
               </div>

               <h2 className='mt-5 text-danger text-uppercase'>Graphics Cards</h2>
               <div className="home-row-tow row mt-5 mb-2">

                  <div className="col-lg-3">
                     <Product
                        id='5254'
                        title="MSI GeForce RTX 3090 Gaming X Trio 24GB Graphics Card"
                        price={1500}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/msi/rtx-3090-gaming-x-trio/rtx-3090-gaming-x-trio-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='505'
                        title="ASUS ROG Strix NVIDIA GeForce RTX 3090 OC Edition 24GB Gaming Graphics Card"
                        price={1200}
                        ratting={4}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/asus/rtx-3090-oc/rtx-3090-oc-001-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='4545'
                        title="MSI GeForce RTX 3090 SUPRIM X 24GB Graphics Card"
                        price={1300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/msi/rtx-3090-suprim-x/rtx-3090-suprim-x-1-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='14523'
                        title=" Gigabyte Aorus GeForce RTX 3090 Master 24GB GDDR6X Graphics Card"
                        price={950}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/gigabyte/aorus-rtx-3090-master/aorus-rtx-3090-master-228x228.jpg"} />
                  </div>
               </div>

               <div className="home-row-tow row mt-5 mb-2">

                  <div className="col-lg-3">
                     <Product
                        id='5254d'
                        title="Gigabyte AORUS GeForce RTX 3090 XTREME 24GB GDDR6X Graphics Card"
                        price={1299}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/gigabyte/rtx-3090-xtreme/rtx-3090-xtreme-1-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='50235'
                        title="ZOTAC GeForce RTX 3090 Trinity 24GB GDDR6X Gaming Graphics Card"
                        price={1200}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/asus/rtx-3090/rtx-3090-1-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='4545'
                        title="XFX Speedster MERC 319 RX6900 XT AMD RDNA 2 16GB Gaming Graphics Card"
                        price={1500}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/xfx/merc-319-rx6900-xt/merc-319-rx6900-xt-01-228x228.jpeg"} />
                  </div>
                  <div className="col-lg-3">
                     <Product
                        id='14523'
                        title=" MSI GeForce RTX 3080 SUPRIM X 10GB Graphics Card"
                        price={1400}
                        ratting={4}
                        Link={"https://www.startech.com.bd/image/cache/catalog/graphics-card/msi/rtx-3080-suprim-x-10gb/rtx-3080-suprim-x-10gb-228x228.jpg"} />
                  </div>
               </div>

               <h2 className='mt-5 text-danger text-uppercase'>Computer Cassing</h2>

               <div className="home-row-three row mt-5">
                  <div className="col-lg-3 ">
                     <Product
                        id='1232'
                        title="Antec TORQUE Black + Red Aluminum ATX Mid Tower  "
                        price={559}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/component/casing/antec/torque/torque-1-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Antec TORQUE Black + White ATX Mid Tower Gaming Casing"
                        price={270}
                        ratting={4}
                        Link={"https://www.startech.com.bd/image/cache/catalog/casing/antec/torque-black-white/torque-black-white-3-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Antec Striker ITX open Gaming Casing"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/component/casing/antec/striker/gallery-striker-03-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Antec Striker ITX open Gaming Casing"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/component/casing/antec/striker/gallery-striker-03-228x228.jpg"} />
                  </div>
               </div>

               <div className="home-row-three row mt-5">
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Antec Striker ITX open Gaming Casing"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/component/casing/antec/striker/gallery-striker-03-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Antec TORQUE Black + White ATX Mid Tower Gaming Casing"
                        price={270}
                        ratting={4}
                        Link={"https://www.startech.com.bd/image/cache/catalog/casing/antec/torque-black-white/torque-black-white-3-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Antec Striker ITX open Gaming Casing"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/component/casing/antec/striker/gallery-striker-03-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='1232'
                        title="Antec TORQUE Black + Red Aluminum ATX Mid Tower "
                        price={559}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/component/casing/antec/torque/torque-1-228x228.jpg"} />
                  </div>

               </div>



               <h2 className='mt-5 text-danger text-uppercase'>Computer Processor</h2>

               <div className="home-row-three row mt-5">
                  <div className="col-lg-3 ">
                     <Product
                        id='123qw2'
                        title="AMD Ryzen 9 5900X Processor  "
                        price={600}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-9-5900x/ryzen-9-5900x-001-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="AMD Ryzen 7 5800X Processor"
                        price={270}
                        ratting={4}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/Intel/i9-10900ka/i9-10900ka-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Intel 10th Gen Core i9-10900 Processor"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-7-5800x/ryzen-7-5800x-01-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="AMD Ryzen 9 3900X Processor"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/Intel/i9-10900/i9-10900-228x228.jpg"} />
                  </div>
               </div>

               <div className="home-row-three row mt-5">
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Intel 10th Gen Core i9-10850K Processor"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-9-3950x/AMD-Ryzen-9-header-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="Intel Core i9-9900K 9th generation Processor"
                        price={270}
                        ratting={4}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/Intel/10900k/10900k-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='12'
                        title="AMD Ryzen 5 5600X Processor"
                        price={300}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/Intel/9900k/intel-core-i9-9900k-228x228.jpg"} />
                  </div>
                  <div className="col-lg-3 ">
                     <Product
                        id='1232'
                        title="AMD Ryzen 5 5600X Processor"
                        price={559}
                        ratting={5}
                        Link={"https://www.startech.com.bd/image/cache/catalog/processor/amd/5600x/5600x-001-228x228.jpg"} />
                  </div>

               </div>

            </div>
         </section>
      </Fragment>
   )
}

export default Home
