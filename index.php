<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Svelt Fishing Site</title>
    <script  src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="/asset/ajax.js"></script>
    <link rel="stylesheet" href="/asset/default.css">
    <link rel="stylesheet" href="/asset/item.css">
    <link rel="stylesheet" href="/asset/nav.css">
</head>
<body>
    <section>
        <div id="nav">
            <div id="nav_list">
                <p onclick="get_itemlist('00_00_00_00_00')" class="active">전체</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('01_00_00_00_00')">패션잡화/화장품</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('02_00_00_00_00')">의류/언더웨어</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('03_00_00_00_00')">출산/유아동/완구</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('04_00_00_00_00')">가구/생활/취미</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('05_00_00_00_00')">스포츠/건강/식품</p>
            </div>
            <div id="nav_list">
                <p onclick="get_itemlist('06_00_00_00_00')">가전/휴대폰/산업</p>
            </div>
        </div>
    </section>
    <section>
        <div id="item_list"></div>
    </section>
    
</body>
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
</script>
</html>