import request from "../utils/request";

export const getConfigs = (key: string) => {
  return new Promise((resolve, reject) => {
    request({
      url: `/admin/splash-screen`,
      method: "post",
      data: { "auth_key": key },
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateConfigs = (key: string, data: any) => {
  return new Promise((resolve, reject) => {
    request({
      url: `/admin/update-splash-screen`,
      method: "post",
      data: { "auth_key": key, data },
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
