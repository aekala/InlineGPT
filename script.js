async function handleInputEvent(event) {
    const activeElement = event.target;
    if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA") {
        const content = activeElement.value;
        if (content.startsWith("$ai(") && content.endsWith(')')) {
            const prompt = isolatePrompt(content);
            injectCSS(".prompt-selection::selection  { background: #fcba03 !important }");
            activeElement.classList.add("prompt-selection");
            activeElement.select();
            await wait(1000);
            activeElement.value = "Querying ChatGPT...";
            activeElement.classList.remove("prompt-selection");
            const completion = await callChatGPT(prompt);
            activeElement.value = completion;
            // activeElement.value = "ffffffff ffffffffffffff fffffffffffffffff ffffffffffff ffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffff ffffffffffffff fffffffffffffffffffff fffffffffffffffffff fffffffffffffffffffffff fffffffffffffffffffffffffff ffffffffffffffffffffFffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        } 
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
        "max_tokens": 192
    }
    
    await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "Application/JSON",
            "Authorization": //INSERT API TOKEN HERE
        },
        body: JSON.stringify(requestBody),
    })
    .then((response) => response.json())
    .then((data) => completion = data);
 
    return completion.choices[0].text;
}

const inputs = document.getElementsByTagName("INPUT");
for (let input of inputs) {
    input.addEventListener("input", handleInputEvent);
}

const textareas = document.getElementsByTagName("TEXTAREA");
for (let text of textareas) {
    text.addEventListener("input", handleInputEvent);
}
