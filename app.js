
document.getElementById("search-btn").addEventListener("click",(event) => {
    const receive = document.getElementById("search-box").value;
    //console.log(receive);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${receive}`)
        .then(res => res.json())
        .then( data=> displayAmeals(data.meals))//THis is an object thats why written .meals otherwise if it will array it will writen data
})


const displayAmeals = ( items ) => {
        console.log(items);
        //console.log(items.length);
        const con = document.getElementById("product-container");
        if(items){
            items.forEach((item) => {
                const div = document.createElement("div");
                div.classList.add('product-cls');
                div.innerHTML = `
                    <img class = "img-pro" src = ${item.strMealThumb} onClick="showiteminfo('${item.idMeal}')" />
                    <h5> <span class="name-item"> ${item.strMeal.slice(0,10)} </span> </h5>
                `;
                const div1 = document.createElement("div");
                con.appendChild(div);
                con.appendChild(div1);
            })
        }
        else{
            const con = document.getElementById("product-container");
            //target.parentNode.removeChild(con);
            const div = document.createElement("div");
            div.innerHTML = `
                <h3> No Data found.  </h3>
            `;
            con.appendChild(div);
        }       
}
const showiteminfo = (id) => {
    //alert(id);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => displayusingID(data.meals));//THis is an object thats why written .meals otherwise if it will array it will writen data
}
const displayusingID = (item) => {
    const tmp = document.getElementById("showiteminfo");
    item.forEach(( data ) => {
        console.log(data);
        const div = document.createElement("div");
        div.classList.add('item-detail-cls');
        div.innerHTML = `
            <img class = "img-item" src = ${data.strMealThumb} />
            <h5>  ${data.strMeal} </h5> <b> Ingredients </b>
            <li> ${data.strIngredient1} </li>
            <li> ${data.strIngredient2} </li>
            <li> ${data.strIngredient3} </li>
            <li> ${data.strIngredient4} </li>
            <li> ${data.strIngredient5} </li>
            <li> ${data.strIngredient6} </li>
            <li> ${data.strIngredient7} </li>
        `;
        tmp.appendChild(div);
    })
}
