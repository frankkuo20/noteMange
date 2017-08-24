import Layout from '../compoents/Layout.js'
import { PureComponent } from 'react';

class Test extends PureComponent {
  render() {
    return (
      <Layout title='flux page'>
        <label>1</label>
        <br />
        <button onClick=''>+</button>
      </Layout>
    );
  }
}

export default Test

