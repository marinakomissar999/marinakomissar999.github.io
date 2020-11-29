$(document).ready(function() {
    $( "#plot" ).on( "click", function() {
        var expression = $("#expression").val();
        console.log(expression);

        try {
            functionPlot({
                target: '#graph',
                data: [{
                        fn: $.trim(expression),
                }],
                xAxis: {
                    label: "X",
                    domain: [-5, 5]
                },
                yAxis: {
                    label: "Y"
                },
                grid: true,
                width: 630,
                height: 630,
            });
            $("#graph_title").text("y(x) = " + expression);
         } catch (error) {
            console.log("plot function", error);
            $("#graph_title").text("Неверная запись функции.");
         }
    });

    $("#expression").on('keypress',function(e) {
            if(e.which == 13) {
                $("#plot").click();
            }
    });
    $("#plot").click();
}
);
