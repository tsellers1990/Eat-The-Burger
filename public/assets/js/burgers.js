$(function(){
    $(".change-eaten").on("click", function(event) {
        let id = $(this).data("id");
        let newBurger = $(this).data("newburger");

        let newEatenState = {
            isEaten: newBurger
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log("changed isEaten to", newEatenState);
                location.reload();
            }
        )
    })
})