var wikiData;
// var queryTerm = document.getElementById("queryTerm").value;

$("#search").on("click", function() {
    var searchTerm = $("#searchTerm").val();
    // var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?&redirects=main%20page&action=parse&format=json&prop=text&section=0&page=" + searchTerm + "&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function(data) {
            console.log(data);
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#output').html($(blurb).find('p'));

            // finding a tags from data
            atag = $("#output").find("a");

            // for each a tag, grab the attribute href save it to a variable href. 
            // Then, select each href and replace it with the url and concatenate the href value found from above.
            atag.each(function() {
                var href = $(this).attr('href');
                $(this).attr('href', "https://en.wikipedia.org" + href);
                $(this).attr("target", "_blank");
            });


            // console.log(changed);
            // console.log('wiki',s wikiData)
        },
        error: function(errorMessage) {}

    });
});

$("#random").on("click", function() {

    var randomArray = ["duck", "cat", "bird", "computer", "Southern Methodist University", "web developer", "cow", "ostrich", "Dallas", "Texas", "fossil", "reptile", "engine", "mouse", "spongebob squarepants", "Student", "Happy", "Television", "Hawaii", "The United States", "Canada", "Mexico", "dog", "marsupial", "India", "meme"]
    var randomNumber = Math.floor(Math.random() * randomArray.length);
    var randomArray = randomArray[randomNumber];
    console.log(randomArray);


                $.ajax({
                    type: "GET",
                    url: "http://en.wikipedia.org/w/api.php?&redirects=main%20page&action=parse&format=json&prop=text&section=0&page=" + randomArray + "&callback=?",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    dataType: "json",

                    success: function(data) {
                        console.log(data);
                        var markup = data.parse.text["*"];
                        var blurb = $('<div></div>').html(markup);
                        $('#output').html($(blurb).find('p'));

                        // finding a tags from data
                        atag = $("#output").find("a");

                        // for each a tag, grab the attribute href save it to a variable href. 
                        // Then, select each href and replace it with the url and concatenate the href value found from above.
                        atag.each(function() {
                            var href = $(this).attr('href');
                            $(this).attr('href', "https://en.wikipedia.org" + href);
                            $(this).attr("target", "_blank");
                        });


                        // console.log(changed);
                        // console.log('wiki',s wikiData)
                    },
                    error: function(errorMessage) {}


                });
            });
