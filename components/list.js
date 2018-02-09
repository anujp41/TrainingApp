import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';


class List extends Component {

  constructor() {
    super();
    this.key = this.key.bind(this);
  }

  key = (item) => item.rank;

  render() {
    const currency = this.props.cryptos;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.key}
          data={currency}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={styles.data}>
                <Text style={styles.name}>{item.symbol} | {item.name}</Text>
                <Text style={styles.price}>{item.price_usd}</Text>
              </View>
              <View style={styles.moreData}>
                <Text>Volume: {item['24h_volume_usd']}</Text>
              </View>
              <View style={styles.moreData}>
                <Text>% change: </Text>
                <View style={styles.diff}>
                  <Text>{item['percent_change_1h']}%</Text>
                  <Text>Change 1h</Text>
                </View>
                <View style={styles.diff}>
                  <Text>{item['percent_change_24h']}%</Text>
                  <Text>Change 24h</Text>
                </View>
                <View style={styles.diff}>
                  <Text>{item['percent_change_7d']}%</Text>
                  <Text>Change 7d</Text>
                </View>
              </View>
            </View>
            )}
        />
      </View>
    );
  }
}

const mapState = state => {
  return {
    cryptos: state.cryptoData
  }
}

const ListContainer = connect(mapState, null)(List);
export default ListContainer;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#CCCCCC'
  },
  card: {
    backgroundColor: '#b2dfbd',
    width: width,
    height: height/8,
    marginTop: 5,
    marginBottom: 5
  },
  data: {
    width: width*.85,
    paddingBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  price: {
    right: 0,
    position: 'absolute',
    fontWeight: 'bold'
  },
  moreData: {
    display: 'flex',
    paddingBottom: 5,
    flexDirection: 'row'
  },
  diff: {
    flexDirection: 'column',
    alignItems: 'center',
    width: width/4.25
  }
});