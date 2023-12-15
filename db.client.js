const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://esgi_cloud_exam_27145_user:HSbp8xGh4gaXuoXotsVNYvnUPYptz8bL@dpg-clu2r4ol5elc7388jas0-a.frankfurt-postgres.render.com/esgi_cloud_exam_27145', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;