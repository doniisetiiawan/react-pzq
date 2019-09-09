import BaseComponent from './BaseComponent';

export default class MyComponent extends BaseComponent {
  componentDidMount() {
    this.data = this.data.merge({
      items: [
        { id: 1, name: 'One', done: false },
        { id: 2, name: 'Two', done: false },
        { id: 3, name: 'Three', done: false },
      ],
    });
  }
}
