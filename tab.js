let tabheader = document.querySelectorAll(".tabheader");
// let add = document.querySelector("#add");
// let input = document.querySelector("#input");
// add.addEventListener("click", () =>{
//     let value = input.value;
//     let p = document.createElement('p');
//     let work = p.textContent = value;
//     tabheader.forEach((state) => {
//         if(state.target.classList.contains("active-tab")){
//             state.appendChild(work);
//         }else{

//         }
//     })
    
// })

tabheader.forEach((button) => {
    button.onclick = changeTab; 
});

function changeTab(){
    let tabNumber = parseInt(this.dataset.tab);
    document.querySelector(".active-tab").classList.remove("active-tab");
    this.classList.add("active-tab")

    switch(tabNumber){
        case 1:
            changeTabSetion(tabNumber);
            break;
        case 2:
            changeTabSetion(tabNumber);
            break;
        case 3:
            changeTabSetion(tabNumber);
            break;
        case 4:
            changeTabSetion(tabNumber);
            break;
        case 5:
            changeTabSetion(tabNumber);
            break;
        default:
            break;
    }

    function changeTabSetion(tabNumber){
        let currentTab = document.querySelector(".show-tab");
        currentTab.classList.remove("show-tab");
        currentTab.classList.add("hide-tab");

        let newSection = document.getElementById("tabsection-" + tabNumber);
        
        newSection.classList.remove("hide-tab");
        newSection.classList.add("show-tab");
    }
    let add = document.querySelector("#add");
    let input = document.querySelector("#input");
    add.addEventListener('click', () => {
        let value = input.value;
        console.log(value);
        let section = document.querySelector(".tabsection");
        if(section.classList.contains("show-tab")){
            console.log('checked');
            
        }else{
            console.log("not checked");
            
        }
    })
}

