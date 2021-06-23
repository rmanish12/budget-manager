const ValidationError = require("../errors/ValidationError");

const validator = {
    isValidEmail: function(email) {
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            throw new ValidationError("Invalid email");
        }
    },
    isValidPassword: function(password) {
        if (password && password.trim().length > 6) {
            return true;
        } else {
            throw new ValidationError("Invalid password. It must be 6 characters long");
        }
    },
    isValidFirstName: function(firstName) {
        const firstNameRegex = /^[A-Z]+$/i;
        if (firstName && firstNameRegex.test(firstName)) {
            return true;
        } else {
            throw new ValidationError("Invalid First Name. It should be a non-empty set of characters");
        }
    },
    isValidLastName: function(lastName) {
        const lastNameRegex = /^[a-zA-Z]{0,20}$/;
        if (lastNameRegex.test(lastName)) {
            return true;
        } else {
            throw new ValidationError("Invalid Last Name");
        }
    },
    isValidGender: function(gender) {
        const genders = ["Male", "Female", "Not Disclosed"];
        if (genders.includes(gender) || gender === undefined) {
            return true;
        } else {
            throw new ValidationError("Invalid Gender");
        }
    },
    isValidDate: function(date) {
        if (date.isValid()) {
            return true;
        } else {
            throw new ValidationError("Invalid Date");
        }
    }
};

module.exports = validator;