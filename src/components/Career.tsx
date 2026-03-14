import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer Intern</h4>
                <h5>Lumenore | Netlink Software Group America Inc</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led implementation of two enterprise-level applications (Task
              Manager & Resource Management) using React.js, Django, SQLAlchemy,
              and MySQL — adopted by 100+ employees, reducing manual work by 20+
              hours weekly.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Prosparity | EV Financing Company</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered Python scripts to extract structured data from credit
              bureau JSON reports and built discrepancy checking tools, reducing
              manual validation by 60%. Developed Streamlit-based UI and
              optimized web scraping scripts, reducing latency by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>LTIMindtree | Larsen & Toubro Group</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Completed intensive .NET Full Stack training covering 15+ modules
              including C#, ADO.NET, MVC, SQL Server, Angular, and Web API.
              Consistently achieved top 10% ranking in assessments. Building live
              projects with layered architecture and secure JWT authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
