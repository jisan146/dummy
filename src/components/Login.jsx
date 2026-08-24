import { useState } from 'react'

function Login({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            username.toLowerCase() === 'demo' &&
            password.toLowerCase() === 'demo'
        ) {
            setError('')
            setLoading(true)

            // 2 second loading
            setTimeout(() => {
                setLoading(false)
                onLogin()
            }, 2000)
        } else {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setError('Invalid username or password')
            }, 2000)

        }
    }

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-sm-10 col-md-6 col-lg-4">

                    <div className="card shadow border-0">
                        <div className="card-body p-4">

                            <h3 className="text-center mb-4">
                                Login
                            </h3>

                            {error && (
                                <div className="alert alert-danger py-2">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>

                                {/* Username */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Username
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-3">
                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={loading}
                                    />
                                </div>

                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                            Logging in...
                                        </>
                                    ) : (
                                        'Login'
                                    )}
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login