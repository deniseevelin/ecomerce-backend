const axios = require("axios");

const juno = async (method, baseUrl, endpoint, data = {}, config = {}) => {
  const instance = await axios.create({
    baseURL: baseUrl,
    headers: {
      "X-Api-Version": 2,
      "X-Resource-Token":
        "A64F3729889F2AB609839CDBE8127F95B949C468CE5BF7A62AFD13C64F67CDFC",
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkZW5pc2Uuc2lsdmFAbGlua2FwaS5jb20uYnIiLCJzY29wZSI6WyJhbGwiXSwiZXhwIjoxNjIwNDgwMTU4LCJqdGkiOiIzeEJQUlE1alcwWXpVamNwYmJuOWdZWHpRQU0iLCJjbGllbnRfaWQiOiJSSmVXcDY5aUxBaXBpdEl0In0.NcfkTxTupBk14EZmAx_utTUDVwzGZJz7K-wUkrhozsIweVUT6kjQZ9hHAVP1PyZToUhd_gJ27YGMBg-gVMf9Pa4zomB9sTyVqUvwbRfQlM3RlgxFRBWCtux269v_bagrqKYLyUhvkTVHB6cVVyaH_AeNvg-MLU7sR_LJtNL5N4d8PxYeTiIv_Fvg7-T6xwmHD3fZQfZDr_JlqNhMH_cnWIcSIlXybrMPfBic26nM0dom-jwwKc_eARhzLiXEkAMTb5Bo-P3fHdj-AhLLZHl68iYqa_PO_b7KYrAwRq21pmBPEEjlT2oPLuOxX8gft8qz6v_xT4ccPgPX9B2D3SVAGw",
    },
  });

  let request;
  switch (method) {
    case "get":
      request = instance.get;
      break;
    case "post":
      request = instance.post;
      break;
    case "put":
      request = instance.put;
      break;
    case "patch":
      request = instance.patch;
      break;
    case "delete":
      request = instance.delete;
      break;
    default:
      request = instance.get;
  }
  return request(endpoint, data, config).catch((error) => {
    console.log(error);
  });
};

module.exports = juno;