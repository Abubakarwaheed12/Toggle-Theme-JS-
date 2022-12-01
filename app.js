const toggle=document.querySelector(".toggle");
const body=document.body;

function toggle_theme(){
    if(body.classList.contains("dark_mode")){
        body.classList.remove("dark_mode");
        toggle.textContent="Dark Mode";
    }else{
        body.classList.add("dark_mode");
        toggle.textContent="Light Mode";
    }
}

toggle.addEventListener("click", toggle_theme);