window.addEventListener('DOMContentLoaded', function () {
    var projectDiv = document.getElementById('projectsDiv');
    var web = document.getElementById('web');
    var cpp = document.getElementById('cpp');
    var Hardware = document.getElementById('Hardware');
    var cv = document.getElementById('CV');
    var webarr = [
        {
            caption: "Portfolio",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
            link: "https://bard.google.com/",
        },
        {
            caption: "Portfolio",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
            link: "https://bard.google.com/",
        },
    ];
    var cpparr = [
        {
            caption: "Paint game",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
            link: "https://bard.google.com/",
        },
        {
            caption: "Paint game",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
            link: "https://bard.google.com/",
        },
    ];
    var hardarr = [
        {
            caption: "AES",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
            link: "https://bard.google.com/",
        },
        {
            caption: "AES",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1200px-Emblem-person-blue.svg.png",
            link: "https://bard.google.com/",
        },
    ];
    function displayProjects(arr) {
        var s = "";
        for (var i = 0; i < arr.length; i++) {
            s += "<div class=\"project\">  <img src=\"".concat(arr[i].img, "\"><p>").concat(arr[i].caption, "</p>\n");
            s += " <a href=\"".concat(arr[i].link, "\" target=\"_blank\"><img class=\"git\"src=\"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg\"></a></div>\n");
        }
        if (projectDiv) {
            projectDiv.innerHTML = s;
        }
    }
    displayProjects(webarr);
    web === null || web === void 0 ? void 0 : web.classList.add("selected");
    cpp === null || cpp === void 0 ? void 0 : cpp.classList.remove("selected");
    Hardware === null || Hardware === void 0 ? void 0 : Hardware.classList.remove("selected");
    web === null || web === void 0 ? void 0 : web.addEventListener("click", function () {
        displayProjects(webarr);
        web === null || web === void 0 ? void 0 : web.classList.add("selected");
        cpp === null || cpp === void 0 ? void 0 : cpp.classList.remove("selected");
        Hardware === null || Hardware === void 0 ? void 0 : Hardware.classList.remove("selected");
    });
    cpp === null || cpp === void 0 ? void 0 : cpp.addEventListener("click", function () {
        displayProjects(cpparr);
        cpp === null || cpp === void 0 ? void 0 : cpp.classList.add("selected");
        web === null || web === void 0 ? void 0 : web.classList.remove("selected");
        Hardware === null || Hardware === void 0 ? void 0 : Hardware.classList.remove("selected");
    });
    Hardware === null || Hardware === void 0 ? void 0 : Hardware.addEventListener("click", function () {
        displayProjects(hardarr);
        Hardware === null || Hardware === void 0 ? void 0 : Hardware.classList.add("selected");
        web === null || web === void 0 ? void 0 : web.classList.remove("selected");
        cpp === null || cpp === void 0 ? void 0 : cpp.classList.remove("selected");
    });
});
