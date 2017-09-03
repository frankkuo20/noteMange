
/* ConfigurableTableExample.jsx */
import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';

// import movies from 'constants/movies';
// import sort from 'utils/ListUtils/sort';

// import Configuration from './Configuration';
import Header from './Header';
import Body from './Body';
const movies = [{"id":1,"username":"admin","email":"test@gmail.com","url":"http://localhost:8000/api/users/1/?format=json"},{"id":2,"username":"test","email":"test@gmail.com","url":"http://localhost:8000/api/users/2/?format=json"},{"id":3,"username":"test2","email":"test2@gmail.com","url":"http://localhost:8000/api/users/3/?format=json"},{"id":4,"username":"test3","email":"test3@gmail.com","url":"http://localhost:8000/api/users/4/?format=json"},{"id":5,"username":"test4","email":"test4@gmail.com","url":"http://localhost:8000/api/users/5/?format=json"},{"id":6,"username":"test5","email":"test5@gmail.com","url":"http://localhost:8000/api/users/6/?format=json"},{"id":7,"username":"test6","email":"test6@gmail.com","url":"http://localhost:8000/api/users/7/?format=json"},{"id":8,"username":"123","email":"123@123.123","url":"http://localhost:8000/api/users/8/?format=json"},{"id":9,"username":"1234","email":"1234@1234.123","url":"http://localhost:8000/api/users/9/?format=json"},{"id":10,"username":"test7","email":"test7@1234.123","url":"http://localhost:8000/api/users/10/?format=json"},{"id":11,"username":"username","email":"","url":"http://localhost:8000/api/users/11/?format=json"},{"id":12,"username":"gg","email":"ggfd@123.12321","url":"http://localhost:8000/api/users/12/?format=json"},{"id":13,"username":"123333","email":"123@123.123","url":"http://localhost:8000/api/users/13/?format=json"},{"id":14,"username":"h","email":"h@234.3124","url":"http://localhost:8000/api/users/14/?format=json"},{"id":15,"username":"��","email":"","url":"http://localhost:8000/api/users/15/?format=json"},{"id":16,"username":"12345","email":"","url":"http://localhost:8000/api/users/16/?format=json"},{"id":17,"username":"123456","email":"","url":"http://localhost:8000/api/users/17/?format=json"},{"id":18,"username":"1234567","email":"","url":"http://localhost:8000/api/users/18/?format=json"},{"id":19,"username":"123546456","email":"","url":"http://localhost:8000/api/users/19/?format=json"},{"id":20,"username":"22","email":"","url":"http://localhost:8000/api/users/20/?format=json"},{"id":21,"username":"222","email":"","url":"http://localhost:8000/api/users/21/?format=json"},{"id":22,"username":"23","email":"","url":"http://localhost:8000/api/users/22/?format=json"},{"id":23,"username":"213","email":"123@123.123","url":"http://localhost:8000/api/users/23/?format=json"},{"id":24,"username":"2134","email":"123@123.123","url":"http://localhost:8000/api/users/24/?format=json"},{"id":25,"username":"555555555","email":"123@123.123","url":"http://localhost:8000/api/users/25/?format=json"},{"id":26,"username":"35","email":"123@123.123","url":"http://localhost:8000/api/users/26/?format=json"},{"id":27,"username":"36","email":"123@123.123","url":"http://localhost:8000/api/users/27/?format=json"},{"id":28,"username":"324","email":"","url":"http://localhost:8000/api/users/28/?format=json"},{"id":29,"username":"124","email":"123@123.123","url":"http://localhost:8000/api/users/29/?format=json"},{"id":30,"username":"aa","email":"","url":"http://localhost:8000/api/users/30/?format=json"},{"id":31,"username":"ab","email":"","url":"http://localhost:8000/api/users/31/?format=json"},{"id":32,"username":"abc","email":"","url":"http://localhost:8000/api/users/32/?format=json"},{"id":33,"username":"asd","email":"","url":"http://localhost:8000/api/users/33/?format=json"},{"id":34,"username":"abcd","email":"","url":"http://localhost:8000/api/users/34/?format=json"},{"id":35,"username":"ii","email":"","url":"http://localhost:8000/api/users/35/?format=json"},{"id":36,"username":"gf","email":"dg@gfg.gfd","url":"http://localhost:8000/api/users/36/?format=json"},{"id":37,"username":"qw","email":"","url":"http://localhost:8000/api/users/37/?format=json"},{"id":38,"username":"t","email":"","url":"http://localhost:8000/api/users/38/?format=json"},{"id":39,"username":"aaa","email":"","url":"http://localhost:8000/api/users/39/?format=json"},{"id":40,"username":"qq","email":"","url":"http://localhost:8000/api/users/40/?format=json"},{"id":41,"username":"123@.213.123","email":"","url":"http://localhost:8000/api/users/41/?format=json"},{"id":42,"username":"22454","email":"","url":"http://localhost:8000/api/users/42/?format=json"}]
export default class ConfigurableTableExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inline: false,
      large: false,
      sortedMovies: movies,
      sortedType: 'title',
      titleSorted: true,
      yearSorted: null,
      okOnOutsideClick: true,
    };
  }

  sort = () => {
    const key = this.state.sortedType;
    const sorted = !this.state[`${key}Sorted`];

    this.setState({
      sortedMovies: sort(movies, key, sorted),
      [`${key}Sorted`]: sorted,
    });
  };

  changeSortType = (value) => {
      
    const key = value === 'year' ? 'title' : 'year';
    this.setState({
      [`${key}Sorted`]: null,
      [`${value}Sorted`]: true,
      sortedType: value,
      sortedMovies: sort(movies, value, true),
    });
  };

  handleDialogChange = (large) => {
    this.setState({ large });
  };

  handleInlineChange = (inline) => {
    this.setState({ inline });
  };

  handleSaveChange = (okOnOutsideClick) => {
    this.setState({ okOnOutsideClick });
  };

  render() {
    const {
      large,
      inline,
      okOnOutsideClick,
      yearSorted,
      titleSorted,
      sortedType,
      sortedMovies,
    } = this.state;
    return (
      <div>
        {/* <Configuration
          dialogChecked={large}
          onDialogChange={this.handleDialogChange}
          inlineChecked={inline}
          onInlineChange={this.handleInlineChange}
          sorted={sortedType}
          onSortChange={this.changeSortType}
          saveChecked={okOnOutsideClick}
          onSaveChange={this.handleSaveChange}
        /> */}
        <DataTable baseId="movies">
          <Header yearSorted={yearSorted} titleSorted={titleSorted} sort={this.sort} />
          <Body movies={sortedMovies} inline={inline} large={large} okOnOutsideClick={okOnOutsideClick} />
        </DataTable>
      </div>
    );
  }
}