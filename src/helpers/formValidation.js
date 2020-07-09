export default function validate(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (values.password ) {
        if (values.password.length < 1) {
            errors.password = 'Password is required';
        }
    }

    if (values.username ) {
        if (values.username.length < 1) {
            errors.username = 'Username is required';
        } else if (values.username.length < 4) {
            errors.username = 'Username should be atleast 4 letter';
        }
    }

    if (values.confirm_password) {
        if ( values.password !== values.confirm_password ) {
            errors.password = 'Confirm password mismatch';
        }
    }

    return errors;
  };