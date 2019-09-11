import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonGroup,
  ListGroupItem,
  ListGroup,
} from 'react-bootstrap';

import './FilteredList.css';

const itemStyle = (done) => (done ? { variant: 'primary' } : { variant: '' });

const ItemIcon = ({ done }) => (done ? ' Selesai...' : null);

const FilteredList = ({
  allClick,
  allFilter,
  doneClick,
  doneFilter,
  filter,
  itemClick,
  items,
  todoClick,
  todoFilter,
}) => (
  <section>
    <ButtonGroup className="filters">
      <Button active={todoFilter} onClick={todoClick}>
        Todo
      </Button>
      <Button active={doneFilter} onClick={doneClick}>
        Done
      </Button>
      <Button active={allFilter} onClick={allClick}>
        All
      </Button>
    </ButtonGroup>

    <ListGroup>
      {items.filter(filter).map((i) => (
        <ListGroupItem
          key={i.name}
          onClick={itemClick(i)}
          {...itemStyle(i.done)}
        >
          {i.name}
          <ItemIcon done={i.done} />
        </ListGroupItem>
      ))}
    </ListGroup>
  </section>
);

FilteredList.propTypes = {
  todoFilter: PropTypes.bool.isRequired,
  doneFilter: PropTypes.bool.isRequired,
  allFilter: PropTypes.bool.isRequired,
  todoClick: PropTypes.func.isRequired,
  doneClick: PropTypes.func.isRequired,
  allClick: PropTypes.func.isRequired,
  itemClick: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default FilteredList;
