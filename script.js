// const run = (box) => {
//     let active = false;
//     let rotation = 30;
//     let primaryAngle = 104;
//     let radians = 180 / Math.PI;
//     let lastRotation = 0;

//     // Use `requestAnimationFrame` for smoother updates
//     const updateRotation = (mX, mY) => {
//         let boxSize = box.getBoundingClientRect();
//         let width = boxSize.width;
//         let height = boxSize.height;
//         let L = boxSize.left;
//         let T = boxSize.top;

//         let center = {
//             x: L + (width / 2),
//             y: T + (height / 2),
//         };

//         let x = mX - center.x;
//         let y = mY - center.y;
//         let angle = Math.floor(Math.atan2(y, x) * radians);
        
//         let rotate = angle + primaryAngle;
//         rotate = (rotate + 360) % 360;

//         let step = 16;
//         let finalRotation = Math.round(rotate / step) * step;

//         // Check if the rotation has changed significantly before updating the transform
//         if (Math.abs(finalRotation - lastRotation) >= step) {
//             box.style.transform = `rotate(${finalRotation}deg)`;
//             lastRotation = finalRotation;
//         }
//     };

//     box.addEventListener("mousedown", e => {
//         active = true;
//         // Prevent multiple calculations in a short span
//         const moveListener = (e) => {
//             if (active) {
//                 updateRotation(e.clientX, e.clientY);
//                 requestAnimationFrame(() => moveListener(e)); // Request next frame
//             }
//         };

//         // Start the animation loop on mousemove
//         requestAnimationFrame(() => moveListener(e));
//     });

//     box.addEventListener("mouseup", () => {
//         active = false;
//     });

//     box.addEventListener("mouseleave", () => {
//         active = false; // Stop rotation when the mouse leaves the box
//     });
// };

// run(document.querySelector('.box'));


// const box = document.querySelector('.box');
// const up = document.querySelector('.up');
// let currentRotation = 104;

// const run = (box) => {
//     let active = false;

//     box.addEventListener("mousedown", function() {
//         active = true;
//     })

//     box.addEventListener("mouseup", function() {
//         active = false;
//     })

//     box.addEventListener("mouseleave", function() {
//         active = false;
//     })

//     box.addEventListener('mousemove', function() {
//         if (active){
//             currentRotation += 16.364;
//             box.style.transform = `rotate(${currentRotation}deg)`;
//         }
//     });
// }

// run(box);

// const box = document.querySelector('.box');
// let currentRotation = 104;

// const run = (box) => {
//     let active = false;
//     let lastX = 0; // To store the initial touch/mouse position

//     // Function to handle the movement logic for both mouse and touch events
//     const handleMove = (e) => {
//         // Determine if it's a mouse or touch event
//         let clientX = e.clientX || e.touches[0].clientX;

//         if (active) {
//             // Calculate the change in position (how far the pointer has moved)
//             let deltaX = clientX - lastX;

//             // Use the difference to increase rotation (increase multiplier for higher sensitivity)
//             let rotationIncrement = deltaX * 16.364; // Adjust sensitivity here

//             currentRotation += rotationIncrement;
//             box.style.transform = `rotate(${currentRotation}deg)`;

//             // Update lastX for the next movement
//             lastX = clientX;
//         }
//     };

//     // Mouse events
//     box.addEventListener("mousedown", function(e) {
//         active = true;
//         lastX = e.clientX;
//     });

//     box.addEventListener("mouseup", function() {
//         active = false;
//     });

//     box.addEventListener("mouseleave", function() {
//         active = false;
//     });

//     box.addEventListener('mousemove', handleMove);

//     // Touch events
//     box.addEventListener("touchstart", function(e) {
//         active = true;
//         lastX = e.touches[0].clientX;
//     });

//     box.addEventListener("touchend", function() {
//         active = false;
//     });

//     box.addEventListener("touchcancel", function() {
//         active = false;
//     });

