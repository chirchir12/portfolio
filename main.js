
window.addEventListener("DOMContentLoaded", function() { 
    const contactForm = document.querySelector('.contactForm')
    const button = document.querySelector('.send-message-btn')
    const status = document.querySelector('.my-form-status')
    status.style.display="none"


    // Success and Error functions for after the form is submitted
    function success() {
        contactForm.reset()
        button.style.display="none";
        status.style.display="block"
        status.textContent="Thank you for your considerations. let\'s talk in a minute. "

    }

    // handling errors 
    function error() {
        status.textContent="Ooops! sorry, something is not right,  call me 0705814794"

    }

    /// clear status from the dom

    function clearDOM() {
        status.classList.remove('.my-form-status')
        status.style.display="none"
        sta
        console.log('i should have cleared it')

    }

    


    // handle the form submission event
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault()
        var data = new FormData(contactForm);
        console.log(data)
        ajax(contactForm.method, contactForm.action, data, success, error)

        // clear dom after 1
        setTimeout(clearDOM, 500)


    })

    


});


// sending data to a form using ajax
function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }