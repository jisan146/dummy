function Dashboard({ onMenuClick, onLogout }) {
  const menuItems = [
    {
      title: 'Notice',
      subtitle: 'Latest announcements',
      icon: 'bi-megaphone-fill',
      color: 'primary',
    },
    {
      title: 'Homework',
      subtitle: 'View your homework',
      icon: 'bi-journal-text',
      color: 'success',
    },
    {
      title: 'Result',
      subtitle: 'Check examination results',
      icon: 'bi-bar-chart-fill',
      color: 'warning',
    },
  ]

  return (
    <div className="min-vh-100 bg-light">

      {/* =========================
          TOP HEADER
      ========================== */}
      <div className="bg-primary text-white">

        <div className="container py-4">

          <div className="d-flex justify-content-between align-items-center">

            <div>
              <small className="opacity-75">
                Welcome back 👋
              </small>

              <h4 className="mb-0 fw-bold">
                Student Dashboard
              </h4>
            </div>

            {/* Notification */}
            <button
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow-sm"
              style={{
                width: '45px',
                height: '45px',
              }}
            >
              <i className="bi bi-bell text-primary fs-5"></i>
            </button>

          </div>

        </div>

      </div>


      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="container">

        {/* =========================
            PROFILE CARD
        ========================== */}
        <div
          className="card border-0 shadow-sm"
          style={{
            marginTop: '-25px',
            borderRadius: '20px',
          }}
        >

          <div className="card-body p-4">

            {/* Profile Top */}
            <div className="d-flex align-items-center">

              {/* Profile Avatar */}
              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                style={{
                  width: '70px',
                  height: '70px',
                  fontSize: '28px',
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>


              {/* Profile Information */}
              <div className="ms-3">

                <h5 className="fw-bold mb-1">
                  Rahim Ahmed
                </h5>

                <p className="text-muted mb-2">
                  Student ID: 1025
                </p>

                <span className="badge bg-primary-subtle text-primary px-3 py-2">
                  Class 10
                </span>

              </div>

            </div>


            {/* Divider */}
            <hr className="my-4" />


            {/* Profile Stats */}
            <div className="row text-center">

              {/* Section */}
              <div className="col-4">

                <small className="text-muted d-block mb-1">
                  Section
                </small>

                <strong>
                  A
                </strong>

              </div>


              {/* Roll */}
              <div className="col-4 border-start border-end">

                <small className="text-muted d-block mb-1">
                  Roll
                </small>

                <strong>
                  12
                </strong>

              </div>


              {/* Session */}
              <div className="col-4">

                <small className="text-muted d-block mb-1">
                  Session
                </small>

                <strong>
                  2026
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            QUICK ACCESS
        ========================== */}
        <div className="py-4">

          {/* Section Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>
              <h5 className="fw-bold mb-1">
                Quick Access
              </h5>

              <small className="text-muted">
                Access your student services
              </small>
            </div>

            <span className="badge bg-white text-muted shadow-sm px-3 py-2">
              3 Services
            </span>

          </div>


          {/* Menu Cards */}
          <div className="row g-3">

            {menuItems.map((item) => (

              <div
                className="col-12"
                key={item.title}
              >

                <div
                  className="card border-0 shadow-sm"
                  onClick={() => onMenuClick(item.title)}
                  style={{
                    borderRadius: '18px',
                    cursor: 'pointer',
                    transition: '0.2s',
                  }}
                >

                  <div className="card-body p-3">

                    <div className="d-flex align-items-center">

                      {/* Icon */}
                      <div
                        className={`bg-${item.color}-subtle text-${item.color} rounded-3 d-flex align-items-center justify-content-center flex-shrink-0`}
                        style={{
                          width: '58px',
                          height: '58px',
                        }}
                      >
                        <i
                          className={`bi ${item.icon} fs-4`}
                        ></i>
                      </div>


                      {/* Text */}
                      <div className="ms-3 flex-grow-1">

                        <h6 className="fw-bold mb-1">
                          {item.title}
                        </h6>

                        <small className="text-muted">
                          {item.subtitle}
                        </small>

                      </div>


                      {/* Arrow */}
                      <div
                        className="text-muted"
                        style={{
                          fontSize: '18px',
                        }}
                      >
                        <i className="bi bi-chevron-right"></i>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =========================
            LOGOUT
        ========================== */}
        <div className="pb-4">

          <button
            className="btn btn-outline-danger w-100 py-2"
            onClick={onLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>

        </div>

      </div>

    </div>
  )
}

export default Dashboard