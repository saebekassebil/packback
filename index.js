import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './components/search-input';
import ItemList from './components/item-list';

import { 
  SearchkitManager, SearchkitProvider, SearchBox, Hits
} from 'searchkit'

const searchkit = new SearchkitManager('http://localhost:9200');


const DATABASE = [
  {
    key: 1,
    name: 'Backpack',
    weight: 1540
  },
  {
    key: 2,
    name: 'Tent',
    weight: 2200
  },
  {
    key: 3,
    name: 'Sleeping bag',
    weight: 800
  },
  {
    key: 4,
    name: 'Cooking stove (Trangia)',
    weight: 700
  },
  {
    key: 5,
    name: 'Woolen socks',
    weight: 200
  },
  {
    key: 6,
    name: 'Raincoat',
    weight: 600
  },
  {
    key: 7,
    name: 'Rain trousers',
    weight: 300
  },
  {
    key: 8,
    name: 'Woolen sweater',
    weight: 800
  },
  {
    key: 9,
    name: 'Toothpaste',
    weight: 75
  },
  {
    key: 10,
    name: 'Toothbrush',
    weight: 30
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          key: 1,
          name: 'Backpack',
          weight: 1540
        },
        {
          key: 2,
          name: 'Tent',
          weight: 2200
        },
        {
          key: 3,
          name: 'Sleeping bag',
          weight: 800
        },
        {
          key: 4,
          name: 'Cooking stove (Trangia)',
          weight: 700
        }
      ],

      searchResults: []
    }
  }

  onSearch(val) {
    console.log('On Search', e);
  }

  onChange(val) {
    
  }

  render() {
    return (
      <div className="app">
        <h1>PackBack</h1>
        <SearchkitProvider searchkit={ searchkit }>
          <div>
            <SearchBox />
            <Hits hitsPerPage={100}/>
          </div>
        </SearchkitProvider>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
