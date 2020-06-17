export const textFieldIsValid = (field) => {
	if (typeof field === "string" && field !== "") {
		return true;
	}
	return false;
};

export const phoneIsValid = (phoneNumber) => {
	const re = new RegExp(
		/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
	);
	return re.test(phoneNumber);
};

export const emailIsValid = (email) => {
	const re = new RegExp(/.+@.+\..+/);
	return re.test(email);
};

export const dateIsValid = (date) => {
	const re = new RegExp(/[0-9]{1,2}[/-][0-9]{1,2}[/-][0-9]{4}|[0-9]{2}/);
	return re.test(date);
};

export const groupSizeIsValid = (size) => {
	return size > 0 && Number.isInteger(size);
};

// assumes both are dates
export const dateOrderIsValid = (arrivalDate, departureDate) => {
    return departureDate > arrivalDate
}

export const pg2IsValid = (firstName, phone, email) => {
	return (
		textFieldIsValid(firstName) &&
		phoneIsValid(phone) &&
		emailIsValid(email)
	);
};


export const pg3IsValid = (arrivalDate, departureDate, groupSize) => {
    return (
		dateIsValid(arrivalDate) &&
        dateIsValid(departureDate) &&
        dateOrderIsValid(arrivalDate, departureDate) &&
		groupSizeIsValid(groupSize)
	);
};
