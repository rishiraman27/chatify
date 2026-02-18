import "dotenv/config";


export const ENV={
    PORT:process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    EMAIL_FROM: process.env.EMAIL_FROM,
    CLIENT_URL: process.env.CLIENT_URL,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
};

// PORT=3000
// MONGO_URL= mongodb://localhost:27017/chatify

// NODE_ENV=development

// JWT_SECRET= my_secretkey

// RESEND_API_KEY=re_Q9Qfdza4_MCrxpvEbr5PihoQztLahjgqc

// EMAIL_FROM_NAME="Rishi Raman"
// EMAIL_FROM="onboarding@resend.dev"

// CLIENT_URL=http://Localhost:5173