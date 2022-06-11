const { promiseTheaterIXX, promiseTheaterVGC, promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (keyword) => {
  try {
    const promiseTheaterIXX = await promiseTheaterIXX();
    const promiseTheaterVGC = await promiseTheaterVGC();

    const data = await[...promiseTheaterIXX, ...theaterVGC ];

    const countMatchedKey = data.filter(item => {}).length;
    return countMatchedKey;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
