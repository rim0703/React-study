async function fetchUserData() {
  const username = document.getElementById("username").value;
  try {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    const userData = await userResponse.json();
    if (userResponse.ok) {
      document.getElementById("user-data").style.display = "block";
      document.getElementById("avatar").src = userData.avatar_url;
      document.getElementById("user-name").textContent =
        userData.name || userData.login;
      document.getElementById(
        "followers"
      ).textContent = `${userData.followers}`;
      document.getElementById(
        "following"
      ).textContent = `${userData.following}`;
      document.getElementById(
        "public-repos"
      ).textContent = `${userData.public_repos}`;
      document.getElementById(
        "public-gists"
      ).textContent = `${userData.public_gists}`;
      document.getElementById("created-at").textContent = `${new Date(
        userData.created_at
      ).toLocaleDateString()}`;

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();
      reposData.sort((a, b) => {
        if (a.updated_at > b.updated_at) return -1;
        if (a.updated_at < b.updated_at) return 1;
        return 0;
      });
      document.getElementById("repos").style.display = "block";
      const repoList = document.getElementById("repo-list");
      repoList.innerHTML = "";
      reposData.forEach((repo) => {
        const li = document.createElement("li");
        li.classList.add("repo-item");
        li.innerHTML = `<span><a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: inherit;">${repo.name}</a></span>
                      <div class="repo-stats">
                          <div class="stat"><strong>⭐</strong> ${repo.stargazers_count}</div>
                          <div class="stat"><strong>👁️</strong> ${repo.watchers_count}</div>
                          <div class="stat"><strong>🍴</strong> ${repo.forks_count}</div>
                      </div>`;
        repoList.appendChild(li);
      });
    } else {
      alert("User not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    alert("Failed to fetch user data");
  }
}
