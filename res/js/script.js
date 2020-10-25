$(function () {
    $(".avatar").click(function () {
        var X = $(this).attr('id');
        if (X == 1) {
            $(".dropdown-content").hide();
            $(this).attr('id', '0');
        } else {
            $(".dropdown-content").show();
            $(this).attr('id', '1');
        }
    })
    loadUserInfo()
        .then(function (response) {
            user = new User(
                response.firstname,
                response.lastname,
                response.email,
            );
            displayUserInfo(user)
            $(".avatar").attr("src",response.avatar);
        })
        .catch(function () {
            alert('Error loading user info')
        });
    $('.followButton').click(function (){
        console.log("APPI")
    });

    $('.like-button').click(function(){
        $('.like-button').removeClass('like-button');
        $(this).addClass('like-button-liked')

    })
    loadPostsInfo()
        .then(function (response){
        for (post of response) {

        }
    })

})

function displayUserInfo(user) {
    $('#name').text(user.firstname + " " + user.lastname);
    $('#mail').text(user.email);
}

function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-90de795816-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}
function createPost(){
    for (x in posts){

    }
}
function loadPostsInfo() {
    return $.get(
        {
            url: 'https://private-anon-beb5f99180-wad20postit.apiary-mock.com/posts',
            success : function (response) {
                return response;
            },
            error: function (){
                alert('error')
            }
        }
    )
}
/**/