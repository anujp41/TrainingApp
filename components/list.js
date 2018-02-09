import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from 'react-native';


class List extends Component {

  constructor() {
    super();
    this.state = {
      curr: [
              {
                  "id": "bitcoin",
                  "name": "Bitcoin",
                  "symbol": "BTC",
                  "rank": "1",
                  "price_usd": "573.137",
                  "price_btc": "1.0",
                  "24h_volume_usd": "72855700.0",
                  "market_cap_usd": "9080883500.0",
                  "available_supply": "15844176.0",
                  "total_supply": "15844176.0",
                  "max_supply": "21000000.0",
                  "percent_change_1h": "0.04",
                  "percent_change_24h": "-0.3",
                  "percent_change_7d": "-0.57",
                  "last_updated": "1472762067"
              }, {
                  "id": "ethereum",
                  "name": "Ethereum",
                  "symbol": "ETH",
                  "rank": "2",
                  "price_usd": "12.1844",
                  "price_btc": "0.021262",
                  "24h_volume_usd": "24085900.0",
                  "market_cap_usd": "1018098455.0",
                  "available_supply": "83557537.0",
                  "total_supply": "83557537.0",
                  "percent_change_1h": "-0.58",
                  "percent_change_24h": "6.34",
                  "percent_change_7d": "8.59",
                  "last_updated": "1472762062"
              }
          ]
    }
    this.key = this.key.bind(this);
  }

  key = (item) => item.rank;

  render() {
    const curr = this.props.navigation.state.params.currency;
    // const curr = this.state.curr;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.key}
          data={curr}
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

export default List;

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