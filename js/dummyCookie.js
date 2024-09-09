const duration = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString();
document.cookie = "prism=prism_cookie_value; path=/; expires=" + duration;
// document.cookie = "prism=prism_cookie_value; domain=.datacurry.com; expires=" + duration;
