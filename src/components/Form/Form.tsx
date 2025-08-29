import { createUser } from '../../api';
import { Position } from '../../types/Positions';
import './Form.scss';
import React, { useState } from 'react';
import { Inputs } from './Inputs';
import { Upload } from './Upload';
import { RadioGroup } from './RadioGroup';
import { Success } from './Success';
import { validateForm } from '../../utils/validation';

type Props = {
  positions: Position[];
  handleRegister: () => void;
  isRegister: boolean;
};

export const Form: React.FC<Props> = ({
  positions,
  handleRegister,
  isRegister,
}) => {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = validateForm(name, email, phone, selectedPosition, photo);

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('position_id', String(selectedPosition));

    if (photo) {
      formData.append('photo', photo);
    }

    try {
      await createUser(formData);
      setSelectedPosition(null);
      setName('');
      setEmail('');
      setPhone('');
      setPhoto(null);
      setErrors({});
      handleRegister();
    } catch (error) {
      newErrors.api = 'Registration failed. Try again.';
      setErrors(newErrors);
    }
  }

  return (
    <section className="form-section" id="form-section">
      {!isRegister && (
        <>
          <h1 className="form-section__title">Working with POST request</h1>
          <form onSubmit={handleSubmit} className="form-section__form">
            <Inputs
              errors={errors}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              setErrors={setErrors}
            />

            <RadioGroup
              errors={errors}
              positions={positions}
              selectedPosition={selectedPosition}
              setSelectedPosition={setSelectedPosition}
              setErrors={setErrors}
            />

            <Upload
              errors={errors}
              setPhoto={setPhoto}
              setErrors={setErrors}
              photo={photo}
            />

            <button
              type="submit"
              className="form-section__button"
              disabled={
                !(
                  phone.length > 0 &&
                  email.length > 0 &&
                  name.length > 0 &&
                  positions.length > 0 &&
                  photo
                )
              }
            >
              Sign up
            </button>

            {errors.api && (
              <p className="form-section__api-error">{errors.api}</p>
            )}
          </form>
        </>
      )}

      {isRegister && <Success />}
    </section>
  );
};
