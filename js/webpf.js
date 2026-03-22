$(()=> {

    let scrollTop = 0;
    const winHeight = $(window).height() - 50;
    $(window).scroll(()=> {

        scrollTop = $(window).scrollTop();
        const homeTop = $("#home").offset().top;
        const aboutTop = $("#about").offset().top;
        const projectTop = $("#project").offset().top;
        const eventTop = $("#event").offset().top;
        const contactTop = $("#contact").offset().top;


        //스크롤 시 메뉴 하이라이트 변환
        if($(window).scrollTop() >= homeTop) {
            $("#home nav a").eq(0).addClass('active').siblings().removeClass('active');
        }
        if($(window).scrollTop() >= aboutTop) {
            $("#home nav a").eq(1).addClass('active').siblings().removeClass('active');
        }
        if($(window).scrollTop() >= projectTop) {
            $("#home nav a").eq(2).addClass('active').siblings().removeClass('active');
        }
        if($(window).scrollTop() >= eventTop) {
            $("#home nav a").eq(3).addClass('active').siblings().removeClass('active');
        }
        if($(window).scrollTop() >= contactTop -500) {
            $("#home nav a").eq(4).addClass('active').siblings().removeClass('active');
        }

        //스크롤 시 About SKills 의 스킬바가 애니메이션 된다.
        if($(window).scrollTop() >= aboutTop + 600) {
            skillsAnimation();
        }

        //스크롤 시 프로젝트 작업물이 올라온다.
        const pj1Top = $("#pj1").offset().top;
        const pj2Top = $("#pj2").offset().top;

        if($(window).scrollTop() >= pj1Top -600) {
            $("#pj1").addClass('act');
        }
        if($(window).scrollTop() >= pj2Top - 600) {
            $("#pj2").addClass('act');
        }

        //스크롤 시 메뉴 배경 그림자 적용
        if($(window).innerWidth() > 800) {
            if(scrollTop > winHeight) {
                $("#home nav").addClass('act')
            } else {
                $("#home nav").removeClass('act')
            }
        }


    });

    //모바일 화면에서 메뉴 버튼 보이기
    const menuClose = ()=> {
        $("#home nav").removeClass('act');
        $("#home button").text('menu');
        $("body").css('overflow', 'auto');
    }
    if($(window).innerWidth() <= 800) {
        $("#home button").click(()=> {
            const txt = $("#home button").text() === 'menu';
            txt ? ($("#home nav").addClass('act'), $("#home button").text('close').css('overflow', 'hidden')) : menuClose();
        });
        $("#menu a").click(()=> {
            menuClose();
        });
    }



    //오른쪽 하단 Top 버튼
    $(window).scroll(()=> {
        scrollTop = $(window).scrollTop();
        
        if($(window).scrollTop() >= 300) {
            $("#topbutton span").fadeIn();
        }
        if($(window).scrollTop() < 300) {
            $("#topbutton span").fadeOut();
        }

    });


    /* //스킬박스에 마우스는 대면 스킬바가 애니메이션 된다.
    $(".skillsbox").mouseenter(()=> {
        $("#about .skillsform").slideUp();
    }); */

    const skillsAnimation = ()=> {
        let num = 0;
        $(".skillsform progress").each((i, j)=> {
            num = i * 200;
            const x = parseInt($(".skillsform progress").eq(i).text());
            $(".skillsform progress").eq(i).delay(num).animate({value:x}, 1000);
        });
    }

    //프로젝트에서 (모바일웹 바로가기) 클릭 했을 때
    $(".mobileweb").click(e=> {
        e.preventDefault();
        window.open(
            e.currentTarget.href,
            'win1',
            'top=50, left=100, width=414, height=740, toolbar=no, scrollbars=no, resizable=no'
        );
    });
    $('.mobileweb').keypress(e=>{
        if(e.key === "Enter") {
            e.currentTarget.trigger("click");
        }
    });


    //이벤트 상세페이지 이미지 클릭 시 큰 이미지 보이기 (팝업 모달)
    $("#event button").click(e=> {
        let src = $(e.currentTarget).children('img').attr('src');
        const alt = $(e.currentTarget).children('img').attr('alt');
        src = src.replace(".jpg", "_big.jpg");
        $("#popup img").attr({"src" : src, "alt" : alt});
        $("#popup").fadeIn();
        $("#popup h3").text(alt);
    });
    $("#popup").click(()=> {
        $("#popup").fadeOut();
    });
    $(document).keydown(e=> {
        if(e.key === "Escape") $("#popup").fadeOut();
    });


}) //js 끝.