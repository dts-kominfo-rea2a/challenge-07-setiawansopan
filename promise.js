const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (keyword) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const data = await [...theaterIXX, ...theaterVGC ];

    const countMatchedKey = data.filter(item => {}).length;
    return countMatchedKey;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
