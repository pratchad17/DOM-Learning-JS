console.log("pratchad");

const blogs = document.getElementsByTagName("p");
// console.log(blogs);
for (const blog of blogs) {
    blog.style.backgroundColor = "steelblue";
    blog.style.color = "white";
}

const vero = document.getElementById("special-blog");
vero.innerHTML = `
<h4>Special inner HTML</h4>
<div>
<ul>
<li>ami pari</li>
<li>Hello World!!!</li>

</ul>

</div>


`;

const friends = document.getElementById("friends");
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

//create element

const friend = document.createElement("li");
friend.innerText = "Friend-11";
friends.appendChild(friend);
