import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const imageSize = deviceWidth / 9;
const imageRadius = imageSize / 2;

export const replyInput = {
  mainStyle: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
}

export const reply = {

}

export const post = {
  mainStyle: {
    paddingBottom: 15,
  },
};

export const header = {
  mainStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  titleStyle: {
    flexDirection: 'column',
    flex: 4,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  imageStyle: {
    //flex: 1,
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
    margin: 2,
    borderRadius: imageRadius,
  },
  nameStyle: {
    fontSize: 16,
    color: '#333',
    //textAlign: 'center',
    fontWeight: 'bold',
    // fontFamily: ''
  },
  dateStyle: {
    fontSize: 13,
    //color: '#bbb',
    //textAlign: 'center',
    fontWeight: '200',
    // fontFamily: ''
  }
};

export const body = {
  mainStyle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
};

export const interaction = {
  mainStyle: {
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
  componentStyle: {
    //flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
      marginTop: 0,
      fontSize: 14,
  },
  textStyle: {
    //flex: 1,
    fontSize: 16,
    //color: '#bbb',
    //textAlign: 'center',
    fontWeight: '200',
  }
};