//     box.addEventListener('touchmove', handleMove);
// };

// run(box);


const box = document.querySelector('.box');
// const knobHandle = document.querySelector('.knob_handle');
const handleUp = document.querySelector('.up');
const handleDown = document.querySelector('.down');
const dropdowns = document.querySelector('.dropdown');
const contents = dropdowns.querySelectorAll('.contents h4');
const select = dropdowns.querySelector('.selected');
const caret = dropdowns.querySelector('.caret');
const btnCalculate = document.querySelector('.calculate');
let currentRotation = 104;

document.addEventListener("DOMContentLoaded", function() {
    alert("You can use the arrow to move the knob or drag the cursor. :)")

    const run = (box) => {
        let active = false;
        let lastX = 0; // To store the initial mouse position
    
        box.addEventListener("mousedown", function(e) {
            active = true;
            lastX = e.clientX;
        });
    
        box.addEventListener("mouseup", function() {
            active = false;
            
        });
    
        // box.addEventListener("mouseleave", function() {
        //     active = false;
        // });
        
        // desktop version
        box.addEventListener('mousemove', function(e) {
            if (active) {
                // Calculate the change in mouse position (how far the mouse has moved)
                let deltaX = e.clientX - lastX;
                
                // Use the difference to increase rotation. Increase the multiplier for higher sensitivity.
                let rotationIncrement = deltaX * 16.364; // Adjust 0.5 to control sensitivity
                
                currentRotation += rotationIncrement;
                currentRotation = (currentRotation + 360) % 360;
                box.style.transform = `rotate(${currentRotation}deg)`;
                
                // Update lastX for the next movement
                lastX = e.clientX;
                // console.log(Math.floor(currentRotation));

                // btnCalculate.addEventListener('click', () => {
                //     let numVal = FuncIdentifier(Math.floor(currentRotation));
                //     console.log(numVal)
                //     needleDeflection(numVal?.[0], numVal?.[1], numVal?.[2]);
                // });
            }
        });
    
        box.addEventListener("touchstart", function(e) {
            active = true;
            lastX = e.touches[0].clientX;
        });
    
        box.addEventListener("touchend", function() {
            active = false;
        });
    
        box.addEventListener("touchcancel", function() {
            active = false;
        });
        
        // mobile version
        box.addEventListener('touchmove', function(e) {
            if (active) {
                // Calculate the change in mouse position (how far the mouse has moved)
                let deltaX = e.touches[0].clientX - lastX;
                
                // Use the difference to increase rotation. Increase the multiplier for higher sensitivity.
                let rotationIncrement = deltaX * 16.364; // Adjust 0.5 to control sensitivity
                
                currentRotation += rotationIncrement;
                currentRotation = (currentRotation + 360) % 360;
                box.style.transform = `rotate(${currentRotation}deg)`;
                lastX = e.clientX;
                // console.log(Math.floor(currentRotation));

                // btnCalculate.addEventListener('click', () => {
                //     let numVal = FuncIdentifier(Math.floor(currentRotation));
                //     console.log(numVal)
                //     needleDeflection(numVal?.[0], numVal?.[1], numVal?.[2]);
                // });
            };
        });
        
        // manually using the arrows
        handleUp.addEventListener('click', function() {
            currentRotation += 16.364;
            currentRotation = (currentRotation + 360) % 360;
            box.style.transform = `rotate(${currentRotation}deg)`;
            // btnCalculate.addEventListener('click', () => {
            //     let numVal = FuncIdentifier(Math.floor(currentRotation));
            //     console.log(numVal);
            // });
        });
        
        // manually using the arrows
        handleDown.addEventListener('click', function() {
            currentRotation -= 16.364;
            currentRotation = (currentRotation + 360) % 360;
            box.style.transform = `rotate(${currentRotation}deg)`;
            // console.log(Math.floor(currentRotation));
            // btnCalculate.addEventListener('click', () => {
            //     let numVal = FuncIdentifier(Math.floor(currentRotation));
            //     console.log(numVal)
            //     needleDeflection(numVal?.[0], numVal?.[1], numVal?.[2]);
            // });
        });
    

        btnCalculate.addEventListener('click', () => {
            FuncIdentifier(Math.floor(currentRotation));
            // console.log(numVal);
        });
    };
    
    run(box);
    
    dropdowns.addEventListener('mouseenter', () => {
        select.classList.toggle('selection-clicked');
        caret.classList.toggle('caret-rotate');
        document.querySelector('.dropdown .contents').style.display = 'block';
    });

    dropdowns.addEventListener('mouseleave', () => {
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        document.querySelector('.dropdown .contents').style.display = 'none';
    });

    contents.forEach(item => {
        item.addEventListener('click', () => {
            // console.log(item.innerText);
            if (item.innerText === "Ω (ohms)") {
                alert('Coming soon......');
            }
            else if (item.innerText === "μF") {
                alert('Coming soon......');
            }
            else {
                select.innerText = item.innerText;
                select.classList.remove('selection-clicked');
                caret.classList.remove('caret-rotate');
                document.querySelector('.dropdown .contents').style.display = 'none';
            }
        });
    });

    function FuncIdentifier(angle) {
        // minAngle = 49deg
        // DC/ R = 131deg maxAngle
        // AC = 131.5deg
        
        let valueLabel = select.innerText;
        let value = parseFloat(document.querySelector('.textbox').value);
        let angles = {
            5 : ["Vdc Null", 5],
            22 : ["Vac", 750],
            38 : ["Vac", 250],
            54 : ["Vac", 50],
            71 : ["Vac", 10],
            87 : "Capacitance",
            104 : "OFF",
            120 : ["R", 1000],
            136 : ["R", 100], 
            153 : ["R", 10], 
            169 : ["R", 1], 
            185 : ["mA", 250], 
            202 : ["mA", 25], 
            218 : ["mA", 2.5], 
            234 : ["mA", 0.05],
            251 : ["Vdc", 0.25], 
            267 : ["Vdc", 2.5], 
            284 : ["Vdc", 10], 
            300 : ["Vdc", 50], 
            316 : ["Vdc", 250],
            333 : ["Vdc", 1000], 
            349 : ["Vdc Null", 25]
        }
    
        let selectedAngle = angles[angle];
        if (selectedAngle?.[0] === "Vdc" && valueLabel === "Vdc") {
            needleDeflection(selectedAngle?.[1], value, valueLabel);
            // return [selectedAngle?.[1], value, valueLabel];

            // console.log(selectedAngle?.[1]);
            // console.log("EYYYYY");
            // btnCalculate.addEventListener('click', () => {
            //     // needleDeflection(selectedAngle?.[1], value);
            //     console.log(selectedAngle?.[1]);
            // })
        }
        else if (selectedAngle?.[0] === "Vac" && valueLabel === "Vac") {
            needleDeflection(selectedAngle?.[1], value, valueLabel);
            // console.log(selectedAngle?.[1]);
            // console.log(value);
            // console.log("BIIIIII");
            // btnCalculate.addEventListener('click', () => {
            //     needleDeflection(selectedAngle?.[1], value);
            // })
        }
        else if (selectedAngle?.[0] === "mA" && valueLabel === "mA") {
            needleDeflection(selectedAngle?.[1], value, valueLabel);
            // console.log(value);
            // console.log("SIIIIII");
            // btnCalculate.addEventListener('click', () => {
            //     needleDeflection(selectedAngle?.[1], value);
            // })
        }
        else if (selectedAngle === 'R' || selectedAngle === 'Vdc Null') { 
            pass;   
            // alert("Coming Soon.... :p");
        }
        else {
            alert("Undefined values detected. Please check the input data.");
        }
        // if (selectedAngle) {
        //     console.log(selectedAngle);
        // }
    };

    function needleDeflection(range, antiValue, valueLabel) {
        if (range === undefined || isNaN(antiValue) || valueLabel === undefined){
            alert("Undefined values detected. Please check the input data.");
        }
        const fsd = [10, 50, 250];
        const value10  = document.querySelector('.v10');
        const value50  = document.querySelector('.v50');
        const value250  = document.querySelector('.v250');

        let needleDef10 = (antiValue * fsd?.[0]) / range;
        let needleDef50 =  (antiValue * fsd?.[1]) / range;
        let needleDef250 =  (antiValue * fsd?.[2]) / range;

        value10.innerText = Math.floor(needleDef10);
        value50.innerText = Math.floor(needleDef50);
        value250.innerText = Math.floor(needleDef250);

        // minAngle = 49deg
        // DC/ R = 131deg maxAngle
        // AC = 131.5deg
        let needleHandler = document.querySelector('.needle_handler');
        let RotationAngle;
        const minValue = 0;
        const maxValue = 250;
        const minAngle = 44;
        const maxAngle = 136;

        RotationAngle = (minAngle) + ((needleDef250 - minValue) / (maxValue - minValue)) * (maxAngle - minAngle);
        if (RotationAngle === minAngle) {
            RotationAngle = minAngle - 1;
            needleHandler.style.transform = ` translate(-50%, -50%) rotate(${Math.floor(RotationAngle)}deg)`;
        }
        // else if (RotationAngle > maxAngle) {
        //     alert("The value entered has exceeded the tester's range .")
        // }
        // else {
        //     needleHandler.style.transform = ` translate(-50%, -50%) rotate(${Math.floor(RotationAngle)}deg)`;
        // }
        needleHandler.style.transform = ` translate(-50%, -50%) rotate(${Math.floor(RotationAngle)}deg)`;
        console.log(Math.floor(RotationAngle));

        // if (valueLabel === "Vdc") {
        //     RotationAngle = (needleDef250 % 250) * 82;
        //     console.log(RotationAngle + 49);
        // }
    };

    console.log(window.matchMedia(''));


    // dropdowns.forEach(dropdown => {
    //     const select = dropdown.querySelector('.selection');
    //     const caret = dropdown.querySelector('.caret');
    //     const label_choices = dropdown.querySelector('.label_choices');
    //     const options = dropdown.querySelectorAll('.label_choices li');
    //     const selected = dropdown.querySelector('.selected');

    //     select.addEventListener('click', () => {
    //         select.classList.toggle('selection-clicked');
    //         caret.classList.toggle('caret-rotate');
    //         label_choices.classList.toggle('label_choices-open');
    //     });

    //     options.forEach(option => {
    //         option.addEventListener('click', () => {
    //             const optionText = option.querySelector('h4');
    //             selected.innerText = optionText.innerText;
    //             select.classList.remove('selection-clicked');
    //             caret.classList.remove('caret-rotate');
    //             label_choices.classList.remove('label_choices-open');
    //             options.forEach(option => {
    //                 option.classList.remove('active');
    //             });
    //             option.classList.add('active');
    //         });
    //     });
    // });
});


