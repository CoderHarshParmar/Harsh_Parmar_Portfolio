function opentab(tabName) {
    // Remove 'active-link' class from all tab links
    const tabLinks = document.getElementsByClassName("tab-links");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    // Remove 'active-tab' class from all tab contents
    const tabContents = document.getElementsByClassName("tab-contents");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    // Add 'active-link' class to the clicked tab
    document.querySelector(`[onclick="opentab('${tabName}')"]`).classList.add("active-link");

    // Add 'active-tab' class to the respective tab content
    document.getElementById(tabName).classList.add("active-tab");
}


