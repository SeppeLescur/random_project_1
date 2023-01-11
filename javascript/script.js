const mainElement = document.querySelector("main");
const bunnys = [];


setInterval(createBunny,1000);
setInterval(moveBunnys,100);


function createBunny() {
    //create obj
    let bunnyObj = new Object();
    bunnyObj.height = Math.random()*50 + "vh";
    bunnyObj.distance = 0;
    bunnys.push(bunnyObj);
    //create element
    const bunnyImg = document.createElement("img");
    bunnyImg.src = "./assets/bunny.png";
    bunnyImg.className = "bunny";
    bunnyImg.style.marginTop = bunnyObj.height;
    mainElement.append(bunnyImg)
    console.log(bunnys);
}
function moveBunnys() {
    
    let bunnyImgs = document.getElementsByClassName("bunny");
    for (i=0;i< bunnyImgs.length;i++){
        bunnys[i].distance += 10;
        let current = bunnyImgs.item(i);
        current.style.marginLeft = bunnys[i].distance + "px";
        if (bunnys[i].distance >= visualViewport.width){
            bunnyImgs.item(i).remove();
            bunnys.splice(i,1);
        }
    }
}