// BEST ----------> 
// const run = (box) => {
//     let active = false;

//     box.addEventListener("mousedown", e => {
//         active = true;
//     });

//     box.addEventListener("mouseup", e => {
//         active = false;
//     });

//     box.addEventListener("mouseleave", () => {
//         active = false; 
//     });

//     box.addEventListener("mousemove", e => {
//         let mX = e.clientX;
//         let mY = e.clientY;

//         let boxSize = box.getBoundingClientRect();
//         let width = boxSize.width;
//         let height = boxSize.height;
//         let L = boxSize.left;
//         let T = boxSize.top;

//         let rotation = 30;
//         let radians = 180 / Math.PI;
//         let center = {
//             x : L + (width / 2), 
//             y : T + (height / 2)
//         };

//         let x = mX - center.x;
//         let y = mY - center.y;
//         let angle = Math.floor(Math.atan2(y,x) * radians);
//         let primaryAngle = 104;

//         if (active) {
//             let rotate = angle + primaryAngle;

//             rotate = (rotate + 360) % 360;

//             let step = 16;
//             let finalRotation = Math.round(rotate / step) * step;

//             box.style.transform = `rotate(${finalRotation}deg)`; 
//         }   
//     })
// }

// run(document.querySelector('.box'));


// function util_selector(param) {
//     return document.querySelector(param);
// }

