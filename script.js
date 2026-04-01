const productContainer = document.getElementById("products");
const cart = document.getElementById("cart");
const cartBtn = document.getElementById("cartBtn");

let cartItems = [];document.addEventListener("DOMContentLoaded", function(){

});

const products = [

{
name:"CR7 Football Jersey",
price:18,
category:"football",
  size:"13-14 YRS",
images:["https://i.postimg.cc/y8VVNCr9/Screenshot%2020260116%20222113%20One%20Drive.jpg",
        "https://i.postimg.cc/zvf9YxZC/DSC%201108.jpg"
       ]
},
  
 {
    name:"Guess Sweater",
price:25,
category:"tops",
   size:"10 YRS",
images:["https://i.postimg.cc/dtQyN7qJ/IMG-4697.jpg",
       "https://i.postimg.cc/qvKWrtSd/tmp%204ee92b0d%2091fa%204e36%209ca8%20df0b8c1cc009.jpg"
       ]
  }, 

{
    name:"Super Baggy Bershka Jeans",
price:18,
category:"pants",
     size:"38",
images:["https://i.postimg.cc/pr6hPKyn/20260312-115754.jpg",
       "https://i.postimg.cc/NfB0Gnfs/20260312-115402.jpg"
       ]
  },
   
  
   {
    name:"Black Ralph Lauren Polo",
price:25,
category:"tops",
     size: "M/L",
images:["https://i.postimg.cc/7LhwgM4z/20251231%20114409.jpg",
        "https://i.postimg.cc/nhmNxs5g/20251231%20115052.jpg",
        "https://i.postimg.cc/1RYdNcZP/20251231-114556.jpg",
        "https://i.postimg.cc/7YGW1Gx2/20251231%20114731.jpg"  
       ]
  },


 {
name:"Juventus Jacket",
price:25,
category:"football",
   size:"13-14 YRS",
images:["https://i.postimg.cc/LXDrWr7P/20251212-212528.jpg",
       "https://i.postimg.cc/tRmcVtH1/20251213%20122234.jpg"
       ]
},     
  

{
    name:"Jordan Pullover",
price:16,
category:"tops",
  size:"12-13 YRS",
images:["https://i.postimg.cc/J7Tf5Cjh/tmp%2019b069da%206caa%2043f8%20a987%200bb65343e76c.jpg"]
  },  
  
{
name:"Ed Hardy Jeans",
price:35,
category:"pants",
  size:"34",
images:["https://i.postimg.cc/JhFxMNzk/IMG-4498.jpg",
        "https://i.postimg.cc/7hcQ8DNV/20251214%20214452.jpg",
       "https://i.postimg.cc/43kkHvV3/20251214%20220412.jpg",
        "https://i.postimg.cc/WzfxN0s0/20251214%20214221.jpg"
        
       ]
},

  {
name:"Juventus Shorts",
price:15,
category:"football",
size:"11-12 YRS",
images:["https://i.postimg.cc/28sX0k6P/20251212-212240.jpg"]
},
  
  {
    name:"Levis Pullover",
price:19,
category:"tops",
 size:"12 YRS",   
images:["https://i.postimg.cc/ydSKG1Wr/20251214%20213859.jpg",
        "https://i.postimg.cc/XJLTPThf/tmp%2002b8bfc2%2088ae%204296%20a78d%2054025e972cf7.jpg"
       ]
  }, 

  
  {
name:"Dybala Juventus Jersey",
price:45,
category:"football",
  size:"11-12 YRS",  
images:["https://i.postimg.cc/HWwD8PMR/20251231-122035.jpg",
       "https://i.postimg.cc/vBYK50BF/20251231%20122118.jpg"
       ]
},  
  
  {
name:"Adidas Football Trainers",
price:8,
category:"football",
  size:"14 YRS",
images:["https://i.postimg.cc/cJN2LxGC/20251212-205534.jpg"]
},
 
  
{
name:"CR7 Footballboots",
price:28,
category:"football",
  size:"38.5",
images:["https://i.postimg.cc/C569hbwL/Screenshot%2020260116%20222143%20One%20Drive%20(1).jpg"]
},
  
 {
    name:"Longsleeve Tommy Hilfiger Shirt",
price:25,
category:"tops",
   size:"S",
images:["https://i.postimg.cc/FFn6JgXq/20251213-115350.jpg",
       "https://i.postimg.cc/XqvT6s60/20251213-115155.jpg",
        "https://i.postimg.cc/zBxc7TbT/20251213-115149.jpg"
       ]
  }, 
  
{
name:"Juventus shorts",
price:15,
category:"football",
  size:"11-12 YRS",
images:["https://i.postimg.cc/8PjqyXbL/20251212-211843.jpg"]
},

  {
    name:"Dr. Martens Shoes",
    price:35,
    category:"shoes", 
     size:"44",
    images:["https://i.postimg.cc/fTrgk5Dq/20260319-122325.jpg"]
  },
  
{
name:"Spring Jacket",
price:20,
category:"jackets",
  size:"12 YRS",
images:["https://i.postimg.cc/L6yZcHX9/IMG%204765.jpg"]
},

 {
    name:"Calvin Klein Pullover",
price:25,
category:"tops",
   size:"14 YRS",
images:["https://i.postimg.cc/xdvrvkPV/tmp%208db1cac2%20c5f1%204e7e%20a053%2073fa394f9a3c.jpg",
       "https://i.postimg.cc/zvP4zTqL/IMG%204705.jpg",
        "https://i.postimg.cc/sf0LZ9Rf/IMG%204591.jpg"
       ]
  },  
  
  {
name:"Diadora Leggins",
price:9,
category:"pants",
    size:"12 YRS",
images:["https://i.postimg.cc/wT7SW4kV/tmp%2087226672%2013cc%2043cf%20b922%20163c2ff6d21b.jpg",
       "https://i.postimg.cc/yYMrL1x8/tmp%202b5f90f9%20d355%204548%20a9b3%20a91e9fac37d5.jpg"
       ]
},  
  
  {
name:"Jack&Jones Jeans",
price:22,
category:"pants",
    size:"13 YRS",
images:["https://i.postimg.cc/FsPJM9RF/IMG-4744.jpg",
       "https://i.postimg.cc/c4gb7gs7/IMG%204614.jpg"]
},

 {
name:"Small Pearl Earrings",
price:7,
category:"jewellery",
   size:"one size",
images:["https://i.postimg.cc/63WPCM3B/20260305%20124649.jpg"]
},  
  
  {
name:"Juventus Longsleeve",
price:19,
category:"football",
    size:"14 YRS",
images:["https://i.postimg.cc/9ftS46cP/20251212-211015.jpg"]
},  

  
{
name:"Puma Football Trainers",
price:8,
category:"football",
  size:"14 YRS",
images:["https://i.postimg.cc/gkTBr4mT/20260319-122035.jpg"]
},
 
  
 { name:"Gray Top",
price:6,
category:"tops",
  size:"S",
images:["https://i.postimg.cc/TPs0fV3b/IMG-4514.jpg"]
  },   
  

{
name:"Grey Cargo Pants",
price:17,
category:"pants",
  size:"13 YRS",
images:["https://i.postimg.cc/fWfdv7Qt/IMG_4779.jpg",
        "https://i.postimg.cc/vTDSND5Z/IMG%204779.jpg",
        "https://i.postimg.cc/XJLTPThf/tmp%2002b8bfc2%2088ae%204296%20a78d%2054025e972cf7.jpg"
       ]
},   
  
   {
name:"Calvin Klein Jeans",
price:40,
category:"pants",
     size:"12",
images:["https://i.postimg.cc/5NPFhx00/IMG-4593.jpg",
       "https://i.postimg.cc/26rs2z0J/IMG%204530.jpg",
        "https://i.postimg.cc/qqgZ5gyZ/IMG%204572.jpg",
        "https://i.postimg.cc/Y9M5bpXk/tmp%2047fb74aa%20dde3%204f07%209d50%20b797bdce21cf.jpg",
        "https://i.postimg.cc/gJmCNYM2/IMG%204509.jpg"
       ]
}, 
  
  {
name:"Juventus Footballsocks",
price:4,
category:"football",
    size:"kids",
images:["https://i.postimg.cc/NMB3pgNH/20251214%20212357.jpg"]
},  

  
  {
name:"The North Face Jacket (reversible)",
price:65,
category:"jackets",
    size:"12 YRS",
images:["https://i.postimg.cc/zvf9YxZ0/20251231%20120820.jpg",
        "https://i.postimg.cc/9MmkyLMT/20251231%20120554.jpg"]
   
},

 
     
  {
name:"Puma Football Shorts",
price:10,
category:"football",
 size:"14 YRS",
images:["https://i.postimg.cc/xj3mPGVv/IMG-4725.jpg"]
},
  
  {name:"Pink UGG Boots",
    price:59,
    category:"shoes", 
    size:"37", 
   images:["https://i.postimg.cc/MTRkD9rh/20251231%20122458.jpg",
          "https://i.postimg.cc/SNJwZ1Gj/20251231%20122514.jpg",
           "https://i.postimg.cc/yxWrbW0C/20251231%20122745.jpg",
           "https://i.postimg.cc/k5FZV07z/20251231%20122612.jpg"
          ]
  },

{
name:"Adidas Shorts",
price:8,
category:"pants",
   size:"11-12 YRS",
images:["https://i.postimg.cc/3x2f6s08/20251212-205251.jpg",
       "https://i.postimg.cc/9FRnPRWr/20251212-205400.jpg"
       ]
},
  
  
  {
    name:"Adidas Top",
price:12,
category:"tops",
     size:"11-12 YRS",
images:["https://i.postimg.cc/90bqF2B5/IMG-4624.jpg"]
  }, 
  
  
{
name:"Rain Jacket",
price:10,
category:"jackets",
   size:"4 YRS",
images:["https://i.postimg.cc/vTjSFMvM/tmp%2089cd3d5d%20bf2f%204b00%20a819%206ffdb5a990ef.jpg"]
},

  
{
    name:"Pink Zipper",
price:10,
category:"tops",
   size:"14 YRS",
images:["https://i.postimg.cc/rF0PG08Z/20251213-121356.jpg"]
  },  
  
  {
name:"Juventus Football Trainers",
price:12,
category:"football",
  size:"14 YRS",
images:["https://i.postimg.cc/Gh25c6n0/20260319-122132.jpg"]
},
  
  {
name:"Black Nike Shorts",
price:10,
category:"pants",
     size:"11-12 YRS",
images:["https://i.postimg.cc/GmccpnS9/tmp%2098f3badc%20e1d1%204632%208abb%20256e42f8b52e.jpg"]
},

  {
    name:"Pink Top",
price:6,
category:"tops",
    size:"XS",
images:["https://i.postimg.cc/430Ps6xh/IMG-4665.jpg"]
  },  
  
  
{
name:"Jako Football Trainers",
price:8,
category:"football",
  size:"164",
images:["https://i.postimg.cc/FFPMVX05/20251212-205143.jpg",
       "https://i.postimg.cc/wxbrscYr/20251212-205033.jpg"
       ]
},
 
  
{
    name:"Guess Pullover",
price:19,
category:"tops",
   size:"10-11 YRS",
images:["https://i.postimg.cc/RFgDdw6W/tmp%20ff695683%203118%204726%20a60e%200db18bc8c583.jpg",
       "https://i.postimg.cc/jj00n6P4/IMG%204601.jpg"
       ]
  },   
  
  {
    name:"Adidas Pullover",
price:19,
category:"tops",
     size:"11-12 YRS",
images:["https://i.postimg.cc/ZqWz9bP6/20251212%20205809.jpg"]
  }, 
  
  {
    name:"Black Nike Shorts",
price:9,
category:"pants",
     size:"14 YRS",
images:["https://i.postimg.cc/SRdzN4Gp/IMG-4603.jpg"]
  },
  
  
  {
name:"Small Silver Pearl Earrings",
price:7,
category:"jewellery",
     size:"one size",
images:["https://i.postimg.cc/fRYqFGSn/20260305%20124218.jpg"]
}, 
  
  {
    name:"Geox shoes",
    price:12,
    category:"shoes",
    size:"36",
images:["https://i.postimg.cc/g2h1pwQm/20260305%20165407.jpg",
       "https://i.postimg.cc/mg7pqv1Y/20260305%20165424.jpg"
       ]
  },  
  
  
 
  {
    name:"Juventus Shorts",
price:15,
category:"pants",
     size:"11-12 YRS",
images:["https://i.postimg.cc/VvBxydwh/20251212%20212108.jpg"]
  }, 
  
  {
name:"Jako Football Shorts",
price:10,
category:"football",
size: "164",
images:["https://i.postimg.cc/QxynVShv/20260319-121434.jpg"]
},
  
  {
    name:"Adidas Sport Shoes",
    price:15,
    category:"shoes", 
     size:"26",
    images:["https://i.postimg.cc/YqMS2PqC/20260312-115951.jpg",
           "https://i.postimg.cc/pXRdVSXT/20260312-115942.jpg"
           ]
  },
  
  {
    name:"Brazil Top",
price:12,
category:"tops",
     size:"XS",
images:["https://i.postimg.cc/mZCRNgvQ/tmp%20a5eda810%2069dd%204b7a%20b1f0%208a8e57210fff.jpg"]
  },
 
  {
name:"Adidas Football Shorts",
price:12,
category:"football",
  size:"11-12 YRS",   
images:["https://i.postimg.cc/ZngDtZL9/20251212-211743.jpg"]
},
  
  {
    name:"Jordan Pullover",
price:19,
category:"tops",
  size:"13-14 YRS",   
images:["https://i.postimg.cc/fWgP0jh9/tmp%209177dc13%200c1e%20423d%208d91%207204bb698c63.jpg",
       "https://i.postimg.cc/t468b1w6/tmp%20f7a61a0f%20165d%204a20%209fcc%20ad6d42396ad1.jpg"
       ]
  }, 

  {
    name:"Shortsleeve Tommy Hilfiger Shirt",
price:25,
category:"tops",
    size:"M", 
images:["https://i.postimg.cc/wv2SrSPb/20251213-115644.jpg",
       "https://i.postimg.cc/CLX99CP0/20251213-115539.jpg",
        "https://i.postimg.cc/MT6L19Tf/20251213-115627.jpg"
       ]
  }, 
 
{
    name:"Fila Zipper",
price:10,
category:"tops",
   size:"12 YRS",
images:["https://i.postimg.cc/Zn0DM060/20251213-120852.jpg",
       "https://i.postimg.cc/QMrwd8ZW/20251213%20121847.jpg"]
  },   
  
  {
    name:"Diadora Pullover",
price:17,
category:"tops",
     size:"12 YRS",
images:["https://i.postimg.cc/HkMFmJRW/IMG%204525.jpg"]
  },   
  
  {
    name:"Mattanza Cap",
price:7,
category:"accessories",
     size:"one size (adjustable)",
images:["https://i.postimg.cc/VNh14rsG/20251212%20203740.jpg"]
    },
  
  {
name:"CR7 Football Shorts",
price:12,
category:"football",
     size:"11-12 YRS",
images:["https://i.postimg.cc/8PjqyXbB/DSC%201115.jpg"]
},

  
{
name:"Camo Jacket",
price:8,
category:"jackets",
   size:"L",
images:["https://i.postimg.cc/W3Ny0531/20251212-210456.jpg",
       "https://i.postimg.cc/kG5kPT3w/20251212-210351.jpg"
       ]
},
  
  
  {
    name:"Pink Nike Shorts",
price:9,
category:"pants",
     size:"11-12 YRS",
images:["https://i.postimg.cc/15SSWZPh/tmp%204132f984%20bfc5%204146%208532%2096ff933ab431.jpg"]
  },
  
  {
    name:"Juventus Shorts",
price:15,
category:"pants",
     size:"7-8 YRS",
images:["https://i.postimg.cc/VvBxydwh/20251212%20212108.jpg"]
  },
  
  {
    name:"Black Jordan Shorts",
price:7,
category:"pants",
     size:"10-12 YRS",
images:["https://i.postimg.cc/W4y8TG1D/IMG-4556.jpg"]
  },
  
  {
    name:"Jordan Cap",
price:16,
category:"accessories",
     size:"one size (adjustable)",
images:["https://i.postimg.cc/1z81gm0p/20251212-203615.jpg"]
    },
  
 {
    name:"Dickies T-Shirt",
price:19,
category:"tops",
    size:"M",
images:["https://i.postimg.cc/7Y1HDZXb/20251212-204625.jpg"]
    }, 
  
  
  {
name:"Medium Silver Pearl Earrings",
price:7,
category:"jewellery",
     size:"one size",
images:["https://i.postimg.cc/fRYqFGSn/20260305%20124218.jpg"]
}, 
  
 {
name:"Adidas Shinpads",
price:5,
category:"football",
    size:"one size",
images:["https://i.postimg.cc/FHSwvf8s/20251212-203903.jpg"]
}, 
 
 
 { name:"Black Sweater",
price:12,
category:"tops",
   size:"10-11 YRS",
images:["https://i.postimg.cc/ydjwGw50/20251213%20124446.jpg",
       "https://i.postimg.cc/WzKfLj72/20251213%20124513.jpg"]
  },    
  
  {
    name:"New Balance T-Shirt",
price:19,
category:"tops",
     size:"M",
images:["https://i.postimg.cc/jjB0PpvB/20251212%20204854.jpg"]
    }, 
  
  {
    name:"Pyrex T-Shirt",
price:15,
category:"tops",
     size:"5-6 YRS",
images:["https://i.postimg.cc/zX7s0b0b/20251231%20115717.jpg",
       "https://i.postimg.cc/yxWrbW0B/20251231%20115644.jpg"
       ]
    }, 
  
   {
    name:"Richmond Sweater",
price:15,
category:"tops",
      size:"M",
images:["https://i.postimg.cc/SR5tFqGV/IMG%204714.jpg"]
    }, 
  
  {
    name:"Heart T-Shirt",
price:12,
category:"tops",
     size:"5 YRS",
images:["https://i.postimg.cc/2yRYRsZy/tmp%20ae28e528%2085b4%204bfa%20a396%201e95c291cc3a.jpg"]
    }, 
  
 {
name:"Juventus Training Jersey",
price:20,
category:"football",
    size:"11-12 YRS",
images:["https://i.postimg.cc/g2kWWqng/20251231%20122307.jpg"]
},  
    {
    name:"Vintage Sweater",
price:15,
category:"tops",
     size:"XL",
images:["https://i.postimg.cc/qMwvNGzN/20260312-120809.jpg"]
    }, 
  
  
  {
    name:"Adidas Sneakers",
    price:12,
     size:"36",
    category:"shoes",
images:["https://i.postimg.cc/CMkYHx3R/20251213%20123646.jpg",
       "https://i.postimg.cc/WpfyJ6PR/20251213%20123635.jpg"]
  }, 
 
  {
name:"Medium Diamond Earrings",
price:8,
category:"jewellery",
 size:"one size",    
images:["https://i.postimg.cc/fTJ6Hqv0/20260305-124945.jpg"]
},
  
  {
    name:"Nike Sneakers",
    price:25,
    category:"shoes",
    size:"36.5",
images:["https://i.postimg.cc/k48rcThp/20251212%20193130.jpg",
       "https://i.postimg.cc/85N2t1Z2/20251212-193229.jpg"]
  },  
  
  
 {
name:"Columbia Jersey",
price:35,
category:"football",
  size:"9-10 YRS",  
images:["https://i.postimg.cc/wvJKVwG7/20251231-121842.jpg",
       "https://i.postimg.cc/y80p5M3d/DSC%201140.jpg",
       "https://i.postimg.cc/3JdPLfZ9/20251231%20121927.jpg"
       ]
},  

  {
name:"Nike Jogger",
price:11,
category:"pants",
     size:"11-12 YRS",
images:["https://i.postimg.cc/zvP4zTqR/tmp-fb422832-d551-40cf-84ca-c332faf78898.jpg",
       "https://i.postimg.cc/rszYPzxg/tmp%205ed15ef9%209592%204cfc%208021%20b185f10b0f13.jpg"
       ]
},
  
 {
name:"Adidas Shinpads",
price:5,
category:"football",
    size:"one size",
images:["https://i.postimg.cc/FHSwvf8s/20251212-203903.jpg"]
},    
  
  {
    name:"Adidas Sneakers",
    price:13,
    category:"shoes", 
    size:"28",
    images:["https://i.postimg.cc/d32Yq52R/20251213%20123952.jpg"]
  }, 
  
 
{
    name:"Jordan Pullover",
price:16,
category:"tops",
  size:"13-14 YRS",
images:["https://i.postimg.cc/J7Tf5Cjh/tmp%2019b069da%206caa%2043f8%20a987%200bb65343e76c.jpg"]
  },  
   
  
  {
name:"Italy Jersey",
price:15,
category:"football",
    size:"11-12 YRS",
images:["https://i.postimg.cc/XNk5gK6m/IMG-4579.jpg",
       "https://i.postimg.cc/j5tpZs8q/tmp%201587f217%20c265%204b85%208875%2030a385c0e193.jpg",
        "https://i.postimg.cc/vmdkZYw7/tmp-9af0f97b-c93e-4a7b-a516-b2ad7c5a5db5.jpg"
       ]
},  
 
  {
name:"Medium Pearl Earrings",
price:7,
category:"jewellery",
 size:"one size",    
images:["https://i.postimg.cc/0QnL4L3X/20260305%20124814.jpg"]
},
  
 {
    name:"Nike Hairband",
price:5,
category:"accessories",
 size:"one size",   
images:["https://i.postimg.cc/SK75XBmG/IMG%204506.jpg",
       "https://i.postimg.cc/vHgN7gQX/IMG%204632.jpg"]
    }, 
  
   {
name:"Champion Jogger",
price:10,
category:"pants",
     size:"11-12 YRS",
images:["https://i.postimg.cc/J0gdVmQj/tmp%20d96ec521%2084a4%204b64%20b46c%209764cd9cf790.jpg"]
}

];
function showProducts(list){
 
productContainer.innerHTML = "";
 
list.forEach(product => {
 
let currentImage = 0;
 
const div = document.createElement("div");
 
// Bild
const img = document.createElement("img");
img.src = product.images[0];
img.style.width = "200px";
img.style.height = "250px";
img.style.objectFit = "cover";
 
// Buttons
const prev = document.createElement("button");
prev.textContent = "⬅️";
 
const next = document.createElement("button");
next.textContent = "➡️";
 
// Slider Funktion
prev.addEventListener("click", () => {
  currentImage--;
  if(currentImage < 0){
    currentImage = product.images.length - 1;
  }
  img.src = product.images[currentImage];
});
 
next.addEventListener("click", () => {
  currentImage++;
  if(currentImage >= product.images.length){
    currentImage = 0;
  }
  img.src = product.images[currentImage];
});
 
// Infos
const title = document.createElement("h3");
title.textContent = product.name;
 
const price = document.createElement("p");
price.textContent = "CHF " + product.price;
 
const size = document.createElement("p");
size.textContent = "Size: " + product.size;
 
// Cart Button
const btn = document.createElement("button");
btn.textContent = "Add to Cart";
 
btn.addEventListener("click", ()=>{
cartItems.push(product);
alert("Added!");
});
 
// Alles hinzufügen
div.appendChild(img);
div.appendChild(prev);
div.appendChild(next);
div.appendChild(title);
div.appendChild(price);
div.appendChild(size);
div.appendChild(btn);
 
productContainer.appendChild(div);
 
});
 
}


