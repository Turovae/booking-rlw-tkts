import ComfortButton from './Buttons/ComfortButton';
import './ComfortServices.scss';

function ComfortServices() {
  return (
    <div className="comfort-services">
      <div className="comfort-services__header">Обслуживание ФПК</div>
      <div className="comfort-services__body">
        <ComfortButton selected={true}>
          A
        </ComfortButton>
        <ComfortButton selected={true}>
          W
        </ComfortButton>
        <ComfortButton selected={true}>
          B
        </ComfortButton>
        <ComfortButton selected={true}>
          D
        </ComfortButton>
      </div>
    </div>
  )
}

export default ComfortServices;