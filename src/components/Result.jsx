function Result({ onBack }) {
  const results = [
    {
      subject: 'Bangla',
      marks: 85,
      grade: 'A+',
    },
    {
      subject: 'English',
      marks: 78,
      grade: 'A',
    },
    {
      subject: 'Mathematics',
      marks: 92,
      grade: 'A+',
    },
    {
      subject: 'Science',
      marks: 88,
      grade: 'A+',
    },
    {
      subject: 'ICT',
      marks: 81,
      grade: 'A+',
    },
  ]

  return (
    <div className="min-vh-100 bg-light">

      {/* Header */}
      <div className="bg-warning">
        <div className="container py-3">

          <button
            className="btn btn-dark btn-sm mb-3"
            onClick={onBack}
          >
            <i className="bi bi-arrow-left me-1"></i>
            Back
          </button>

          <h4 className="fw-bold mb-1">
            Result
          </h4>

          <small>
            Mid Term Examination 2026
          </small>

        </div>
      </div>

      <div className="container py-4">

        {/* Summary */}
        <div
          className="card border-0 shadow-sm mb-4"
          style={{ borderRadius: '18px' }}
        >
          <div className="card-body p-4">

            <div className="row text-center">

              <div className="col-4">
                <h4 className="fw-bold mb-1">
                  84.8%
                </h4>
                <small className="text-muted">
                  Average
                </small>
              </div>

              <div className="col-4 border-start border-end">
                <h4 className="fw-bold mb-1">
                  A+
                </h4>
                <small className="text-muted">
                  Grade
                </small>
              </div>

              <div className="col-4">
                <h4 className="fw-bold mb-1">
                  5
                </h4>
                <small className="text-muted">
                  Subjects
                </small>
              </div>

            </div>

          </div>
        </div>

        {/* Subject Results */}
        <h6 className="fw-bold mb-3">
          Subject Results
        </h6>

        {results.map((item, index) => (
          <div
            className="card border-0 shadow-sm mb-2"
            key={index}
            style={{ borderRadius: '15px' }}
          >
            <div className="card-body py-3">

              <div className="d-flex align-items-center">

                <div className="flex-grow-1">
                  <strong>
                    {item.subject}
                  </strong>
                </div>

                <div className="text-end me-3">
                  <strong>
                    {item.marks}
                  </strong>
                  <small className="text-muted">
                    /100
                  </small>
                </div>

                <span className="badge bg-success">
                  {item.grade}
                </span>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Result