
import './CourseCard.css';

function CourseCard({ course, onSelect }) {
  const thumbnail = course.videoId
    ? `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`
    : null;

  return (
    <button
      type="button"
      className="course-card"
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
  );
}

export default CourseCard;
