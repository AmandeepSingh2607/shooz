
const product = [
    {
        id: 0,
        image: '/pro/irene-kredenets-dwKiHoqqxk8-unsplash.jpg',
        title: 'Nike Zoom Vomero 5 SE',
        price: 149,
    },
    {
        id: 1,
        image: '/pro/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg',
        title: 'Air Jordan 1 Low SE Craft',
        price: 199,
    },
    {
        id: 2,
        image: '/pro/piyush-haswani-gAVIw1zs1fU-unsplash.jpg',
        title: 'Nike Air Max Excee',
        price: 229,
    },
    {
        id: 3,
        image: '/pro/ryan-plomp-76w_eDO1u1E-unsplash.jpg',
        title: 'Nike ACG Mountain Fly 2 Low',
        price: 119,
    },
    {
        id: 4,
        image: '/pro/travis-essinger-iOv3CqiZLtE-unsplash.jpg',
        title: 'Nike Air Force 1 Low Retro',
        price: 199,
    },
    {
        id: 5,
        image: '/pro/imani-bahati-LxVxPA1LOVM-unsplash.jpg',
        title: 'Air Jordan 1 Mid SE',
        price: 169,
    }
 ];
 const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
 document.getElementById('root').innerHTML = categories.map((item)=>
 {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
 }).join('')
 
 var cart =[];
 
 function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
 }
 function delElement(a){
    cart.splice(a, 1);
    displaycart();
 }
 
 function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
 
    
 }
 