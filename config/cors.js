export const allowedOrigins = [
  "http://localhost:3000",
  "https://api-archive.vercel.app",
  "https://apiarchive.azharzaman.com",
  "https://apiarchive-kamran.vercel.app",
];

export const corOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin Not Allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};
