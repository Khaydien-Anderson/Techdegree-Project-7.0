//FUNCTION for mobile burger menu
function myFunction() {
    var x = document.getElementById("navlist");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

  };

  //function for submenu under video projects

  const vidProject = document.getElementById('videos');
const list = document.querySelector('#navlist');
const socialmedia = document.getElementById('socialmedia');

  function closeSubMenu() {
        let li = document.querySelector('li:nth-child(4)');
        let li2 = document.querySelector('li:nth-child(3)');
      
        li2.style.display = 'none';
        li.style.display = 'none'; 
        vidProject.setAttribute("onclick", "openSubMenu()")
  };

//Open submenu
  function openSubMenu() {
    let li = document.querySelector('li:nth-child(4)');
    let li2 = document.querySelector('li:nth-child(3)');
  
    li2.style.display = '';
    li.style.display = ''; 
    vidProject.setAttribute("onclick", "closeSubMenu()")
};

//CREATE NEW LIST ELEMENTS IN SUBMENU
vidProject.addEventListener('click', subfunction => {
    let i = 0;
      do {
       i++;
       let li = document.createElement('li');
       let li2 = document.createElement('li');
       list.appendChild(li);
       list.appendChild(li2);
       li.innerHTML = '<a href="producer.html">Producer</a>';
       li2.innerHTML = '<a href="production_manager.html">Production Manager</a>';
      li.style.width = '30%';
      li2.style.width = '30%';
       vidProject.setAttribute("onclick", "closeSubMenu()")
       li.setAttribute("href", "producer.html")
       list.insertBefore(li, socialmedia);
       list.insertBefore(li2, socialmedia);
      } 
      while (i>4);
    }, {once: true} ) ;
   

    //TOGGLE BUTTONS ON CONTACT FORM

   // Collect Data from Contact Form

   const form = document.querySelector('.my-form');
   const submit = form.querySelector('input[type="submit"]');

   function getDataForm(e) {
    
    e.preventDefault();

    let formData = new formData(form);

    
   };