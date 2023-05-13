var spin_elements;      // Global variable to store all OpenSpinImage elements
var spin_l_timer;       // Global timer for the left arrow
var spin_r_timer;       // Global timer for the right arrow
var spin_interval = 50; // Global interval for the timer - how fast the image spins default is 50 milliseconds
var default_spin_interval = 50; // A default timer interval

// This function loads the image into the canvas
function LoadSpinImage(spin_element, image_path, image_set, image_name) {
    // Get the canvas element with the id "spin_canvas" + image_set
    var canvas = document.getElementById("spin_canvas" + image_set);
    var ctx = canvas.getContext("2d"); // get the context

    // Create a new image object
    var image = new Image(); 
    
    image.src = image_path + "/" + image_set + "/" + image_name; // Set the image source to the image name
    
    image.onload = function() {
        // Get the image size
        var img_width = image.width;
        var img_height = image.height;

        // Set the canvas size to the image size
        canvas.width = img_width;
        canvas.height = img_height;
        canvas.setAttribute("width", img_width);
        canvas.setAttribute("height", img_height);

        // Set the spin element size to the image size
        spin_element.style.width = img_width + "px";
        spin_element.style.height = img_height + "px";

        ctx.drawImage(image, 0, 0); // Draw the image to the canvas
    };
}


// This function is called when the left arrow is clicked and handles the spinning of the image left
function SpinLeft(element){
    //console.log("Spin Left");

    // Get the image-set value
    var image_set = element.getAttribute("image-set");

    // Loop through all elements and find the element with the matching image-set value
    var spin_element = document.querySelector('[image-set="' + image_set + '"]');

    // Get the set-path value - where the image sets are located
    var set_path = spin_element.getAttribute("set-path");

    // Get the first-image value - the name of the first image
    var first_image = spin_element.getAttribute("first-image");

    // Get the current-image value - the name of the current image
    var current_image = spin_element.getAttribute("current-image");

    // Get the last-image value - the name of the last image
    var last_image = spin_element.getAttribute("last-image");

    // Get the image-format value - the image format (jpg, png, bmp, etc)
    var image_format = spin_element.getAttribute("image-format");

    // If the current image is the first image, then set the current image to the last image
    if(current_image <= first_image){
        current_image = last_image;
    }
    else{
        // Subtract 1 from the current image
        current_image--;
    }

    // Set the current-image value to the new current image
    spin_element.setAttribute("current-image", current_image);

    // Load the new image
    LoadSpinImage(spin_element, set_path, image_set, current_image + "." + image_format);
}

// This function is called when the right arrow is clicked and handles the spinning of the image right
function SpinRight(element){
    //console.log("Spin Right");

    // Get the image-set value
    var image_set = element.getAttribute("image-set");

    // Loop through all elements and find the element with the matching image-set value
    var spin_element = document.querySelector('[image-set="' + image_set + '"]');

    // Get the set-path value - where the image sets are located
    var set_path = spin_element.getAttribute("set-path");

    // Get the first-image value - the name of the first image
    var first_image = spin_element.getAttribute("first-image");

    // Get the current-image value - the name of the current image
    var current_image = spin_element.getAttribute("current-image");

    // Get the last-image value - the name of the last image
    var last_image = spin_element.getAttribute("last-image");

    // Get the image-format value - the image format (jpg, png, bmp, etc)
    var image_format = spin_element.getAttribute("image-format");

    // If the current image is the last image, then set the current image to the first image
    if(current_image == last_image){
        current_image = first_image;
    }
    else{
        // Add 1 to the current image
        current_image++;
    }

    // Set the current-image value to the new current image
    spin_element.setAttribute("current-image", current_image);
    
    // Load the new image
    LoadSpinImage(spin_element, set_path, image_set, current_image + "." + image_format);
}

