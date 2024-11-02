const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./assets/images/air.png",
      },
      {
        code: "darkblue",
        img: "./assets/images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./assets/images/jordan.png",
      },
      {
        code: "green",
        img: "./assets/images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./assets/images/blazer.png",
      },
      {
        code: "green",
        img: "./assets/images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./assets/images/crater.png",
      },
      {
        code: "lightgray",
        img: "./assets/images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./assets/images/hippie.png",
      },
      {
        code: "black",
        img: "./assets/images/hippie2.png",
      },
    ],
  },
];

let chooseProduct = products[0];

const currentPorductImg = document.querySelector(".productImg");
const currentPorductTitle = document.querySelector(".productTitle");
const currentPorductPrice = document.querySelector(".productPrice");
const currentPorductColors = document.querySelectorAll(".color");
const currentPorductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    chooseProduct = products[index];

    //change text of currentProduct
    currentPorductTitle.textContent = chooseProduct.title;
    currentPorductPrice.textContent = "$" + chooseProduct.price;
    currentPorductImg.src = chooseProduct.colors[0].img;

    //assing new color
    currentPorductColors.forEach((color, index) => {
      color.style.backgroundColor = chooseProduct.colors[index].code;
    });
  });
});

currentPorductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentPorductImg.src = chooseProduct.colors[index].img;
  });
});

currentPorductSizes.forEach((size, index) => {
  size.addEventListener("click", (e) => {
    currentPorductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector('.productBtn')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', () => {
    payment.style.setProperty('display','flex')
})

close.addEventListener('click', () => {
    payment.style.setProperty('display','none')
})