// const run = (box) => {
//     let active = false;

//     box.addEventListener("mousedown", e => {
//         active = true;
//     });

//     box.addEventListener("mouseup" , e => {
//         active = false;
//     });

//     box.addEventListener("mousemove", e => {
//         let mX = e.clientX;
//         let mY = e.clientY;

//         let boxSize = box.getBoundingClientRect();
//         let width = boxSize.width;
//         let height = boxSize.height;
//         let L = boxSize.left;
//         let T = boxSize.top;

//         let rotation = 30;
//         let radians = 180 / Math.PI;
//         let center = {
//             x : L + (width / 2), 
//             y : T + (height / 2)
//         };

//         let x = mX - center.x;
//         let y = mY - center.y;
//         let angle = Math.floor(Math.atan2(y,x) * radians);
//         let primaryAngle = 104;

//         if (active) {
//             let rotate = angle + primaryAngle;

//             rotate = (rotate + 360) % 360;

//             let step = 16;
//             let finalRotation = Math.round(rotate / step) * step;

//             box.style.transform = `rotate(${finalRotation}deg)`;
//         }
//     })
// } 

// run(util_selector('.box'));

// const run = (box) => {
//     let active = false;
//     let startX = 0;
//     let startY = 0;

//     // Store the initial rotation when mouse down begins
//     let initialRotation = 0;

