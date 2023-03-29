const handleInputEvent = async (event) => {
    const activeElement = event.target;
    const content = activeElement.value;
    if (content.length > 0) {
        showClearButton();
    } else {
        hideClearButton();
    }
    if (content.startsWith("$ai(") && content.endsWith(')')) {
        const prompt = isolatePrompt(content);
        injectCSS(".prompt-selection::selection  { background: #fcba03 !important }");
        activeElement.classList.add("prompt-selection");
        activeElement.select();
        await wait(1500);
        activeElement.value = "Querying ChatGPT...";
        activeElement.classList.remove("prompt-selection");
        const completion = await callChatGPT(prompt);
        activeElement.value = completion;
    } 
}

const injectCSS = (css) => {
    let stylesheet = document.createElement('style');
    stylesheet.innerText = css;
    document.head.appendChild(stylesheet);
}

const isolatePrompt = (str) => {
    return str.substring(str.indexOf("(")+1, str.lastIndexOf(')'));
}

const wait = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function callChatGPT(prompt) {
    await wait(2000);
    const requestBody = {
        "model": "text-davinci-003",
        "prompt": prompt,
        "max_tokens": 2048
    }
    
    await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "Application/JSON",
            "Authorization": "Bearer REPLACE WITH API KEY"
        },
        body: JSON.stringify(requestBody),
    })
    .then((response) => response.json())
    .then((data) => completion = data);

    console.log(completion);

    return completion.choices[0].text.trim();
}

const input = document.getElementById("prompt-input");
input.addEventListener("input", handleInputEvent);
