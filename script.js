const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const progressBar1 = document.getElementById("progress-bar-1");
const progressBar2 = document.getElementById("progress-bar-2");
const progressBar3 = document.getElementById("white-circle");
const progressBar4 = document.getElementById("progress-bar-2-b");

const run = (box, progressBar) => {
    let active = false;
    // start
    box.addEventListener("mousedown", e => {
        active = true;
    });
    // stop
    document.addEventListener("mouseup", e => {
        active = false;
    });
    // run
    box.addEventListener("mousemove", e => {
        // mouse position
        let mX = e.clientX;
        let mY = e.clientY;
        // element data
        let boxData = box.getBoundingClientRect();
        let boxWidth = boxData.width;
        let boxHeight = boxData.height;
        let l = boxData.left;
        let t = boxData.top;

        // rotation
        let rotate = 30;
        let radians = 180 / Math.PI;
        let center = {
            x: l + (boxWidth / 2),
            y: t + (boxHeight / 2)
        };
        // arc points
        let x = mX - center.x;
        let y = mY - center.y;
        let angle = Math.floor(Math.atan2(y, x) * radians);
        let startAngle = 180;

        // active status
        if (active) {
            // let rotation = startAngle + angle;

            // // Ensure the rotation stays in the range of 0-360 degrees
            // rotation = (rotation + 360) % 360;

            // // Apply the rotation
            // box.style.transform = `rotate(${rotation}deg)`;

            // // Update the progress bar or other elements based on the rotation
            // let progress = rotation + 5;

            // if (box == box1 && progressBar == progressBar1) {
            //     progressBar.style.boxShadow = `inset 0 -${progress}px lightcoral`;
            // }
            // if (box == box2 && progressBar == progressBar2 || progressBar == progressBar4) {
            //     progressBar.style.boxShadow = `inset 0 -${progress}px cyan`;
            //     // title animation
            //     document.getElementById("title").style.backgroundImage = `linear-gradient(90deg, cyan ${progress-100}%, lightsalmon)`;
            // }
            // if (box == box3 && progressBar == progressBar3) {
            //     progress = rotation + 150;
            //     progressBar.style.transform = `rotate(${progress}deg)`;
            // }

            // Store the previous angle for continuous rotation
            // prevAngle = rotation;
            // if (angle < 0 && angle > -360) {
            //     rotate = angle + startAngle;
            //     box.style.transform = `rotate(${rotate}deg)`;
            //     progress = rotate + 5;
            //     if (box == box1 && progressBar == progressBar1) {
            //         progressBar.style.boxShadow = `inset 0 -${progress}px lightcoral`;
            //     }
            //     if (box == box2 && progressBar == progressBar2 ||
            //         progressBar == progressBar4) {
            //         progressBar.style.boxShadow = `inset 0 -${progress}px cyan`;
            //         // title animation
            //         document.getElementById("title").style.backgroundImage = `linear-gradient(90deg, cyan ${progress-100}%, lightsalmon)`
            //     }

            //     if (box == box3 && progressBar == progressBar3) {
            //         progress = rotate + 150;
            //         progressBar.style.transform = `rotate(${progress}deg)`;
            //     }
            // }

            // Add the start angle (to normalize the rotation)
            let rotate = angle + startAngle;

            // Normalize the rotation to be within the 0-360 range
            rotate = (rotate + 360) % 360;

            // Divide the rotation into 16 steps (22.5 degrees each)
            let step = 75;
            let roundedRotation = Math.round(rotate / step) * step;

            // Apply the rotation
            box.style.transform = `rotate(${roundedRotation}deg)`;

            // Update the progress bar or other elements based on the rotation
            let progress = roundedRotation + 5;

            // Example logic for different boxes
            if (box == box1 && progressBar == progressBar1) {
                progressBar.style.boxShadow = `inset 0 -${progress}px lightcoral`;
            }
            if (box == box2 && progressBar == progressBar2 || progressBar == progressBar4) {
                progressBar.style.boxShadow = `inset 0 -${progress}px cyan`;
                // title animation
                document.getElementById("title").style.backgroundImage = `linear-gradient(90deg, cyan ${progress-100}%, lightsalmon)`;
            }
            if (box == box3 && progressBar == progressBar3) {
                progress = roundedRotation + 150;
                progressBar.style.transform = `rotate(${progress}deg)`;
            }


        }

    });
}

run(box1, progressBar1);
run(box2, progressBar2);
run(box2, progressBar4);
run(box3, progressBar3);
