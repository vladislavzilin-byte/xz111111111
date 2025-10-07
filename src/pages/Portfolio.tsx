import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: подключи свою логику авторизации/запроса:
    console.log({ username, password, remember });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0e0d12] to-black flex items-center justify-center p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl px-6 py-8 text-white"
      >
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

        {/* Username */}
        <div className="relative mb-4">
          <label htmlFor="username" className="sr-only">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/20 px-11 py-3 outline-none placeholder:text-white/60 focus:border-white/40"
          />
          {/* Boxicons user icon */}
          <i className="bx bx-user absolute left-3 top-1/2 -translate-y-1/2 text-xl text-white/70 pointer-events-none" />
        </div>

        {/* Password */}
        <div className="relative mb-2">
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/20 px-11 py-3 outline-none placeholder:text-white/60 focus:border-white/40"
          />
          {/* Boxicons lock icon */}
          <i className="bx bx-lock-alt absolute left-3 top-1/2 -translate-y-1/2 text-xl text-white/70 pointer-events-none" />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm text-white/70 mb-6">
          <label className="inline-flex items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="accent-white/90"
            />
            Remember me
          </label>
          <a href="#" className="hover:text-white">Forgot password?</a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl border border-white/20 bg-white/10 py-3 font-medium hover:bg-white/15 transition"
        >
          Login
        </button>

        <p className="text-center text-white/70 text-sm mt-4">
          Don&apos;t have an account?{' '}
          <a href="#" className="text-white hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}
