const followBtn = document.getElementById("followBtn");
const followersCount = document.getElementById("followers");

let isFollowing = false;
let followers = 120;

followBtn.addEventListener("click", () => {
    if (!isFollowing) {
        followers++;
        followBtn.textContent = "Unfollow";
        followBtn.style.background = "#e74c3c";
    } else {
        followers--;
        followBtn.textContent = "Follow";
        followBtn.style.background = "#667eea";
    }

    followersCount.textContent = followers;
    isFollowing = !isFollowing;
});
