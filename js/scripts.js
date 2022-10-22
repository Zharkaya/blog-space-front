function DarkModeToggle(){      
    var toggle = document.getElementById("toggleMode");

    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)


    toggle.onclick = function() {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    };

}

DarkModeToggle();

var elem = document.querySelector('.posts');
var msnry = new Masonry( elem, {        
    itemSelector: '.post-col',     
    columnWidth: '.post-col',
    percentPosition: true,                      
});