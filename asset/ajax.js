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
        error: function (jqXHR) {
            console.log("error: " + jqXHR.responseText);
        }
    });
    
}

function create_element(data){
    // var layout = document.querySelector('#item_list');
    var layout = $('#item_list')[0];
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
      
        div.innerHTML += 
        `<div class="item_header">
        <div class="item_no">${el.rank.padStart(2,'0')}</div>
        <div class="item_rank ${rank_class}">${rank_cal}</div>
        </div>`;
        div.innerHTML += `<img src="${el.thumb}" alt="" class="item_img">`;
        div.innerHTML += `<div class="item_title">${el.itemTitle}</div>`;
        div.innerHTML += `<div class="item_price"><span style="font-size:24px">${el.price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>원</div>`;
        div.innerHTML += `<div class="item_uni">최소${el.qty}개</div>`;
        layout.appendChild(div);
    });
}