
import CourseCard from './CourseCard';
import './CourseSection.css';

function CourseSection({ category, onSelect }) {
  return (
    <section
      id={category.id}
      className="course-section"
    >
      <h2>{category.title}</h2>

      <div className="course-grid">
        {category.courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseSection;
