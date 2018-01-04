import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const imageSize = deviceWidth / 11;
const imageRadius = imageSize / 2;

//TODO: make styles dynamic (research)

export const newPost = {
  header: StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 10,
      backgroundColor: '#f6f6f6',
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    title: {
      justifyContent: 'center',
      paddingLeft: 8,
      paddingTop: 5,
      paddingBottom: 5,
      },
    name: {
      fontSize: 16,
      color: '#333',
      fontWeight: 'bold',
    },
    date: {
      fontSize: 13,
      fontWeight: '200',
    },
  }),
  sendTo: {
    container: {

    },
    profile: {
      borderWidth: 2,
      borderColor: 'pink',
    },
  },
  textInput: {
    fontSize: 18,
  },
}

export const replyInput = StyleSheet.create({
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
})

export const post = StyleSheet.create({
  mainStyle: {
    paddingBottom: 15,
  },
})

export const postHeader = StyleSheet.create({
  container: {
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
    justifyContent: 'center',
    width: imageSize,
    height: imageSize,
    margin: 2,
    borderRadius: imageRadius,
  },
  name: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 13,
    fontWeight: '200',
  }
})

export const postBody = StyleSheet.create({
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
  text: {
    fontSize: 15,
  }
})

export const postInteraction = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 65,
    paddingRight: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  component: {
    flexDirection: 'row',
  },
  icon: {
      marginTop: 0,
      fontSize: 14,
  },
  text: {
    fontSize: 16,
    fontWeight: '200',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#bbb',
  },
  infoText: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'right',
    paddingLeft: 20,
    paddingRight: 20,
  },
})