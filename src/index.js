var prodArr=[];

$(document).ready(function () {

    $("#add_product").click(function() {
        var product_sku=$("#product_sku").val();
        var product_name=$("#product_name").val();
        var product_price=$("#product_price").val();
        var product_quantity=$("#product_quantity").val();

        var obj = {
          product_sku:product_sku,
          product_name:product_name,
          product_price:product_price,
          product_quantity:product_quantity,
          id: Math.random().toString(16).slice(2),
        };
      
        if (obj.data == "") {
          alert("Please Write Some Task");
        } else {
          prodArr.push(obj);
          display();
        }
    })
    
    $("#dele").click(function () {
      $("#item").remove();
     
    })

})

function display() {
    // var table="<table><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr><tr><td>101</td><td>Product 101</td><td>$150.00</td><td>50</td><td><a href='#' class='edit'>Edit</a><a href='#' class='delete'>Delete</a></td></tr><tr><td>102</td><td>Product 102</td><td>$100.00</td><td>20</td><td><a href='#' class='edit'>Edit</a><a href='#' class='delete'>Delete</a></td></tr>";
    var table;
    prodArr.forEach(element => {
        table+="<tr><td>"+
        element.product_sku+
        "</td><td>"+
        element.product_name+
        "</td><td>"+
        element.product_price+
        "</td><td>"+
        element.product_quantity+
        "</td><td id='item'>"+
        "<a href='#' class='edit'>Edit</a><a href='#' class='delete' id='dele'>Delete</a></td>"
    });
    table+="</tr>"
   $('table').append(table);
}

// function delPro(val) {
//   for (let i = 0; i < prodArr.length; i++) {
//     if (val == prodArr[i].id) {
//       // console.log(arr[i].data);
//       prodArr.splice(i, 1);
//     }
//   }
//   display();
// }