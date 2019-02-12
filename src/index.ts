/**
 * @author [siwilizhao]
 * @email [siwilizhao@gmail.com]
 * @create date 2019-02-12 16:43:28
 * @modify date 2019-02-12 16:43:28
 * @desc [sleep for nodejs]
 */

export async function sleep(duration: number) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(true);
    }, duration);
  });
};
