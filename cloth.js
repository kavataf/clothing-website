let bars = document.querySelector('.menu-btn');
let links = document.querySelector('.links');

bars.addEventListener("click", function(){
    links.classList.toggle('active');
});

var swiper = new Swiper(".container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const products = [
  {
    id: 1,
    title: "split thigh cami dress",
    category: "events",
    price: 37,
    img: "img/ev1.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  },
  {
    id: 2,
    title: "one shoulder twist front dress",
    category: "events",
    price: 19,
    img: "img/ev2.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "off shoulder split thigh dress",
    category: "events",
    price: 26,
    img: "img/ev3.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  },
  {
    id: 4,
    title: "drapped one shoulder wrap dress",
    category: "events",
    price: 43,
    img: "img/ev4.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt. `,
  },
  {
    id: 5,
    title: "petite split thigh dress",
    category: "dresses",
    price: 17,
    img: "img/dr1.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt. `,
  },
  {
    id: 6,
    title: "one shoulder cut out",
    category: "dresses",
    price: 19,
    img: "img/dr2.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  },
  {
    id: 7,
    title: "off shoulder ruched bodycon",
    category: "dresses",
    price: 13,
    img: "img/dr3.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt. `,
  },
  {
    id: 8,
    title: "one shoulder wrap knot",
    category: "dresses",
    price: 15,
    img: "img/dr4.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.  `,
  },
  {
    id: 9,
    title: "flap pocket side cargo pants",
    category: "bottoms",
    price: 28,
    img: "img/bot1.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  },
  {
    id: 10,
    title: "high waist wide leg pants",
    category: "bottoms",
    price: 11,
    img: "img/bot2.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  },
  {
    id: 11,
    title: "split thigh wide leg pants",
    category: "bottoms",
    price: 16,
    img: "img/bot3.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  }, {
    id: 12,
    title: "high waist flap pocket",
    category: "bottoms",
    price: 28,
    img: "img/bot4.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  }, {
    id: 13,
    title: "floral tie side crop top",
    category: "tops",
    price: 7,
    img: "img/top1.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  }, {
    id: 14,
    title: "asymmetrical neck lantern sleeve",
    category: "tops",
    price: 15,
    img: "img/top2.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  }, {
    id: 15,
    title: "floral wrap tie side",
    category: "tops",
    price: 7,
    img: "img/top3.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  }, {
    id: 16,
    title: "asymmetrical neck chain top",
    category: "tops",
    price: 10,
    img: "img/top4.jpg",
    desc: `lorem ipsum dolor sit amet consectetur adipisicing elit.<br> 
    Dolorem placeat voluptatem omnis rerum aperiam in ut iure fugit quod,<br>
    nam accusantium blanditiis. Perferendis recusandae dicta natus dignissimos architecto<br>
    itaque nesciunt.`,
  },
];
// get parent element
const boxcontainer = document.querySelector(".box-container");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayproductsItems(products);
  displayproductsButtons();
});

function displayproductsItems(productsItems) {
  let displayproducts = productsItems.map(function (item) {
    // console.log(item);

    return `<div class="box">
          <img src=${item.img} alt=${item.title} style="width: 30rem; height: 30rem;" class="image" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </div>`;
  });
  displayproducts = displayproducts.join("");
  // console.log(displayproducts);

  boxcontainer.innerHTML = displayproducts;
}
function displayproductsButtons() {
  const categories = products.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const productsCategory = products.filter(function (productsItem) {
        // console.log(productsItem.category);
        if (productsItem.category === category) {
          return productsItem;
        }
      });
      if (category === "all") {
        displayproductsItems(products);
      } else {
        displayproductsItems(productsCategory);
      }
    });
  });
}


