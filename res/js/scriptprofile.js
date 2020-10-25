$(function () {
    loadProfilesInfo()
        .then(function (response) {
            for (i = 0; i < response.length; i++) {
                console.log(response[i])
                profile = new Profiles(
                    response[i].firstname,
                    response[i].lastname,
                    response[i].avatar
                )
                displayProfileInfo(profile)
            }


        })
        .catch(function () {
        alert('Error loading user info')
        });



});

function jumalhoiab(obj){

    if ($(obj).hasClass('followButton-following')){
        $(obj).removeClass('followButton-following');
        $(obj).addClass('followButton');
        $(obj).text('Follow');
    } else {
        $(obj).removeClass('followButton');
        $(obj).addClass('followButton-following');
        $(obj).text('Following');

    }
}


function displayProfileInfo(profile){
    var $conteiner = $("#asi")
    var nimi = profile.firstname + " " + profile.lastname
    var pilt = profile.avatar
    console.log(nimi)
    $conteiner.append('<div class="inside"><img class="profileimg" src='+pilt +' />'+ '<label class="profilelabel">'+ nimi+ '</label>'+'<button onclick="jumalhoiab(this)" type="button" id="tere" class="followButton">Follow</button>'+' </div>')

}



function loadProfilesInfo() {
    return $.get(
        {
            url: 'https://private-anon-7123497fb4-wad20postit.apiary-mock.com/profiles',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('error')
            }
        }
    );
}