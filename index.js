onKeyDown = (e) => {
    const form = document.getElementById("form");

    console.log(e);
    console.log(document.getElementById("input").value);
    if (e.key === "Enter") {
        let searchOption = input.value.slice(0, 3)
        if (searchOption === "!q ") {
            location.href = "http://www.google.fi/search?q=" +  encodeURIComponent(input.value.slice(3));
        } else if (searchOption === "!w ") {
            location.href = "https://en.wikipedia.org/wiki/" +  encodeURIComponent(input.value.slice(3));
        } else if (searchOption === "!i ") {
            location.href = "http://www.imdb.com/find?ref_=nv_sr_fn&q=" +  encodeURIComponent(input.value.slice(3)) + "&s=all";
        } else {
            if (input.value.includes('.')) {
                location.href = "http://www." + input.value
            } else {
                location.href = "http://www." + input.value + ".com";
            }
        }
    }
}

const input = document.getElementById("input");
input.addEventListener("keypress", onKeyDown);