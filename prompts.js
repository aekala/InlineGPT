const promptExamples = [
    "$ai(Recommend me a movie)",
    "$ai(What was the first animated movie?)",
    "$ai(What\'s the name of the skyscraper in Die Hard?)",
    "$ai(Who played Norm in Cheers?)"
];

const copyToClipboard = async (element) => {
    const input = document.getElementById("prompt-input");
    navigator.clipboard.writeText(input.value);
    showCopyMessage(element);
    await wait(3000);
    hideCopyMessage(element);
}

const showCopyMessage = (element) => {
    element.style.visibility = "visible";
    element.classList.remove("hidden");
    element.classList.add("visible");
}

const hideCopyMessage = (element) => {
    element.classList.remove("visible");
    element.classList.add("hidden");
}

const showClearButton = () => {
    const button = document.getElementById("prompt-clear-btn");
    button.style.visibility = "visible";
}

const hideClearButton = () => {
    const button = document.getElementById("prompt-clear-btn");
    button.style.visibility = "hidden";
}

const clearInputField = (event) => {
    const clearButton = event.target;
    const input = document.getElementById("prompt-input");
    input.value = "";
    hideClearButton(clearButton);
    input.focus();
}

const promptExample = document.getElementById("prompt-text");
promptExample.innerHTML = "Example: " + promptExamples[Math.floor(Math.random() * promptExamples.length)];

const copyConfirmationMessage = document.getElementById("copy-confirm-message");
copyConfirmationMessage.style.visibility = "hidden";

const copyButton = document.getElementById("prompt-copy-btn");
copyButton.addEventListener("click", copyToClipboard.bind(null, copyConfirmationMessage));

const clearButton = document.getElementById("prompt-clear-btn");
clearButton.style.visibility = "hidden";
clearButton.addEventListener("click", clearInputField);

