# OpenSpinImage
Open Spin Image is a lightweight JavaScript "library" (it's really more a set of a few functions and a handful of CSS styles) that allows you to create a 360 degree spin image viewer from a set of images

**Live Preview:** [https://geekgirljoy.github.io/OpenSpinImage/](https://geekgirljoy.github.io/OpenSpinImage/)


### How To Use

You can use [index.html](https://github.com/geekgirljoy/OpenSpinImage/blob/main/index.html) as an example however here are the basic steps to follow if you want to start from scratch in your own project:

**Step 1:** Link to the [OpenSpinImage.css](https://github.com/geekgirljoy/OpenSpinImage/blob/main/css/OpenSpinImage.css) file in your page head:
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="./css/OpenSpinImage.css">
  </head>
```

**Step 2:** Add the to the [OpenSpinImage.js](https://github.com/geekgirljoy/OpenSpinImage/blob/main/js/OpenSpinImage.js) file to the end of your page just before the end of the closing body tag:
```html
  <script type="text/javascript" src="js/OpenSpinImage.js"></script>
  </body>
</html>
```

**Step 3:** Create a new OpenSpinImage html element somewhere inside the body tag and specify the set-path, image-set, first-image, current-image, last-image, image-format and interval attributes.
```html
  <OpenSpinImage set-path="Images/SpinImageSets" image-set="Test1" first-image="1" current-image="1" last-image="360" image-format="jpg" interval="1"></OpenSpinImage>
```
##### Attributes:
**set-path:** is the sub folder containing the collections of spin images.

**image-set:** is the name of the collection or sub folder name containing spin images.

**first-image:** is the "left most" image in the collection and MUST be an integer.

**current-image:** is the first image that will load and is updated as you spin the image, MUST be an integer.

**last-image:** is the "right most" image in the collection and MUST be an integer.

**image-format:** is the file extension (e.g. "jpg" or "png" or "bmp" etc.) of the images.

**interval:** is the time in milliseconds between changing the images while one of the spin arrows are pressed.


### How To Create Your Own Spin Image Sets
Spin images are just collections of images where the object being photographed or camera taking the images rotate by a set amount (preferably the same amount every frame in most use cases) between frames.

How you do this is up to you but I can attest a [Lazy Susan](https://en.wikipedia.org/wiki/Lazy_Susan) or other form of turn table and a little geometry can get you some pretty good results.

Basically, how you do it is really up to you but if you think about it, a "full" circle can be described by 360 degrees so if you just take 360 / the number of pictures you want then you get about how many degrees you need to rotate your object every image to accommodate your needs... then, do your best to photograph your object at the predetermined degrees/interval of rotation.

It's worth noting however that if you want "smooth" rotation like in the examples provided then your first and last images should be be the next rotation/frame away from each other.

Additionally, it's important to note that you need to follow a naming convention with your images and name them integers (e.g. 1.jpg, 2.jpg, 3.jpg etc...) with preceding and following numbers being the immediate next rotation, IE. to the left of image 1.jpg is the "last image" and to the right of 1.jpg is 2.jpg and so forth until the "last image", to the right of the "last image" is the "first image" 1.jpg.


### License
I built this because I wanted something that worked the way I wanted and you are welcome to use this software.

[MIT License](https://github.com/geekgirljoy/OpenSpinImage/blob/main/LICENSE).

Copyright (c) 2023 geekgirljoy
