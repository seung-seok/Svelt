<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>도매꾹 인기100</title>
    <script  src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="/asset/ajax.js"></script>
    <link rel="stylesheet" href="/asset/default.css">
    <link rel="stylesheet" href="/asset/item.css">
    <link rel="stylesheet" href="/asset/nav.css">
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />
</head>
<body>
    <section>
        <div id="nav">
            <div id="nav_list">
                <p onclick="get_itemlist('01_00')" class="active">전체</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('01_01')">패션잡화/화장품</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('01_02')">의류/언더웨어</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('01_03')">출산/유아동/완구</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('01_04')">가구/생활/취미</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('01_05')">스포츠/건강/식품</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('01_06')">가전/휴대폰/산업</p>
            </div>
        </div>

        <div id="nav_sub">
            <div id="nav_list">
                <p onclick="get_itemlist(`01_${category_num}`)">원산지전체</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist(`02_${category_num}`)">국산/국내산</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist(`03_${category_num}`)">국외산</p>
            </div>
        </div>
        
    </section>

    <section>
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">전체</div>
        <div class="swiper-slide">패션잡화/화장품</div>
        <div class="swiper-slide">의류/언더웨어</div>
        <div class="swiper-slide">출산/유아동/완구</div>
        <div class="swiper-slide">가구/생활/취미</div>
        <div class="swiper-slide">스포츠/건강/식품</div>
        <div class="swiper-slide">가전/휴대폰/산업</div>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    </section>

    <section>
        <div id="item_list"></div>
    </section>
    
</body>
<!-- Swiper JS -->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<script type="text/javascript">
    var nav_list = document.querySelectorAll("#nav_list p");
    
    [].forEach.call(nav_list, function(col){
        col.addEventListener("click", click, false);
    })
    
    function click() {
        // console.log(this);
        for(var list of nav_list){list.classList.remove('active');}
        this.className = 'active';
    }
    function checkV(data){
        console.log(data);
    }    

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 11,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
</script>
</html>