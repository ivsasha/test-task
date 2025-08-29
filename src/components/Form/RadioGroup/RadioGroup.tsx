import { Position } from '../../../types/Positions';
import './RadioGroup.scss';

type Props = {
  errors: Record<string, string>;
  positions: Position[];
  selectedPosition: number | null;
  setSelectedPosition: (value: React.SetStateAction<number | null>) => void;
  setErrors: (value: React.SetStateAction<Record<string, string>>) => void;
};

export const RadioGroup: React.FC<Props> = ({
  errors,
  positions,
  selectedPosition,
  setSelectedPosition,
  setErrors,
}) => {
  return (
    <>
      <p className="form-section__text">Select your position</p>
      <div
        className={`form-section__radio-group ${errors.position ? 'error' : ''}`}
      >
        {positions.map(position => (
          <label key={position.id} className="form-section__label-radio">
            <input
              type="radio"
              name="position"
              checked={selectedPosition === position.id}
              onChange={() => {
                setSelectedPosition(position.id);
                setErrors(prev => ({ ...prev, position: '' }));
              }}
            />
            {position.name}
          </label>
        ))}
        {errors.position && (
          <p className="form-section__error">{errors.position}</p>
        )}
      </div>
    </>
  );
};
