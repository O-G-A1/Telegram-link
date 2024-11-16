const images =document.querySelectorAll(".my_image");

images.forEach(image=>{
    image.addEventListener("click", function(){
        window.location.href="infoprovision.html";
    })
})


function showSection(sectionId, clickedTab){
    
    const sections= document.querySelectorAll(".section");
    sections.forEach(section=>{
        section.style.display="none";
    });
    document.getElementById(sectionId).style.display="block";
    
document.querySelectorAll(".tab").forEach(tab=>{
    tab.classList.remove('active');
});
clickedTab.classList.add('active');


}

window.onload=function(){
    const defaultSectionId= "seedphrase";
    const defaultTab=document.getElementById("seed-btn");
    showSection(defaultSectionId, defaultTab);
};

