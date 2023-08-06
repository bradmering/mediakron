// A faulty API route to test Sentry's error monitoring
export default function handler(_req, res) {
  res.status(200).json({ 
    version: "0.0.1",
    status: "ok",
    time: new Date().toISOString() 
  });
}
