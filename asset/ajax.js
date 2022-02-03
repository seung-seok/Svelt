// var url = '/call_api.php';
var url = '/getPopularlitemList.php';

$(document).ready(function () {
    get_itemlist();
});

function get_itemlist(cats=''){
    // 대 카테고리에 따른 중 카테고리 설정
    (cats)?category_num = cats.split('_')[1] : category_num = '00';
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
            console.log("error: " + jqXHR.responseJSON.error);
        }
    });
    
}

function create_element(data){
    var layout = document.querySelector('#item_list');
    $('#item_list').empty();
    data.forEach(el => {
        var rank_class = '';
        var div = document.createElement("div");
        div.id = 'item_' + el.rank;
        div.className = 'item';

        // Rank 변동 check
        var rank_cal = el.rankYesterday - el.rank;
        
        if(Math.sign(rank_cal) == 1){
            rank_class = 'positive';
            rank_cal = `▲ ${rank_cal}`;
        }else if(Math.sign(rank_cal) == -1){
            rank_class = 'negative';
            rank_cal = `▼ ${-rank_cal}`;
        }else if(rank_cal == 0){
            rank_class = '';
            rank_cal = '-';
        }
        
        // NEW 상품
        if(el.rankYesterday == 'NEW'){
            rank_class = 'positive';
            rank_cal = `NEW`;
        }

        // div.innerHTML += `<div class="item_header">`;
        // div.innerHTML += `<div class="item_no">${el.rank.padStart(2,'0')}</div>`;
        // div.innerHTML += `<div class="item_rank ${rank_class}">${rank_cal}</div>`;
        // div.innerHTML += `</div>`;
      
        div.innerHTML += `<div class="item_header">
        <div class="item_no">${el.rank.padStart(2,'0')}</div>
        <div class="item_rank ${rank_class}">${rank_cal}</div>
        </div>`;

        div.innerHTML += `<img src="${el.thumb}" alt="" class="item_img">`;
        div.innerHTML += `<div class="item_title">${el.itemTitle}</div>`;
        div.innerHTML += `<div class="item_price">${el.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</div>`;
        div.innerHTML += `<div class="item_uni">최소${el.qty}개</div>`;
        layout.appendChild(div);
    });
}

{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
</svg> */}