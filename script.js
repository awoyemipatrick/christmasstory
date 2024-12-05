document.addEventListener('DOMContentLoaded', () => {
    
    /**  ----Hamburger ----  */
    const navWrapper = document.querySelector(".nav_wrapper");
    const openIcon = document.querySelector(".hamburger .open");
    let closeIcon;

    openIcon.addEventListener("click", () => {
        navWrapper.style.display = "block";
        openIcon.style.display = "none";
        openIcon.insertAdjacentHTML("afterend", `
            <li class="close">
                <img src="./assets/close-icon.svg" alt="Close Icon">
            </li>
        `);

        closeIcon = document.querySelector(".hamburger .close");
        closeIcon.addEventListener("click", () => {
            navWrapper.style.display = "none";
            closeIcon.remove();
            openIcon.style.display = "block";
        });
    });
});