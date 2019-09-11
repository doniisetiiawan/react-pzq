import React, { Component } from 'react';
import { fromJS } from 'immutable';

import FilteredList from './FilteredList';

class FilteredListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: fromJS({
        items: [
          { name: 'First item', done: false },
          { name: 'Second item', done: false },
          { name: 'Third item', done: false },
        ],

        todoFilter: true,
        doneFilter: false,
        allFilter: false,

        filter: (i) => !i.done,

        todoClick: () => {
          this.data = this.data.merge({
            todoFilter: true,
            doneFilter: false,
            allFilter: false,
            filter: (i) => !i.done,
          });
        },

        doneClick: () => {
          this.data = this.data.merge({
            todoFilter: false,
            doneFilter: true,
            allFilter: false,
            filter: (i) => i.done,
          });
        },

        allClick: () => {
          this.data = this.data.merge({
            todoFilter: false,
            doneFilter: false,
            allFilter: true,
            filter: () => true,
          });
        },

        itemClick: (item) => (e) => {
          e.preventDefault();

          this.data = this.data.update('items', (items) => items.update(
            items.findIndex((i) => i.get('name') === item.name),
            (i) => i.update('done', (done) => !done),
          ));
        },
      }),
    };
  }

  get data() {
    const { data: data1 } = this.state;
    return data1;
  }

  set data(data) {
    this.setState({ data });
  }

  render() {
    const { data: data1 } = this.state;
    return <FilteredList {...data1.toJS()} />;
  }
}

export default FilteredListContainer;
