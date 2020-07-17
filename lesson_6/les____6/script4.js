'use strict';

// =============    SLIDER  =============

function getSell(s){ return document.querySelector(s)} 
let leng = getSell('form').length;
console.log(leng);

function bgStyle() {
    getSell('#wrapper').style.backgroundSize = 'cover';
    getSell('#wrapper').style.backgroundPosition = 'center';
    getSell('#wrapper').style.backgroundRepeat = 'no-repeat';
};
//radio-battons
getSell('form').addEventListener('change', function () {
    for (let i = 0; i < leng; i++) {
        if (getSell('form')[i].checked) {
            getSell('#wrapper').style.background = getSell('form')[i].value;
            bgStyle();
        }
    }
})

// left arrow
getSell('.fa-chevron-circle-left').onclick = function () {
    for (let i = 0; i < leng; i++) {
        if (getSell('form')[i].checked) {
            if (getSell('form')[0].checked != true) {
                getSell('form')[--i].checked = true;
                getSell('#wrapper').style.background = getSell('form')[i].value;
                bgStyle();

            } else {
                getSell('form')[leng - 1].checked = true
                getSell('#wrapper').style.background = getSell('form')[leng - 1].value;
                bgStyle();
                break;
            }
        }
    }
}
// right arrow
getSell('.fa-chevron-circle-right').onclick = function () {
    for (let i = 0; i < leng; i++) {
        if (getSell('form')[i].checked) {
            if (leng - 1 != i) {
                getSell('form')[++i].checked = true;
                getSell('#wrapper').style.background = getSell('form')[i].value;
                bgStyle();
            } else {
                getSell('form')[0].checked = true
                getSell('#wrapper').style.background = getSell('form')[0].value;
                bgStyle();
            }
        }
    }
}

// //botton play
// getSell('#play').onclick = function () {
//     getSell('#play').style.display = 'none';
//     getSell('#pause').style.display = 'block';

//     let startInterval = setInterval(() => {
//         for (let i = 0; i < leng; i++) {
//             if (getSell('form')[i].checked) {
//                 if (leng - 1 != i) {
//                     getSell('form')[++i].checked = true;
//                     getSell('#wrapper').style.background = getSell('form')[i].value;

//                 } else {
//                     getSell('form')[0].checked = true
//                     getSell('#wrapper').style.background = getSell('form')[0].value;
//                 }
//             }
//         }
//     }, 1500);
//     //button pause
//     getSell('#pause').onclick = function () {
//         getSell('#pause').style.display = 'none';
//         getSell('#play').style.display = 'block';
//         clearInterval(startInterval);
//     }
// }

// =============    /SLIDER  =============


// Open Modal
function openModal(event) {
    event.preventDefault();

    let div = '<div><div class="modal" id="modal" onclick="closeModal(event)"><div class="modal__wrapp"><form action="#" name="signIn" onsubmit="submitSignIn(event)"><p class="text-uper modal__title">sign in</p><div><input type="text" placeholder="username" id="username" required></div><div><input type="password" placeholder="password" id="password" required autocomplete="current-password"></div> \n\
            <div class="modal__footer"> \n\
                <span> \n\
                    <input type="checkbox" name="" id="signIn"> \n\
                    <label for="signIn">Keep me sign in</label> n\
                </span> \n\
                <button type="submit" class="text-uper">sign in</button> \n\
            </div> \n\
        </form> \n\
    </div> \n\
</div></div>';
    console.log('asdadsasd');
    document.getElementById('docModal').innerHTML = div;
}

document.getElementById('login').addEventListener('click', openModal)

// Submit form
function submitSignIn(event) {
    event.preventDefault();
    
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    console.log(password, username);
    document.getElementById('docModal').innerHTML = '';
    
}

// Close Modal
function closeModal(event) {
    let modalBg = document.getElementById('modal');

    if (event.target === modalBg) {
        document.getElementById('docModal').innerHTML = '';
    }
}


// ===============================================================================
// // matchMedia
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//     console.log("yellow");
//   } else {
//     document.body.style.backgroundColor = "pink";
//     console.log("pink");

//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
// ===============================================================================


// Scroll top
// ===============================================================================
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#btn-top").on('click', function(event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $('#header').offset().top
      }, 800);
  });
});
