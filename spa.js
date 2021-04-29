"use strict";

function hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.getElementsByClassName.display = "none";
    }
}

function showPage(pageId) { 
    hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    setActiveTab(pageId);
}

function setActiveTab(pageId) {
    let pages = document.querySelectorAll(".tabbar div a");
    for (let page of pages) {
        if (`#${pageId}` === page.getAttribute("href")) {
             page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    }
}

function navigateTo("href") { 
    location.href = `#${pageId}`;
}

function pageChange() {
    let page = "home";
    if (location.pageId) { 
        page = location.pageId.slice(1);
    }
    showPage(page);
}
pageChange();