// 4️⃣ Warenkorb anzeigen
function showCart() {
  cart.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `${item.name} - CHF ${item.price} - Size ${item.size} <button class="delete">❌</button>`;

 const paypalContainer = document.getElementById("paypal-button-container");
 
// 👉 ANZEIGEN wenn im Cart
paypalContainer.style.display = "block";   
    
    
    li.querySelector(".delete").addEventListener("click", () => {
      cartItems.splice(index, 1);
      showCart();
    });

    cart.appendChild(li);
  });

  const totalDiv = document.createElement("h3");
  totalDiv.textContent = "Total: CHF " + total.toFixed(2);
  cart.appendChild(totalDiv);
const paypalContainer = document.getElementById("paypal-button-container");
  paypalContainer.innerHTML = ""; // vorherigen Button löschen

  if(total > 0){ // nur anzeigen, wenn Produkte im Warenkorb
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: total.toFixed(2) }
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert("Zahlung erfolgreich 🎉");
          cartItems = []; // Warenkorb leeren
          showCart();     // aktualisiert auch den PayPal Button
        });
      }
    }).render('#paypal-button-container');
  }
  // PayPal Button
  document.getElementById("paypal-button-container").innerHTML = "";
  if(total > 0){
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: { value: total.toFixed(2) }
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert("Zahlung erfolgreich 🎉");
          cartItems = [];
          showCart();
        });
      }
    }).render('#paypal-button-container');
  }
}

// 5️⃣ Events
cartBtn.addEventListener("click", showCart);

// Kategorie-Filter
document.querySelectorAll(".category").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    showProducts(products.filter(p => p.category === cat));
  });
});

document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
 
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
 
  showProducts(filtered);
});


// 6️⃣ Seite laden → alle Produkte anzeigen
showProducts(products);