function Homework({ onBack }) {
  const homework = [
    {
      subject: 'Mathematics',
      task: 'Complete exercise 5.1',
      deadline: '25 August 2026',
    },
    {
      subject: 'English',
      task: 'Write an essay about "My School"',
      deadline: '26 August 2026',
    },
    {
      subject: 'Science',
      task: 'Read chapter 4 and answer questions',
      deadline: '28 August 2026',
    },
  ]

  return (
    <div className="min-vh-100 bg-light">

      {/* Header */}
      <div className="bg-success text-white">
        <div className="container py-3">

          <button
            className="btn btn-light btn-sm mb-3"
            onClick={onBack}
          >
            <i className="bi bi-arrow-left me-1"></i>
            Back
          </button>

          <h4 className="fw-bold mb-1">
            Homework
          </h4>

          <small className="opacity-75">
            Your current assignments
          </small>

        </div>
      </div>

      {/* Content */}
      <div className="container py-4">

        {homework.map((item, index) => (
          <div
            className="card border-0 shadow-sm mb-3"
            key={index}
            style={{ borderRadius: '18px' }}
          >
            <div className="card-body p-4">

              <div className="d-flex justify-content-between align-items-start">

                <div>
                  <span className="badge bg-success-subtle text-success mb-2">
                    {item.subject}
                  </span>

                  <h6 className="fw-bold">
                    {item.task}
                  </h6>
                </div>

                <i className="bi bi-journal-check text-success fs-4"></i>

              </div>

              <div className="mt-3">
                <small className="text-muted">
                  <i className="bi bi-calendar3 me-1"></i>
                  Deadline: {item.deadline}
                </small>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Homework