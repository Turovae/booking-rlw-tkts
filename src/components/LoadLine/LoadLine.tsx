import './LoadLine.scss';

function LoadLine ({progress}: {progress: number}) {
  return (
    <div className="load-line">
      <div className="load-line__progress" style={{
        width: progress + '%'
      }}></div>
    </div>
  )
}

export default LoadLine