import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) =>{
  return (
    <div className="jumbotron">
      <div className="primul"><b>Title</b>
          <a href={course.watchHref} target="_blank">Watch</a>
      </div>
      <div className="primul"><b>Author:</b>
        <Link to={'/course/' + course.id}>{course.title}</Link>
      </div>
      <div className="primul"><b>Category:</b>
        {course.authorId}
      </div>
      <div className="primul"><b>Length:</b>
        {course.category}
      </div>
      <td>{course.length}</td>
    </div>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
