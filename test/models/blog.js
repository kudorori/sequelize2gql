export const define = (s, type) => s.define("blog", {
  title: {
    type: type.STRING
  }
})


export const relation = ({
  user,
  blog
}) => {
  // admin.hasMany(adminMethod);
}
