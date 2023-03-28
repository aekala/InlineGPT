const promptExamples = [
    "\"$ai(Recommend me a movie)\"",
    "\"$ai(What was the first feature-length animated movie ever released?)\"",
    "\"$ai(What\'s the name of the skyscraper in Die Hard?)\"",
    "\"$ai(Who played Norm in Cheers?)\""
];

const copyToClipboard = async (element) => {
    const promptText = document.getElementById("prompt-input");
    navigator.clipboard.writeText(promptText.value);
    element.classList.replace("hidden", "visible");
    await wait(4000);
    element.classList.replace("visible", "hidden");
}

const promptExample = document.getElementById("prompt-text");
promptExample.innerHTML = promptExamples[Math.floor(Math.random() * promptExamples.length)];

const copyConfirmationMessage = document.getElementById("copy-confirm-message");
copyConfirmationMessage.classList.add("hidden");

const copyButton = document.getElementById("prompt-copy-btn");
copyButton.addEventListener("click", copyToClipboard.bind(null, copyConfirmationMessage));
