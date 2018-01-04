export const define = (s, type) => s.define("user", {
  username: {
    type: type.STRING(50),
    unique: true
  },
  password: type.TEXT,
  name: type.STRING
})


export const relation = ({
  user,
  blog
}) => {
  // admin.hasMany(adminMethod);
}
