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
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            isEaten: $("[name = isEaten]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger".on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                location.reload();
            }
        )
    }))
});
