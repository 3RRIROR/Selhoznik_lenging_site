var body = document.body,
html = document.documentElement;


let height_value, innerHeight;
const progress_bar = document.querySelector('.progress_bar')  


window.addEventListener('scroll', SearchWidth)


function SearchWidth(){
  height_value = document.body.scrollHeight;
  innerHeight = window.innerHeight;
  progress_bar.style.width = (pageYOffset * 100) / (height_value - innerHeight) + '%';
}