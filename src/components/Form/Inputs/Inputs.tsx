import './Inputs.scss';

type Props = {
  errors: Record<string, string>;
  name: string;
  setName: (value: React.SetStateAction<string>) => void;
  email: string;
  setEmail: (value: React.SetStateAction<string>) => void;
  phone: string;
  setPhone: (value: React.SetStateAction<string>) => void;
  setErrors: (value: React.SetStateAction<Record<string, string>>) => void;
};

export const Inputs: React.FC<Props> = ({
  errors,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  setErrors,
}) => {
  return (
    <div className="form-section__inputs">
      <div className="form-section__input-block">
        <input
          id="name-input"
          className={`form-section__input ${errors.name ? 'error' : ''}`}
          type="text"
          placeholder=" "
          value={name}
          onChange={e => {
            setName(e.target.value);
            setErrors(prev => ({ ...prev, name: '' }));
          }}
        />
        <label className="form-section__label" htmlFor="name-input">
          Your name
        </label>
        {name.length > 0 && !errors.name && (
          <p className="form-section__helper">Enter name</p>
        )}
        {errors.name && <p className="form-section__error">{errors.name}</p>}
      </div>

      <div className="form-section__input-block">
        <input
          id="email-input"
          className={`form-section__input ${errors.email ? 'error' : ''}`}
          type="email"
          placeholder=" "
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setErrors(prev => ({ ...prev, email: '' }));
          }}
        />
        <label className="form-section__label" htmlFor="email-input">
          Email
        </label>
        {email.length > 0 && !errors.email && (
          <p className="form-section__helper">XXXX@XXXX.XXX</p>
        )}
        {errors.email && <p className="form-section__error">{errors.email}</p>}
      </div>

      <div className="form-section__input-block">
        <input
          id="phone-input"
          className={`form-section__input ${errors.phone ? 'error' : ''}`}
          type="tel"
          placeholder=" "
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
            setErrors(prev => ({ ...prev, phone: '' }));
          }}
        />
        <label className="form-section__label" htmlFor="phone-input">
          Phone
        </label>
        {phone.length > 0 && !errors.phone && (
          <p className="form-section__helper">+380XXXXXXXXX</p>
        )}
        {errors.phone && <p className="form-section__error">{errors.phone}</p>}
      </div>
    </div>
  );
};
