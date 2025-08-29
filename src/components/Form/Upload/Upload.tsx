import './Upload.scss';

type Props = {
  errors: Record<string, string>;
  setPhoto: (value: React.SetStateAction<File | null>) => void;
  setErrors: (value: React.SetStateAction<Record<string, string>>) => void;
  photo: File | null;
};

export const Upload: React.FC<Props> = ({
  errors,
  setPhoto,
  setErrors,
  photo,
}) => {
  return (
    <div className="form-section__upload-wrapper-block">
      <div
        className={`form-section__upload-wrapper ${errors.photo ? 'error' : ''}`}
      >
        <input
          type="file"
          id="file-upload"
          name="photo"
          className="form-section__file-input"
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setPhoto(e.target.files[0]);
              setErrors(prev => ({ ...prev, photo: '' }));
            }
          }}
        />

        <label htmlFor="file-upload" className="form-section__file-label">
          <span
            className={`form-section__upload-btn ${errors.photo ? 'error' : ''}`}
          >
            Upload
          </span>
          <span className="form-section__upload-text">
            {photo ? photo.name : 'Upload your photo'}
          </span>
        </label>
      </div>
      {errors.photo && <p className="form-section__error">{errors.photo}</p>}
    </div>
  );
};
