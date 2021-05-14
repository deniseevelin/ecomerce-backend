const axios = require("axios");

module.exports = async (template_id, template_data) => {
  const data = {
    ...template_data,
    from: {
      name: "Shine YOU!",
      email: "luaneleuterio3@gmail.com"
    },
    template_id
  };
  console.log(data);
  return await axios.post(process.env.SENDGRID_URL, data, {
    headers: {
      "Authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-type": "application/json"
    },
  });
};
