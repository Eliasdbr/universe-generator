/*
 *	Pseudo-Random Number Generator
 *	Source: wikipedia
 */
export default class PRNG {
  seed = 0;
  setSeed(seed: number) {
    this.seed = Math.abs(seed);
    let a = this.seed * 15485863;
    return (a * a * a % 2038074743)
  }
  next() {
    this.seed++;
    let a = this.seed * 15485863;
    return (a * a * a % 2038074743)
  }
  peek() {
    return this.seed;
  }
}
