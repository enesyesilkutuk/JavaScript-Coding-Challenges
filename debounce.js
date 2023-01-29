const button = document.querySelector("button");

const debounce = () => {
    let timeoutID;
    return () => {
        console.log(timeoutID);
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            console.log("button was clicked");
        }, 2000);
    }
};

button.addEventListener("click", debounce());
