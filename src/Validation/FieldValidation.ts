
class FieldValidation {

    /**
     * @param {string} name
     * @return {string|null} return string of error message or null if valid
     */
    public static firstName(name: string): string|null {
        const errorMessage = 'First name is required, must be at least 2 characters and only letters';

        if (name === null || name.match(/^[a-zA-Z ]{2,}$/) === null) {
            return errorMessage;
        }

        return null;
    }

    /**
     * @param {string} name
     * @return {string|null} return string of error message or null if valid
     */
    public static lastName(name: string): string|null {
        const errorMessage = 'Last name is required, must be at least 2 characters and only letters';

        if (name === null || name.match(/^[a-zA-Z ]{2,}$/) === null) {
            return errorMessage;
        }

        return null;
    }

    /**
     * @param {string} email
     * @return {string|null} return string of error message or null if valid
     */
    public static email(email: string): string|null {
        const errorMessage = 'Email is required and must be valid';

        if (
            email === null ||
            email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null // tslint:disable-line
        ) {
            return errorMessage;
        }

        return null;
    }

    /**
     * @param {string} phone
     * @return {string|null} return string of error message or null if valid
     */
    public static phone(phone: string): string|null {
        const errorMessage = 'Invalid phone number';

        if (phone === null || phone.match(/^\+?\d[\d -]{4,}\d$/) === null) {
            return errorMessage;
        }

        return null;
    }
}

export default FieldValidation;
