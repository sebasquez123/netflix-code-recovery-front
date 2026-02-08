export const emailRegExp = /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,4}$/i;

export const outlookRegex = /^[a-zA-Z0-9._%+-]+@outlook\.com$/;

export const requiredRules = {
  required: 'Field is required',
};

export const emailRules = {
  required: requiredRules.required,
  pattern: {
    value: emailRegExp,
    message: 'Invalid email address',
  },
};
