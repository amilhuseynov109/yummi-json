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