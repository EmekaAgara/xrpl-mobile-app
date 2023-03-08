

const images = {
  Clear: require('../assets/mooncloud.png'),
  Hail: require('../assets/snowy.png'),
  'Heavy Cloud': require('../assets/mooncloud.png'),
  'Light Cloud': require('../assets/moonrain.png'),
  'Heavy Rain': require('../assets/rainy.png'),
  'Light Rain': require('../assets/rain.png'),
  Showers: require('../assets/rain.png'),
  Sleet: require('../assets/moon.png'),
  Snow: require('../assets/snow.png'),
  Thunder: require('../assets/thunder.png'),
};

export default weather => images[weather];
