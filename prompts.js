const promptExamples = [
    "\"$ai(recommend me a movie)\"",
    "\"$ai(tell me a joke)\"",
    "\"$ai(give me a sandwich recipe)\"",
    "\"$ai(who played Norm in Cheers?)\""
];

const copyToClipboard = (element) => {
    const promptText = document.getElementById("prompt-input");
    promptText.select();
    navigator.clipboard.writeText(promptText.value);
    element.style.visibility = "visible";
}

const promptExample = document.getElementById("prompt-text");
promptExample.innerHTML = promptExamples[Math.floor(Math.random() * promptExamples.length)];

const copyConfirmationMessage = document.getElementById("copy-confirm-message");
copyConfirmationMessage.style.visibility = "hidden";

const copyButton = document.getElementById("prompt-copy-btn");
copyButton.addEventListener("click", copyToClipboard.bind(null, copyConfirmationMessage));
