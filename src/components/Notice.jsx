function Notice({ onBack }) {
  const notices = [
    {
      title: 'Annual Sports Day',
      date: '20 August 2026',
      description:
        'Annual sports day will be held on 30 August at the school playground.',
    },
    {
      title: 'Holiday Notice',
      date: '18 August 2026',
      description:
        'The school will remain closed on Friday due to a public holiday.',
    },
    {
      title: 'Parent Meeting',
      date: '15 August 2026',
      description:
        'Parent-teacher meeting will be held at 10:00 AM in the school auditorium.',
    },
  ]

  return (
    <div className="min-vh-100 bg-light">

      {/* Header */}
      <div className="bg-primary text-white">
        <div className="container py-3">

          <button
            className="btn btn-light btn-sm mb-3"
            onClick={onBack}
          >
            <i className="bi bi-arrow-left me-1"></i>
            Back
          </button>

          <h4 className="fw-bold mb-1">
            Notice
          </h4>

          <small className="opacity-75">
            Latest school announcements
          </small>

        </div>
      </div>

      {/* Content */}
      <div className="container py-4">

        {notices.map((notice, index) => (
          <div
            className="card border-0 shadow-sm mb-3"
            key={index}
            style={{ borderRadius: '18px' }}
          >
            <div className="card-body p-4">

              <div className="d-flex align-items-start">

                <div
                  className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                >
                  <i className="bi bi-megaphone-fill fs-5"></i>
                </div>

                <div className="ms-3">
                  <h6 className="fw-bold mb-1">
                    {notice.title}
                  </h6>

                  <small className="text-muted">
                    {notice.date}
                  </small>
                </div>

              </div>

              <p className="text-muted mt-3 mb-0">
                {notice.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Notice