module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99b55de69aeb9a2dff6264d122799469'),
  },
});
