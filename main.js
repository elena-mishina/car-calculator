$(document).ready(function(){

    // var $srcValue = $(".car-image").attr("src");

    var $carImg = $(".car-image");
    var $color = $(".color-item");

    // $(".car-image").on("click", function(){
    //     $(this).attr("src", "./blue.png");
    // });

    // $(".color-item.color-blue").on("click", function(){
    //     $(".car-image").attr("src", "./blue.png");
    // });

    // $(".color-item.color-white").on("click", function(){
    //     $(".car-image").attr("src", "./white.png");
    // });

    var modelSpecs,
        modelPrice,
        modelSpecsHolder,
        modelPriceHolder;

    modelSpecsHolder = $("#modelSpecs");
    modelPriceHolder = $("#modelPrice");

    modelPrice = 0;
    modelSpecs = "";

    $("#autoForm input").on("change", function(){
        calculatePrice();
        compileSpecs();
    });

    calculatePrice();
    compileSpecs();

    $color.on("click", function(){
        var imgPath = $(this).attr("data-img-path");
        $carImg.fadeOut(300, function(){
            $carImg.attr("src", imgPath).fadeIn(300);
        });
    });

    function calculatePrice(){
        var modelPriceEngine = $("input[name=engine]:checked", "#autoForm").val();
        var modelPriceTransmission = $("input[name=transmission]:checked", "#autoForm").val();
        var modelPricePackage = $("input[name=package]:checked", "#autoForm").val();

        modelPriceEngine = parseInt(modelPriceEngine);
        modelPriceTransmission = parseInt(modelPriceTransmission);
        modelPricePackage = parseInt(modelPricePackage);

        modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;

        // modelPrice = $("input[name=engine]:checked", "#autoForm").val();
        // modelPrice += $("input[name=transmission]:checked", "#autoForm").val();
        // modelPrice += $("input[name=package]:checked", "#autoForm").val();

        // alert(modelPrice);

        modelPriceHolder.text( addSpace(modelPrice) + " руб.");
    };

    function compileSpecs(){
        modelSpecs = $("input[name=engine]:checked + label", "#autoForm").text();
        modelSpecs = modelSpecs + ", " + $("input[name=transmission]:checked + label", "#autoForm").text();
        modelSpecs = modelSpecs + ", " + $("input[name=package]:checked + label", "#autoForm").text() + ".";

        // alert(modelSpecs);

        modelSpecsHolder.text(modelSpecs);
    };

    function addSpace(nStr) {
        nStr +="";
        x = nStr.split(".");
        x1 = x[0];
        x2 = x.lenght > 1 ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, "$1" + " " + "$2");
        }
        return x1 + x2;
    };

});
