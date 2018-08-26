import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({course}) => {
  return (
    <div className="table">
      <div className="jumbotron">
        <div className="primul">
           <th>&nbsp;</th>
        </div>
        <div className="primul">
        <th>Title</th>
        </div>
        <div className="primul">
        <th>Author</th>
        </div>
        <div className="primul">
        <th>Category</th>
        </div>
        <div className="primul">
        <th>Length</th>
        </div>

      </div>
      {course.map(course =>

        <CourseListRow key={course.id} course={course}/>
      )}

    </div>
  );
} ;

CourseList.propTypes = {
  course: PropTypes.array.isRequired
};

export default CourseList;
