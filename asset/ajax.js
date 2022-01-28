var url = '/call_api.php';

$(document).ready(function () {
    get_itemlist();
});

function get_itemlist(cats=''){
    $.ajax({
        type : "GET",
        url : url + '/?cats=' + cats,
        dataType : "json",
        success : function (data) {
            console.log(data);
            create_element(data);
        },
        // error : function (data) {
        //     console.log("error", data);
        // }
        error: function (jqXHR) {
            alert("error: " + jqXHR.responseJSON.error);
        }
    });
}

function create_element(data){
    var layout = document.querySelector('#item_list');
    $('#item_list').empty();
    var i = 1;
    data.forEach(el => {
        var div = document.createElement("div");
        
        div.id = i;
        div.className = 'item';
        div.innerHTML += `<div class="item_no">${i}</div>`;
        div.innerHTML += `<img src="${el.thumb}" alt="" class="item_img">`;
        div.innerHTML += `<div class="item_title">${el.title}</div>`;
        div.innerHTML += `<div class="item_price">${el.price}원</div>`;
        div.innerHTML += `<div class="item_uni">최소${el.unitQty}개</div>`;
        layout.appendChild(div);
        i++;
    });
}