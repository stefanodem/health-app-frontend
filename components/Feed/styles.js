import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const imageSize = deviceWidth / 11;
const imageRadius = imageSize / 2;

export const replyInput = {
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  sendButton: {
    alignSelf: 'center',
    padding: 15,
  },
  // send: {
  //   alignSelf: 'center',
  //   color: 'lightseagreen',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   padding: 20,
  // },
}

export const reply = {

}

export const post = {
  mainStyle: {
    paddingBottom: 15,
  },
};

export const header = {
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    flexDirection: 'column',
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  image: {
    //flex: 1,
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
    margin: 2,
    borderRadius: imageRadius,
  },
  name: {
    fontSize: 16,
    color: '#333',
    //textAlign: 'center',
    fontWeight: 'bold',
    // fontFamily: ''
  },
  date: {
    fontSize: 13,
    //color: '#bbb',
    //textAlign: 'center',
    fontWeight: '200',
    // fontFamily: ''
  }
};

export const body = {
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 65,
    paddingRight: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
};

export const interaction = {
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  component: {
    //flex: 1,
    flexDirection: 'row',
  },
  icon: {
      marginTop: 0,
      fontSize: 14,
  },
  text: {
    //flex: 1,
    fontSize: 16,
    //color: '#bbb',
    //textAlign: 'center',
    fontWeight: '200',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    //justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
  },
  infoText: {
    //flex: 1,
    color: 'grey',
    fontSize: 14,
    textAlign: 'right',
    paddingLeft: 20,
    paddingRight: 20,
  },
};