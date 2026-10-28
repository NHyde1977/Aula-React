
import './CourseCard.css';

function CourseCard({
  course,
  onSelect,
  isFavorite,
  onToggleFavorite
}) {
  const thumbnail = course.videoId
    ? `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`
    : null;

  return (
    <div className="course-card">
      <button
        type="button"
        className="course-open"
        onClick={() => onSelect(course)}
        disabled={!course.videoId}
      >
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`Capa da aula ${course.title}`}
          />
        ) : (
          <div className="course-placeholder">
            NOVA
          </div>
        )}

        <div className="course-info">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </button>

      <button
        type="button"
        className={`favorite-button ${
          isFavorite ? 'is-favorite' : ''
        }`}
        onClick={() => onToggleFavorite(course.id)}
        aria-label={
          isFavorite
            ? `Remover ${course.title} dos favoritos`
            : `Adicionar ${course.title} aos favoritos`
        }
        aria-pressed={isFavorite}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
    </div>
  );
}

export default CourseCard;
