var theme = window.localStorage.currentTheme;
    $('html').addClass(theme);

function darkModeToggle() { 

    if ($("html").hasClass("dark")) {
        $('html').toggleClass('dark');
        localStorage.removeItem('currentTheme');
        localStorage.currentTheme = "light";
    } else {
        $('html').toggleClass('dark');
        localStorage.removeItem('currentTheme');
        localStorage.currentTheme = "dark";
    }
        };