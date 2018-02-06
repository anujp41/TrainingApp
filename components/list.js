import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


class List extends Component {

  constructor() {
    super();
    this.key = this.key.bind(this);
  }

  key = (item) => item.rank;

  render() {
    const currency = this.props.navigation.state.params.currency;
    console.log('curer ', currency)
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.key}
          data={currency}
          renderItem={({item}) => <Text>{item.name}, {item.price_usd}</Text>}
        />
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});