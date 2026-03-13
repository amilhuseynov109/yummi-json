let foodcards = document.getElementById('foodcards')

let foods = [
    {
        "id": 1,
        "img": "src/img/menu-item-1.png",
        "name": "Magnam Tiste",
        "category": "Lorem, deren, trataro, filede, nerada",
        "price": "5.95"
    },
    {
        "id": 2,
        "img": "src/img/menu-item-2.png",
        "name": "Aut Luia",
        "category": "Lorem, deren, trataro, filede, nerada",
        "price": "14.95"
    },
    {
        "id": 3,
        "img": "src/img/menu-item-3.png",
        "name": "Est Eligendi",
        "category": "Lorem, deren, trataro, filede, nerada",
        "price": "8.95"
    },
    {
        "id": 4,
        "img": "src/img/menu-item-4.png",
        "name": "Eos Luibusdam",
        "category": "Lorem, deren, trataro, filede, nerada",
        "price": "12.95"
    },
    {
        "id": 5,
        "img": "src/img/menu-item-5.png",
        "name": "Patos Alexandre",
        "category": "Lorem, deren, trataro, filede, nerada",
        "price": "16.95"
    },
    {
        "id": 6,
        "img": "src/img/menu-item-6.png",
        "name": "Laboriosam Direva",
        "category": "Lorem, deren, trataro, filede, nerada",
        "price": "9.95"
    }
]
foods.map(item => foodcards.innerHTML += `<div
            class="mt-[50px] px-[12px] flex flex-col items-center text-center">
            <img src="${item.img}" alt="" class="px-[60px] mb-[15px]"/>
            <div>
              <h4 class="mb-[5px] text-[24px] font-bold">${item.name}</h4>
              <p class="mb-[5px] text-[#909294]">${item.category}</p>
              <p class="mb-[16px] text-[24px] text-[#ce1212] font-bold">${item.price}</p>
            </div>
          </div>`
        )

let info = document.getElementById('info')

let data = [
    {
        "icon": "src/img/list.png",
        "title": "Corporis voluptates officia eiusmod",
        "extensions": "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
    },
    {
        "icon": "src/img/diamond.png",
        "title": "Ullamco laboris ladore lore pan",
        "extensions": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
    },
    {
        "icon": "src/img/inbox.png",
        "title": "Labore consequatur incidid dolore",
        "extensions": "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
    }
]

data.map(item => 
    info.innerHTML += `<div class="py-10 px-[30px] mx-3 mt-6 bg-white text-center flex flex-col items-center justify-between">
            <div class="bg-[#ce1212]/5 mb-[30px] w-[72px] h-[72px] rounded-full flex items-center justify-center hover:bg-[#ce1212] duration-200 group" >
              <img src="${item.icon}" class="max-w-10px"/>
            </div>
            <h4 class="text-[20px] mb-[30px] font-medium"> ${item.title}</h4> 
            <p class="text-[15px] text-[#636669] mb-4">${item.extensions}</p>
          </div>`
)

let slider = document.getElementById('slider')

