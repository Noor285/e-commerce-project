import { db } from '/./firebase.js';
import { ref, child, get, set, update, remove, onValue, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const ProductsRef = ref(db, 'Products/');


const cards = document.querySelector(".cards");




onValue(ProductsRef, (snapshot) => {
    const products = snapshot.val();

    cards.innerHTML = "";

    for (var product in products) {
        let prod = products[product];

        let div = document.createElement("div");
        div.dataset.id = prod.id;
        div.className = "allProduct";
        // //
        // //
        // row.addEventListener("click", () => handleRowClick(row.dataset.id)); // Add this line
        // //
        // //
        
        let divinfo = document.createElement("div");
        let prdtitle = document.createElement("h2");
        prdtitle.className ="shadowing";
        prdtitle.innerText = prod.prodname;
        divinfo.appendChild(prdtitle);
        
        let prdPrice = document.createElement("p");
        prdPrice.className = "shadowing";
        prdPrice.classList.add('prodprice');
        prdPrice.innerText = prod.price +"$";
        divinfo.appendChild(prdPrice);

        let prdCateg = document.createElement("p");
        prdCateg.className = "shadowing";
        prdCateg.innerText = prod.category;
        divinfo.appendChild(prdCateg);

        
    
        div.appendChild(divinfo);

        // let imgstd = document.createElement("td");
        // imgstd.dataset.label = "img";
        // imgstd.className = "slider-td";
    
        
        
        // let divimgs = document.createElement("div");
        // divimgs.className = "slider";
    
    
        // let img1 = document.createElement("img");
        // img1.src = prod.mainimgurl;
        // divimgs.appendChild(img1);
    
        // let img2 = document.createElement("img");
        // img2.src = prod.side1imgurl;
        // divimgs.appendChild(img2);
    
        // let img3 = document.createElement("img");
        // img3.src = prod.side2imgurl;
        // divimgs.appendChild(img3);
    
        // imgstd.appendChild(divimgs);
        // row.appendChild(imgstd);
    
    
        let divimg = document.createElement("div");
        divimg.className="cardImg";
        
        let imgmain = document.createElement("img");
        imgmain.className= "prdimg";
        imgmain.src =prod.mainimgurl;
        divimg.appendChild(imgmain);
        
        div.appendChild(divimg);
    
        // let imgswitch = row.querySelector(".slider"); // Select .slider within the current row
        //     imgswitch.onclick = function () {
        //         switchImage(row);
        //     };
    
        cards.appendChild(div);

    }


    
},);







// Function to handle row click and navigate to another page
// function handleRowClick(productId) {
//     // Assuming you have another HTML file (e.g., details.html) to display details
//     window.location.href = `productdetials.html?productId=${productId}`;
// }




// // Function to handle row click and navigate to another page
// function handleRowClick(productId) {
//     // Assuming you have another HTML file (e.g., details.html) to display details
//     window.location.href = `productdetials.html?productId=${productId}`;
// }








// function switchImage(row) {
//     var currentImage = row.querySelector('.slider img:not([style*="display: none"])');
//     var nextImage = currentImage.nextElementSibling || row.querySelector('.slider img:first-child');

//     currentImage.style.display = 'none';
//     nextImage.style.display = 'block';
// }




