import axios from 'axios';

export const config = {
  key: '993b46dbd076e3e7a8fe9d5ed85a0dfb',
  url: {
    getCityByIp: 'https://restapi.amap.com/v3/ip',
    getWeather: 'https://restapi.amap.com/v3/weather/weatherInfo',
  },
};

export function getCity() {
  return axios
    .get(`${config.url.getCityByIp}?key=${config.key}`)
    .then((res) => {
      if (res.data.city && res.data.city.length) {
        return res;
      }
      return {
        data: {
          city: '深圳市',
          adcode: '440300',
          province: '广东省',
        },
      };
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export function getWeather(adcode: string) {
  return axios
    .get(
      `${config.url.getWeather}?key=${config.key}&city=${adcode}&extensions=all`
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export default null;
