$(function () {
    $(".avatar").click(function () {
        var X = $(this).attr('id');
        if (X == 1) {
            $(".dropdown-content").hide();
            $(this).attr('id', '0');
        } else {
            $(".dropdown-content").show();
            $(this).attr('id', '1');
            loadUserInfo()
                .then(function (response) {
                    user = new User(
                        response.firstname,
                        response.lastname,
                        response.email
                    );
                    displayUserInfo(user)
                })
                .catch(function () {
                    alert('Error loading user info')
                });
        }


    })
    $('.followButton').click(function (){
        console.log("APPI")
    });

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

/**/
