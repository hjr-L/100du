$(document).ready(
    function () {
        click(header, 'city', 'a');//城市选择
        nav();//导航栏图标
        // click(search, 'menu', 'li');
        searchmenu();//搜索框
        search();//消息滚动
        // search1();//消息滚动
        clickon(options1,'hot_list2','ul');//卡片切换红店铺，新开张
        clickon(options2,'hot_list1','img');//地铁
        mouseover(side_section_tab,'tab_ul',coupons);//抢卷
        mouseover(section_tab,'tab_ul',lifestyle);//知道分子
        // clickon();
        click(section_tab, 'tab_ul', 'li');
        click(side_section_tab, 'tab_ul', 'li');
        img();
        list();//BBS论坛鼠标滑过
        prompt();//日历

    }
);

// 统一的点击函数
function click(e, cls, ta) {
    var $cls = $(e).find('.' + cls);
    $cls.on("click", ta, function () {
        var $active = $cls.find('.active');
        $active.removeClass('active');
        $(this).addClass('active');

    })
}
// 搜索框函数
function searchmenu(){
    var $li=$('#search .menu').find('li');
    var arrText = [
        '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
        '例如：昌平区育新站龙旗广场2号楼609室',
        '例如：万达影院双人情侣券',
        '例如：东莞出事了，大老虎是谁？',
        '例如：北京初春降雪，天气变幻莫测'
    ];
    var $text=$('#search .form').find('.text');
    // $text.attr('placeholder',arrText[0])
    $li.each(function(index){
        $(this).click(function(){
            
            $li.attr('class','');
            $(this).attr('class','active');
            $text.attr('placeholder',arrText[index])
        })
    })
}
// 点击切换卡片
function clickon(id,cls,ta) {
    var $nav = $(id).find('.nav');
    $nav.on("click", 'li', function () {
        var $active = $nav.find('.active');
        $active.removeClass('active');
        $(this).addClass('active');
        var Tid=$(this).attr('id');
        
        var $ta=$('.'+cls).find(ta);
        
        $ta.addClass('hide');
        var $show=$(id).find('.'+Tid);
        $show.removeClass('hide');
    })
    
}
// 鼠标滑过切换卡片
function mouseover(id1,cls,id2){
    var $li = $(id1).find('li');
    $li.on("mouseover", function () {
        var $active = $(id1).find('.active');
        $active.removeClass('active');
        $(this).addClass('active');
        var Tid=$(this).attr('id');
        
        var $ul=$(id2).find('ul');
        
        $ul.addClass('hide');
        var $show=$(id2).find('.'+Tid);
        $show.removeClass('hide');
    })
}
// 鼠标滑过图标变化
function nav() {
    var $a = $('#nav').find('li a');
    var $li = $('#nav').find('li');
    $a.each(
        function (index) {
            var m = -66 * index;
            $(this).css({
                "background-position": m + "px 0"
            });

        }
    );
    $li
        .on('mouseover', 'a', function () {
            var x = $(this).css("background-position-x");
            x = parseInt(x);
            $(this).css({
                "background-position": x + "px -70px",
                "text-decoration": "underline"
            });

        })
        .on('mouseout', 'a', function () {
            var x = $(this).css("background-position-x");
            x = parseInt(x);
            $(this).css({
                "background-position": x + "px 0",
                "text-decoration": "none"
            });

        })
}
// 消息滚动
function search() {
    var $ul = $('#search').find('.update_wrap ul');
    var $up = $('#search').find('.triangle_up');
    var $down = $('#search').find('.triangle_down');
    var lih=$ul.find('li').height();
    var i=0;
    
    $up.on('click',function(){
clearInterval(timer);
        move(-1);
    } );
    $down.on('click', function(){
clearInterval(timer);

        move(1);
    });
    function move(j){
        i=i+j;
        if(i<0){
            i=3
        }
        if(i>3){
            i=0
        }
        // console.log(i*j);
        
        $ul.animate({'top':-1*i*lih},900);
    }
var timer=setInterval(function (){move(1)},2200);

}

function list(){
    var $li=$('.ul_list ul li');
    $li.each(function(){
        $(this).mouseover(function(){
            $li.attr('class','');
            $(this).addClass('active');
        })
    })
}

//精彩推荐
function img() {
    var $pic = $('#pic');
    var $ul = $pic.find('ul ');
    var $ol = $pic.find('ol');
    var $p = $pic.find('p');
    var num = 0;
    function move(num) {
        var $active = $ol.find('.active');
        $active.removeClass('active');
        $ol.find('li').eq(num).addClass('active');
        var $active1 = $ul.find('.active');
        $active1.removeClass('active');
        var $li = $ul.find('li').eq(num);
        $li.addClass('active');
        var str = $li.find('img').attr('alt');
        $p.html(str);
    }
    $ol.on('click', 'li', function () {
        clearInterval(timer);
        var index = $ol.find('li').index($(this));
        move(index);
    })
    var timer = setInterval(function () {
        num = num + 1;
        if (num > 2) {
            num = 0;
        }
        move(num);
    }, 2200);
}

// 日历
function prompt(){
    var $today=$('.today_info');
    var $span=$('.calendar h3 span');
    var $ol=$('.calendar ol');
    var $oimg=$ol.find('.img');
    var $img=$('.today_info img');
    var $em=$('.today_info h3 em');
    var $p=$('.today_info p');
    var ptext = ['维米尔的写实主义风俗画迟到的荣誉维米尔的写实主义风俗画。。',
        '是美女呀',
        '曾经沧海难为水',
        '除却巫山不是云'
    ];
  $oimg.hover(function(){
      var num=$oimg.index($(this));
      var index=$(this).parent().index()%$span.length;
      $em.text($span.eq(index).text());
      $p.text(ptext[num]);
      var imgsrc=$(this).attr('src');
      $img.attr('src',imgsrc);
      var x=$(this).offset().left;
      var y=$(this).offset().top;
      var w=$($today).parent().offset().left;
      var z=$($today).parent().offset().top;
      $today.css({'left':x-w+55,'top':y-z-30});
      $today.removeClass('hide');
  },function(){$today.addClass('hide')});
}