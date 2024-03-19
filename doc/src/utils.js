export const getUrl = (path) => import.meta.env.VITE_URL + path;
export const getEspUrl = (path) => import.meta.env.VITE_ESP8266_URL + path;

export const getMqttAuthInfo = () => {
  return {
    username: import.meta.env.VITE_MQTT_USERNAME,
    password: import.meta.env.VITE_MQTT_PASSWORD,
  };
};
