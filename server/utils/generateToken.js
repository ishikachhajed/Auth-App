import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  // Sign a token with the user's ID as the payload
  // The token will expire in 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
