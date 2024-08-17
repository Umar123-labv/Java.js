var MainImage = document.getElementById("MainImage");
var smallImages = document.getElementsByClassName("smallimage");

// Corrected arrays with accurate paths
var originalImages = [
    "img/1product/dunk-low-shoes-15mQNw.png", // Black shoe
    "img/1product/W+NIKE+DUNK+LOW (4).png",
    "img/1product/W+NIKE+DUNK+LOW (1).png",
    "img/1product/W+NIKE+DUNK+LOW (3).png",
    "img/1product1color/nike-dunk-low-unlocked-by-you.png", // White shoe
    "img/1product/color2/nike-dunk-low-unlocked-by-you (6).png" // Red shoe
];

var newImages = [
    "img/1product1color/nike-dunk-low-unlocked-by-you.png", // White shoe
    "img/1product1color/nike-dunk-low-unlocked-by-you (3).png",
    "img/1product1color/nike-dunk-low-unlocked-by-you (4).png",
    "img/1product1color/nike-dunk-low-unlocked-by-you (5).png",
    "img/1product/dunk-low-shoes-15mQNw.png", // Black shoe
    "img/1product/color2/nike-dunk-low-unlocked-by-you (6).png" // Red shoe
];

var newImages2 = [
    "img/1product/color2/nike-dunk-low-unlocked-by-you (6).png", // Red shoe
    "img/1product/color2/nike-dunk-low-unlocked-by-you (7).png",
    "img/1product/color2/nike-dunk-low-unlocked-by-you (8).png",
    "img/1product/color2/nike-dunk-low-unlocked-by-you (9).png",
    "img/1product/dunk-low-shoes-15mQNw.png", // Black shoe
    "img/1product1color/nike-dunk-low-unlocked-by-you.png" // White shoe
];


// Track which set of images is currently displayed
var currentImageSet = originalImages; // Initialize to originalImages

// Function to change the main image
function changeMainImage(index) {
    if (index >= 0 && index < currentImageSet.length) {
        MainImage.src = currentImageSet[index];
        console.log('Changing main image to:', currentImageSet[index]);
    }
}

// Function to update the small images
function updateSmallImages() {
    for (let i = 0; i < smallImages.length; i++) {
        if (i < currentImageSet.length) {
            smallImages[i].src = currentImageSet[i];
        } else {
            smallImages[i].src = ""; // Clear image if no corresponding image exists in the current set
        }
    }
    console.log('Small images updated to:', Array.from(smallImages).map(img => img.src));
}

// Function to toggle between image sets
function toggleImages() {
    console.log('Current image set before toggle:', currentImageSet);
    if (currentImageSet === originalImages) {
        currentImageSet = newImages; // Switch to the white image set
    } else if (currentImageSet === newImages) {
        currentImageSet = newImages2; // Switch to the red image set
    } else {
        currentImageSet = originalImages; // Reset to the original image set (black)
    }
    console.log('New image set after toggle:', currentImageSet);

    updateSmallImages();
    changeMainImage(0); // Set the main image to the first image in the new set
}

// Event listener for small images
for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].onclick = function() {
        // Check if the clicked image is inside the toggling sections
        if (this.closest('.small-img-col').id === "color" || this.closest('.small-img-col').id === "color2") {
            toggleImages();
        } else {
            // Find the index of the clicked image in the current image set
            var index = Array.prototype.indexOf.call(smallImages, this);
            console.log('Clicked small image:', this.src);
            changeMainImage(index);
        }
    }
}

// Initial update
updateSmallImages();

