export const validateForm = (
  name: string,
  email: string,
  phone: string,
  selectedPosition: number | null,
  photo: File | null,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (selectedPosition === null) {
    errors.position = 'Select position';
  }

  if (name.length < 2 || name.length > 60) {
    errors.name = 'Name must be 2-60 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errors.email = 'Invalid email format';
  }

  const cleanPhone = phone.replace(/[\s()-]/g, '');

  if (!cleanPhone.startsWith('+380') || cleanPhone.length !== 13) {
    errors.phone = 'Phone must be +380 and 13 digits';
  }

  if (!photo) {
    errors.photo = 'Upload photo';
  } else if (!['image/jpeg', 'image/jpg'].includes(photo.type)) {
    errors.photo = 'Photo must be jpeg/jpg';
  } else if (photo.size > 5 * 1024 * 1024) {
    errors.photo = 'Photo must be <= 5MB';
  }

  return errors;
};
