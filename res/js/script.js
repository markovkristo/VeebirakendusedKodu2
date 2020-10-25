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
        $.get('https://private-anon-90de795816-wad20postit.apiary-mock.com/users/1', function(response){
            for (post of response) {
                let author =  $('.post-author-info').text(post.author['firstname'] + post.author['lastname']);
                let time  = $('.time').text(post.createTime);
                let avatar = $('.post-author-info').attr('src', post.author['avatar']);
                let text = $('.post-title').text(post.text);
                let media = $('.post-image').attr('src', post.media['url']);
                let likes = $('.post-actions').button(post.likes);
                $('.post').append(time);
                $('.post').append(text);
                $('.post').append(author);
                //$('.post').append(time);
            }
        })
    })

    $('.like-button').click(function(){
        $('.like-button').removeClass('like-button');
        $(this).addClass('like-button-liked')

    })

})

function displayUserInfo(user) {
    $('#name').text(user.firstname + " " + user.lastname);
    $('#mail').text(user.email);
}
/*function displayNewPost(post) {
    $('.post-author').append(post.author);
    $('.post-author-info').append(post.author);
    $('.time').append(post.createTime);
    $('.post-image').append(post.media);
    $('.post-actions').append(post.likes);
}*/
/*loadPostsInfo()
    .then(function (response){
        post = new Post(
            response.id,
            response.author,
            response.createTime,
            response.text,
            response.media,
            response.like
        );
        $('.main-container').append(displayPosts(post))
    })
    .catch(function () {
        alert('Error loading post info')
    });*/
/*function displayPosts(posts){
    for (let i = 0; i < posts.length; i++) {
        if (i + 1 === posts[i]) {
            post = new Post(
                posts[i].id,
                posts[i].author,
                posts[i].createTime,
                posts[i].text,
                posts[i].media,
                posts[i].like
            )

            $('.post-author').set(posts[i].author);
            $('.time').set(posts[i].createTime);
            $('.post-image').set(posts[i].media);
            $('.post-actions').set(posts[i].likes);
            $('.post-title').set(posts[i].title);
            $('.main-container').append(post);
        }
    }
}*/

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
            url: 'https://private-anon-90de795816-wad20postit.apiary-mock.com/posts',
            success : function (response) {
                return response;
            },
            error: function (){
                alert('error')
            }
        }
    )
}

/*loadPostsInfo()
    .then(function (post){
        console.log(post);
        posts = post
        displayPosts(posts);
    })
    .catch(function () {
        alert('Error loading user info')
    });*/
/**/
