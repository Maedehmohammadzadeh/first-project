const Name=document.getElementById("name-input");
const Familyname=document.getElementById("family-input");
const Fathername=document.getElementById("father-input");
const allinput=document.querySelectorAll(".select-input");
const age=document.getElementById("age");
const contpage=document.querySelector('.cont-page');
const bt1=document.getElementById('button');
const contform=document.getElementById('form')
const inputemail=document.getElementById('input-email')
let bsubmit=false;
bt1.addEventListener('click',function bt(){
    bt1.style.background=" rgb(247, 67, 67)";
})

age.addEventListener('blur',function number(){
    let numberage=parseInt(age.value);
    console.log(numberage);
    if(numberage<18){
        age.nextElementSibling.style.display='block';
        contpage.className += ' shake';
        bsubmit=false;
        
    }
    else{
        age.nextElementSibling.style.display='none';
        bsubmit=true;
    }
})

allinput.forEach(input => {
     input.addEventListener('blur',function ab(){
       if(input.value.length < 3){
         input.nextElementSibling.style.display='block';
         contpage.className += ' shake';
         bsubmit=false;
        
        }
       else{
           input.nextElementSibling.style.display='none';
           contpage.className='cont-page';
           bsubmit=true;
       }
    })
})
contform.addEventListener('submit',function form1 (e){
    if(bsubmit === false){
        contpage.className += ' shake';
        e.preventDefault();
    }
    else{
        contpage.className='cont-page';
        bsubmit=true;
    }
})

inputemail.addEventListener('blur',function inputE(){
  let Evalue=inputemail.value;
  let emailRegex= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+[.]+[a-zA-Z]*$/
  if(Evalue.match(emailRegex)){
      inputemail.nextElementSibling.style.display='none';
  }
  else{
      console.log('hh')
    inputemail.nextElementSibling.style.display='block';
    contpage.className += ' shake';
    bsubmit=false;
  }
})

let CntrActiv=false;
let CActiv=false;
let VActiv=false;
document.body.addEventListener('keydown', function active(event){
    if(event.key=='control'){
        CntrActiv=true;
    }

    if(CntrActiv==true && event.code=='keyC'){
     event.preventDefault();
     console.log('jn')
    }
    if ( CntrActiv == true && event.code == 'KeyV') {
        event.preventDefault()
        console.log('hh')

      } 
})