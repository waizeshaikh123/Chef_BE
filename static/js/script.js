$(function(){
    $(".yearly").click(function(){
        $(".yearly").css("background","#10B981")
        $(".monthly").css("background","#363636")
        $(".sub .m-h2").html("$29.99<sub>/Yearly</sub>");
        $(".sub .m-h1 sub").html("<sub>/Yearly</sub>");
    });

    $(".monthly").click(function(){
        $(".monthly").css("background","#10B981")
        $(".yearly").css("background","#363636")
        $(".sub .m-h2").html("$2.99<sub>/monthly</sub>");
        $(".sub .m-h1 sub").html("<sub>/monthly</sub>");
    });
});

$(function(){
    a = 1
    $(".main-ingre").click(function(){
        if (a == 1){
            $(".add-ingre").css({
                display:"block"
            });
            a = 0
        }
        else{
            $(".add-ingre").css({
                display:"none"
            });
            a = 1
        }
    });

    $(".cross-span").click(function(){
        $(".main-span").css({
            display:"none"
        });
    });
});

$(function(){
    a = 1
    $(".main-ingre-2").click(function(){
        if (a == 1){
            $(".add-ingre-2").css({
                display:"block"
            });
            a = 0
        }
        else{
            $(".add-ingre-2").css({
                display:"none"
            });
            a = 1
        }
    });
});

$(function(){
    b = 1
    $(".scroller").on({
        click : function(){
            if(b == 1){
                $(".scroller").css({
                    background:"#10B981"
                })
                $(".child-scroller").css({
                    position: "absolute",
                    left:"54%",
                    transition:"0.4s"
                })
                b = 0
            }
            else{
                $(".scroller").css({
                    background:""
                })
                $(".child-scroller").css({
                    position: "absolute",
                    left:"7%",
                })
                b = 1
            }
        },
    });
});

$(function(){
    $(".gourmet").click(function(){
        $(".gourmet").css({
            background:"#10b981",
        })
        $(".all-in-one").css({
            background:"",
        })
    });
    $(".all-in-one").click(function(){
        $(".all-in-one").css({
            background:"#10b981",
        })
        $(".gourmet").css({
            background:"",
        })
    });
});
