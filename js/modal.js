const modalReloading = document.querySelector("modal.reloadingTag");

function showModalReloading() {
    modalReloading.style.display = "block";
    modalReloading.style.opacity = "100%";
}

function hideModalReloading() {
    modalReloading.style.display = "none";
    modalReloading.style.opacity = "0%";
}