// This function initializes the OpenSpinImage elements when the page first loads
function InitOpenSpinImage(){
    // Get a list of all the OpenSpinImage elements
    spin_elements = document.getElementsByTagName("OpenSpinImage");

    // Loop through all elements with the custom attrabute "image-set"
    for (var i = 0; i < spin_elements.length; i++) {

        var set_path = spin_elements[i].getAttribute("set-path"); // Get the set-path value - where the image sets are located
        var image_set = spin_elements[i].getAttribute("image-set"); // Get the image-set value - the name of the image set (this is the folder name)
        var current_image = spin_elements[i].getAttribute("current-image"); // Get the current-image value - the name of the current image
        var image_format = spin_elements[i].getAttribute("image-format"); // Get the image-format value - the image format (jpg, png, bmp, etc)

        // Create a canvas and add it to the spin element
        var canvas = document.createElement("canvas");
        canvas.setAttribute("id", "spin_canvas" + image_set);
        canvas.setAttribute("image-set", image_set);
        spin_elements[i].appendChild(canvas);


        // Load the initial images to all the spin elements
        LoadSpinImage(spin_elements[i], set_path, image_set, current_image + "." + image_format);

        // Get the child canvas element on the spin element
        var canvas = spin_elements[i].getElementsByTagName("canvas")[0];

        // Get canvas size
        var canvas_width = canvas.width;
        var canvas_height = canvas.height;

        // Create the left arrow element
        var left_arrow = document.createElement("div");
        left_arrow.style.width = canvas_width / 4 + "px";
        left_arrow.style.height = canvas_height + "px";
        left_arrow.style.top = canvas_height + "px";
        left_arrow.style.lineHeight = canvas_height + "px";
        left_arrow.innerHTML = "<";
        left_arrow.title = "Spin Left";
        left_arrow.classList.add("OpenSpinImageArrow");
        left_arrow.classList.add("OpenSpinLeft");

        // Add the image_set attrabute to the element so we can get it later when we click on the element
        left_arrow.setAttribute("image-set", image_set);

        // Create the right arrow element
        var right_arrow = document.createElement("div");
        right_arrow.style.width = canvas_width / 4 + "px";
        right_arrow.style.height = canvas_height + "px";
        right_arrow.style.top = canvas_height + "px";
        right_arrow.style.lineHeight = canvas_height + "px";
        right_arrow.innerHTML = ">";
        right_arrow.title = "Spin Rigsht";
        right_arrow.classList.add("OpenSpinImageArrow");
        right_arrow.classList.add("OpenSpinRight");

        // Add the image_set attrabute to the element so we can get it later when we click on the element
        right_arrow.setAttribute("image-set", image_set);


        // Add an onmousedown event to the element for SpinLeft
        left_arrow.onmousedown = function() {

            spin_interval = this.parentNode.getAttribute("interval"); // Get the interval value from the spin element

            if(spin_interval == null){
                spin_interval = default_spin_interval;
            }
            
            spin_l_timer = setInterval(SpinLeft, spin_interval, this);
        };
        // Add an onmouseup event to the element for SpinLeft
        left_arrow.onmouseup = function() {
            clearInterval(spin_l_timer);
        };
        // Add an onmouseout event to the element for SpinLeft
        left_arrow.onmouseout = function() {
            clearInterval(spin_l_timer);
        };

        // Add an onmousedown event to the element for SpinRight
        right_arrow.onmousedown = function() {

            spin_interval = this.parentNode.getAttribute("interval"); // Get the interval value from the spin element
            
            if(spin_interval == null){
                spin_interval = default_spin_interval;
            }

            spin_r_timer = setInterval(SpinRight, spin_interval, this);
        };
        // Add an onmouseup event to the element for SpinRight
        right_arrow.onmouseup = function() {
            clearInterval(spin_r_timer);
        };
        // Add an onmouseout event to the element for SpinRight
        right_arrow.onmouseout = function() {
            clearInterval(spin_r_timer);
        };

        // Add the left and right arrows to the spin element
        spin_elements[i].appendChild(left_arrow);
        spin_elements[i].appendChild(right_arrow);

    }
}

InitOpenSpinImage(); // Init all the Spin Images