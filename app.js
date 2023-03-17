const like = document.querySelector('#like');
const likeNr = document.querySelector('#likeNr');
let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container .box')];
    for (var i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 3;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');

    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

// Number of likes
const likes = document.querySelectorAll('.fa-heart');
likes.forEach(like => {
    let likeNr = like.nextElementSibling;
    let likeCount = parseInt(likeNr.textContent);
    like.addEventListener('click', () => {
        if (like.classList.contains('clicked')) {
            likeCount++;
            like.style.color = 'red'; // change the color of the heart icon to red when liked
        } else {
            likeCount--;
            like.style.color = '#cbcbcb'; // change the color of the heart icon to gray when unliked
        }
        like.classList.toggle('clicked');
        likeNr.textContent = likeCount;
    });
});