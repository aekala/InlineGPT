const promptExamples = [
    "\"$ai(Recommend me a movie)\"",
    "\"$ai(What was the first animated movie?)\"",
    "\"$ai(What\'s the name of the skyscraper in Die Hard?)\"",
    "\"$ai(Who played Norm in Cheers?)\""
];

const copyToClipboard = async (element) => {
    const promptText = document.getElementById("prompt-input");
    navigator.clipboard.writeText(promptText.value);
    element.style.visibility = "visible";
    element.classList.remove("hidden");
    element.classList.add("visible");
    await wait(4000);
    element.classList.remove("visible");
    element.classList.add("hidden");
}

const promptExample = document.getElementById("prompt-text");
promptExample.innerHTML = "Example: " + promptExamples[Math.floor(Math.random() * promptExamples.length)];

const copyConfirmationMessage = document.getElementById("copy-confirm-message");
copyConfirmationMessage.style.visibility = "hidden";

const copyButton = document.getElementById("prompt-copy-btn");
copyButton.addEventListener("click", copyToClipboard.bind(null, copyConfirmationMessage));
