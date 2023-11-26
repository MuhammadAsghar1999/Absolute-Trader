// section 2
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    const translateValue = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

// Automatically change slide every 2 seconds
setInterval(showSlide, 5000);
// add to cart
function getData() {
    var get = localStorage.getItem("cartData");
    console.log(JSON.parse(get));
  }
  
  getData();
  var cardArr = [
    {
      id: 0,
      image:
        "https://us.123rf.com/450wm/blueone/blueone1301/blueone130100148/17553454-driving-in-the-night-city.jpg?ver=6",
      title: "Card title",
      des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 1,
      image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
      title: "Our card",
      des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, enim.",
    },
  ];
  
  // console.log(cardArr);
  
  var cardCon = document.getElementById("cardContent");
  
  for (var i = 0; i < cardArr.length; i++) {
    var image = cardArr[i].image;
    var title = cardArr[i].title;
    var description = cardArr[i].des;
    var id = cardArr[i].id;
    //   console.log(image);
    cardCon.innerHTML += `
    <div class="card m-2" style="width: 18rem">
          <img
            src=${image}
            class="card-img-top"
            alt="..."
            height="160px"
          />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
              ${description}
            </p>
            <a href="#" class="btn btn-primary" onclick=(cart(${id}))>Add to Cart</a>
          </div>
        </div>
    `;
  }
  var arr = [];
  function cart(index) {
    //   console.log(index);
    console.log(cardArr[index]);
    var sendingObj = cardArr[index];
    arr.push(sendingObj);
    //   console.log(arr);
    localStorage.setItem("cartData", JSON.stringify(arr));
  }
