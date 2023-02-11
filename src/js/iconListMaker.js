const { equal } = require("joi");

const icons={
    name:[
        "sign-triangle",
        "radiobtn",
        "question",
        "multiply",
        "minus",
        "plus",
        "exclamation",
        "equals",
        "dot",
        "divide",
        "cross",
        "chbox",
        "arrow",
        "steps",
        "head",
        "gears",
        "flower",
        "home",
        "planning",
        "portfolio",
        "estimate",
        "clock",
        "second",
        "calendar",
        "done",
        "docs",
        "timetable",
        "speaking-skill",
        "vocab-skill",
        "writing-skill",
        "reading-skill",
        "listening-skill",
        "speech-bulb",
        "british-fl",
        "ukr-fl",
        "it",
        "physics",
        "processing",
        "output",
        "input",
        "find",
        "link",
        "avaAlice"
    ]
}

console.log(icons.name);

let markup="";
for (let i=0; i<icons.name.length; i++){
    let icon = icons.name[i];
    let itemEl = `<li class="item icon-wrap">
    <svg class="icon" width="48" height="48">
        <use href="./images/icon.svg#icon-${icon}"></use>
    </svg>
</li>`
markup += itemEl;
}

console.log(markup);

const listEl = document.querySelector('#iconsList');
listEl.innerHTML = markup;