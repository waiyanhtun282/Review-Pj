const reviews =[
  {
    id:1,
    name:"john",
    job:"web Developer",
    img:" https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    text : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
    asperiores debitis incidunt, eius earum ipsam cupiditate libero?
    Iste, doloremque nihil?`
    
  },
  {
    id:2,
    name:"Ederson",
    job:"web Designer",
    img:" https://plus.unsplash.com/premium_photo-1661270443125-4f5f9390f856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    text : `WebKit is the web browser engine used by Safari, Mail, App Store, and many other apps on macOS, iOS, and Linux. Get started contributing code, or reporting bugs.`
    
  },
  {
    id:3,
    name:"Ederson",
    job:"Mobile app developer",
    img:" https://plus.unsplash.com/premium_photo-1661270460275-803dfb0cbdac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    text : `This webkit.org Terms of Use agreement (“Terms”) provides important information about use of this website and any webkit.org accounts you may have, so you should take the time to read and understand it. You may review, save or print any part of`,
    
  },
  {
    id:4,
    name:"Justin",
    job:"Game  developer",
    img:" https://media.istockphoto.com/id/1445182650/photo/glowing-glasses-gaming-experience-for-men-and-virtual-reality-concept.jpg?b=1&s=170667a&w=0&k=20&c=IU-MLL6z22AP8Dwm78fljkacs37XTjUB29TJEq6RwqE=",
    text : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
    asperiores debitis incidunt, eius earum ipsam cupiditate libero?
    Iste, doloremque nihil?`
    
  },


];

//select item

const img    = document.getElementById('person-img');
const author = document.getElementById('author');
const job    = document.getElementById('job');
const info   = document.getElementById('info');

const nextBtn =document.querySelector(".next-btn");
const prevBtn =document.querySelector(".prev-btn");
const randomBtn =document.querySelector(".random-btn");


//select starting item
let currentItem =0;

//load intial item
window.addEventListener('DOMContentLoad',function() {
  showPerson();
})

//show person base on item
function showPerson() {
  const item =reviews[currentItem];
  // console.log(item);
  img.src = item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent = item.text;
}

//show next button
nextBtn.addEventListener("click", () => {
  currentItem ++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson();
} );


//show prev button
prevBtn.addEventListener( 'click', () => {
  currentItem--;
  if(currentItem < 0){
    currentItem =reviews.length - 1;
  };
  showPerson();
});



//shoe random number
randomBtn.addEventListener("click", () => {
  currentItem=Math.floor(Math.random()*reviews.length)
  console.log(currentItem);
  showPerson();
})