//     box.addEventListener("mousedown", (e) => {
//         active = true;
//         // Get the initial position where the mouse was clicked
//         startX = e.clientX;
//         startY = e.clientY;

//         // Get current rotation of the box (to apply the rotation offset)
//         const boxStyle = window.getComputedStyle(box);
//         const transform = boxStyle.transform;
//         if (transform !== 'none') {
//             const matrix = new DOMMatrix(transform);
//             initialRotation = matrix.rotation;  // Get the rotation angle
//         } else {
//             initialRotation = 104;
//         }
//     });

//     box.addEventListener("mouseup", () => {
//         active = false;
//     });

//     box.addEventListener("mousemove", (e) => {
//         if (active) {
//             // Calculate mouse movement relative to the initial position
//             const deltaX = e.clientX - startX;
//             const deltaY = e.clientY - startY;

//             let boxSize = box.getBoundingClientRect();
//             let width = boxSize.width;
//             let height = boxSize.height;
//             let L = boxSize.left;
//             let T = boxSize.top;

//             let center = {
//                 x: L + width / 2,
//                 y: T + height / 2,
//             };

//             // Calculate angle of mouse movement relative to the center of the box
//             let x = deltaX;
//             let y = deltaY;
//             let angle = Math.atan2(y, x);

//             // Convert angle to degrees and adjust it by the initial rotation
//             let rotate = (angle * (180 / Math.PI)) + initialRotation;

//             // Normalize rotation to be within 0-360 degrees
//             rotate = (rotate + 360) % 360;

//             // Optional: Snap to a multiple of 16 degrees (like a step size)
//             let step = 16;
//             let finalRotation = Math.round(rotate / step) * step;

//             // Apply the calculated rotation to the box
//             box.style.transform = `rotate(${finalRotation}deg)`;
//         }
//     });
// };

// run(document.querySelector('.box'));
