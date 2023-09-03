
  // profile picture upload
  const imgDiv=document.querySelector('.user-img');
  const img=document.querySelector("#photo");
  const file=document.querySelector("#file");

  file.addEventListener('change',function(){
    const chosedFile=this.files[0];
    if(chosedFile){
      const reader=new FileReader();
      reader.addEventListener("load",function(){
        img.setAttribute("src",reader.result);
      })
      reader.readAsDataURL(chosedFile);
    }
  })

  // popup for title
  document.querySelector("#editTitle").addEventListener("click",function(){
    document.querySelector(".popupTitle").classList.add("active");
  });

  document.querySelector(".popupTitle .close-btn").addEventListener("click",function(){
    document.querySelector(".popupTitle").classList.remove("active");
  });
  


  


//popup for hourly rate
document.querySelector("#rate").addEventListener("click",function(){
  document.querySelector(".popupRate").classList.add("active");
});

document.querySelector(".popupRate .close-btn").addEventListener("click",function(){
document.querySelector(".popupRate").classList.remove("active");
});

//popup for projects
document.querySelector("#project").addEventListener("click",function(){
  document.querySelector(".popupProject").classList.add("active");
});

document.querySelector(".popupProject .close-btn").addEventListener("click",function(){
document.querySelector(".popupProject").classList.remove("active");
});

//popup for experiences
document.querySelector("#experiences").addEventListener("click",function(){
  document.querySelector(".popupExperiences").classList.add("active");
});

document.querySelector(".popupExperiences .close-btn").addEventListener("click",function(){
document.querySelector(".popupExperiences").classList.remove("active");
});























