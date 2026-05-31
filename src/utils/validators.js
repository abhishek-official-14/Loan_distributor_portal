export const aadhaarRegex = /^\d{12}$/;
export const mobileRegex = /^[6-9]\d{9}$/;
export const isValidAadhaar = (aadhaar) => aadhaarRegex.test(aadhaar.replace(/\s/g, ''));
export const formatAadhaar = (value = '') => value.replace(/\D/g, '').slice(0, 12).replace(/(.{4})/g, '$1 ').trim();
