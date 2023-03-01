const DESIGNO = {
  init() {
    DESIGNO.addListeners();
  },

  addListeners() {
    const menuToggle = document.querySelector(".menuToggle");
    const primNav = document.querySelector(".primary-navigation");
    const form = document.querySelector("form");
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#email + span.error");

    menuToggle.addEventListener("click", () => {
      menuToggle.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu();
    });

    function openMenu() {
      menuToggle.setAttribute("aria-expanded", "true");
      primNav.setAttribute("data-state", "opened");
    }

    function closeMenu() {
      menuToggle.setAttribute("aria-expanded", "false");
      primNav.setAttribute("data-state", "closing");

      primNav.addEventListener(
        "animationend",
        () => {
          primNav.setAttribute("data-state", "closed");
        },
        { once: true }
      );
    }

    if (form) {
      document.addEventListener("focusin", (evt) => {
        const emailErrMes = document.querySelector(".errmessage");
        switch (evt.target.id) {
          case "name":
          case "phone":
          case "message":
          case "email":
            document.getElementById(evt.target.id).classList.add("formfocus");

            if (evt.target.id === "email" && emailErrMes && emailErrMes.matches("[data-error]")) {
              emailError.innerHTML = "";
            }
        }
      });

      document.addEventListener("focusout", (evt) => {
        switch (evt.target.id) {
          case "name":
          case "phone":
          case "message":
          case "email":
            document.getElementById(evt.target.id).classList.remove("formfocus");

            if (evt.target.id === "email") validateEmail(evt);
        }
      });

      form.addEventListener("submit", validateEmail);

      function validateEmail(ev) {
        let emReg = new RegExp(
          /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          "i"
        );
        if (!email.validity.valid || emReg.test(email.value) === false) {
          showError();
          // Prevent form from being sent
          ev.preventDefault();
          return 1;
        }
      }

      function setErrorMessage(mes) {
        return `<div class="errmessage" data-error><p>${mes}</p>
              <span class="errexclaim"></span>
              </div>`;
      }

      function showError() {
        if (email.validity.valueMissing) {
          // If the field is empty,
          // display the following error message.
          emailError.innerHTML = setErrorMessage("Can't be empty");
        } else if (email.validity.typeMismatch) {
          // If the field doesn't contain an email address,
          // display the following error message.
          emailError.innerHTML = setErrorMessage("Invalid email address.");
        }

        // Set the styling appropriately
        emailError.className = "error active";
      }
    }
  },
};

document.addEventListener("DOMContentLoaded", DESIGNO.init);
