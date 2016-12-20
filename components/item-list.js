import React from 'react';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let sumWeight = 0;
    let listItems = this.props.items.map((item) => {
      sumWeight += item.weight;

      return (
        <tr key={ item.key }>
          <td>{ item.name }</td>
          <td>{ item.weight }</td>
        </tr>
      );
    })


    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          { listItems }
        </tbody>
        
        <tfoot>
          <tr>
            <th>Sum weight:</th>
            <th>{ sumWeight }</th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default ItemList;
