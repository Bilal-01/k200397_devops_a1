import {
  schoolCourses,
  collegeCourses,
  uniCourses,
} from "../data/educationData";
import CourseCard from "../components/CourseCard";
import './pages.css';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="course-group">
        <h3>School Courses</h3>
        <div className="school-courses">
          {schoolCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.courseTitle}
              description={course.description}
              grade={course.grade}
            />
          ))}
        </div>
      </div>
      <div className="course-group">
        <h3>College Courses</h3>
        <div className="college-courses">
          {collegeCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.courseTitle}
              description={course.description}
              grade={course.grade}
            />
          ))}
        </div>
      </div>
      <div className="course-group">
        <h3>University Courses</h3>
        <div className="uni-courses">
          {uniCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.courseTitle}
              description={course.description}
              grade={course.grade}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
