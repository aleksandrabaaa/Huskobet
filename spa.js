"use strict";

function hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.style.display = "none";
    }
}

function showPage(pageId) { 
    hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    setActiveTab(pageId);
}

function setActiveTab(pageId) {
    let pages = document.querySelectorAll(".tabbar a");
    for (let page of pages) {
        if (`#${pageId}` === page.getAttribute("href")) {
             page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    }
}

function navigateTo(pageId) { 
    location.href = `#${pageId}`;
}

function pageChange() {
    let page = "home";
    if (location.hash) { 
        page = location.hash.slice(1);
    }
    showPage(page);
}
pageChange();
