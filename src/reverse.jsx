export default function reverse() {
  const { items } = this.state;
  this.setState(items.reverse());
}