let dataslider =  [
  {
    img: "src/img/testimonials-1.jpg",
    name: "Saul Goodman",
    work: "Ceo & Founder",
    desc: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    img: "src/img/testimonials-2.jpg",
    name: "Sara Wilsson",
    work: "Designer",
    desc: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    img: "src/img/testimonials-3.jpg",
    name: "Jena Karlis",
    work: "Store Owner",
    desc: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    img: "src/img/testimonials-4.jpg",
    name: "John Larson",
    work: "Entrepreneur",
    desc: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
];

dataslider.map(item => 
    slider.innerHTML += `<div class="hidden duration-700 ease-in-out" data-carousel-item>
                <div class="slider px-3 flex flex-col lg:flex-row items-center justify-between">
                  <div class="pl-[30px] border-l-2 border-[#ce1212] lg:mx-[12px] lg:mt-[24px]" >
                    <div class="mb-[16px]">
                      <p>
                        <i class="fa-solid fa-quote-left text-[#e08282]"></i>
                        <span class="text-[#212529] italic">${item.desc}</span>
                        <i class="fa-solid fa-quote-right text-[#e08282]"></i>
                      </p>
                      <h3 class="amatic font-semibold mt-[10px] mb-[5px] text-[#37373f] text-[20px]">
                        ${item.name}
                      </h3>
                      <h4 class="amatic mb-[10px] text-[#75777a] text-[14px]"> ${item.work}</h4>
                      <div>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                        <i class="fa-solid fa-star text-[#ffc107]"></i>
                      </div>
                    </div>
                  </div>
                  <img src="${item.img}" alt="" class="rounded-full lg:w-[170px] lg:h-[170px] lg:mx-[12px] lg:mt-[24px]"/>
                </div>
              </div>
    `

  
)

const slider2 = [
  { img: "src/img/events-1.jpg", title: "Custom Parties", price: "$99", description: "Quo corporis voluptas ea ad." },
  { img: "src/img/events-2.jpg", title: "Private Parties", price: "$289", description: "In delectus sint qui et enim." },
  { img: "src/img/events-3.jpg", title: "Birthday Parties", price: "$499", description: "Laborum aperiam atque omnis." },
  { img: "src/img/events-4.jpg", title: "Wedding Parties", price: "$899", description: "Laborum aperiam atque omnis." }
];

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('slider3');
    
    // 1. Генерируем слайды без лишних классов (только splide__slide)
    const slides = slider2.map(item => `
        <li class="splide__slide">
            <div class="bg1 text-white p-[30px] min-h-[600px] flex flex-col justify-end" 
                 style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${item.img}'); background-size: cover;">
                <h3 class="amatic text-[24px]">${item.title}</h3>
                <span class="text-[32px] border-b-2 border-[#ce1212] w-fit">${item.price}</span>
                <p class="mt-[15px]">${item.description}</p>
            </div>
        </li>
    `).join('');

    list.innerHTML = slides;

    // 2. Инициализируем. ВАЖНО: ID должен быть у контейнера с классом 'splide'
    new Splide('#party-slider', {
        type   : 'loop',
        perPage: 2,
        gap    : '20px',
        breakpoints: {
            768: { perPage: 1 }
        }
    }).mount();
});

let chefsData = document.getElementById('chefsData')

let chefs = [
  {
    name: "Walter White",
    role: "Master Chef",
    img: "src/img/chefs-1.jpg",
    desc: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
  },
  {
    name: "Sarah Jhonson",
    role: "Patissier",
    img: "src/img/chefs-2.jpg",
    desc: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
  },
  {
    name: "William Anderson",
    role: "Cook",
    img: "src/img/chefs-3.jpg",
    desc: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
  },
];

chefs.map(item =>

  
    chefsData.innerHTML += `<div class="rounded-lg overflow-hidden shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:scale-105 duration-200">
              <img src="${item.img}" alt="" class="w-full">
              <div class="pt-[10px] pb-[20px] px-[15px] text-center flex items-center justify-between flex-col">
                <h4 class="text-[20px] font-bold text-[#37373f] mb-[5px]">
                  ${item.name}
                </h4>
                <span class="text-[14px] text-[#909294] font-medium">${item.role}</span>
                <p class="mb-[16px] pt-[15px] text-[#636669] text-[14px] italic">
                  ${item.desc}
                </p>
              </div>
            </div>`
)

let gallery = [
  {
    img: "src/img/gallery-1.jpg",
  },
  {
    img: "src/img/gallery-2.jpg",
  },
  {
    img: "src/img/gallery-3.jpg",
  },
  {
    img: "src/img/gallery-4.jpg",
  },
  {
    img: "src/img/gallery-5.jpg",
  },
  {
    img: "src/img/gallery-6.jpg",
  },
  {
    img: "src/img/gallery-7.jpg",
  },
  {
    img: "src/img/gallery-8.jpg",
  },
];


document.addEventListener("DOMContentLoaded", function () {
  let galleryData = document.getElementById("galleryData");
  galleryData.innerHTML = gallery
    .map((item) => {
      return `<li class="splide__slide">
        <img src="${item.img}" alt="" class="w-full h-[300px] object-cover" />
      </li>`;
    })
    .join("");

  new Splide("#gallery-slider", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "10px",
    focus: "center",
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: true,
    breakpoints: {
      1024: { perPage: 3 },
      640: { perPage: 1 },
    },
  }).mount();
});