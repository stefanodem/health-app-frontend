import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Colors,
  Animated,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import _values from 'lodash/values';
import * as actions from '../../actions';
import { Post, ButtonBack, NewPostButton } from '../../components';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { user } from '../../testData/testUser2';

//TODO: where do we initially get the uid?
//after authentication
//or Async.Storage if auth is persisted through sessions
//const UID = '11111';

const HEADER_CARD_HEIGHT = 300;
const SCREEN_WIDTH = Dimensions.get('window').width;

class FeedScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate, goBack } = navigation;

    return {
      // header: (  Your custom header

      // ),
      title: 'Feed',
      headerTitle: 'Feed',
      headerLeft: (
        <ButtonBack
          onPress={ () => navigate('MyCircles') } />
      ),
      headerRight: (
        <NewPostButton
          color="red"
          navigate={navigate}
          to="AddToCircle" />
      ),
    }
  }

  componentDidMount () {
    //setAndHandleFeedListener?
    //move to authentication:
    //this.props.fetchAndHandleUser(UID);

    // const { circleId } = this.props.navigation.state.params.circle;
    // this.props.fetchAndHandleCirclePosts(circleId)
    const uid = this.props.user.userInfo.uid;
    const circleId = this.props.navigation.state.params;
    this.props.fetchAndHandleUserPosts(uid, circleId);
  }

  _handleLikes = (postId, likeCount, liked) => {
    console.log("Liked");
    if (liked) {
      this.props.removeLike(postId, likeCount);
    } else {
      this.props.addLike(postId, likeCount);
    }
  }

  _handleReplies = (params) => {
    console.log("Commented");
    this.props.navigation.navigate('Thread', params);
  }

  _handleShares = () => {
    console.log("Shared");
    //TODO: build shareScreen
    //this.props.navigation.navigate('Share', params);
  }

  _onProfilePress = (uid) => {
    console.log("Pressed profile")
    //TODO:
    //this.props.navigation.navigate('UserProfile', params);

    //move to User Profile Screen:
    //this.props.fetchAndHandleUser(uid)
  }

  _headerKeyExtractor = (item, index) => item;

  _feedKeyExtractor = (item, index) => item.postId;

  _renderHeaderCard = ({ item }) => {
    //TODO: think about using {...this.props} to pass props down to 'Post'
    //TODO: change handleReplies: looks nasty
    return (
      <View style={styles.container}>
        <View style={{ paddingTop: 20, paddingLeft: 20}}>
          <AnimatedCircularProgress
            size={120}
            width={5}
            fill={85}
            tintColor="#00e0ff"
            backgroundColor="#152d44">
            {
              (fill) => (
                <View style={styles.pointsContainer}>
                  <Text style={styles.points}>
                    { 85 }
                  </Text>
                  <Text style={styles.description}>
                    { 'Average Blood Sugar Level' }
                  </Text>
                </View>
              )
            }
          </AnimatedCircularProgress>
        </View>
        <View style={{ padding: 20 }}>
          <AnimatedCircularProgress
            size={120}
            width={5}
            fill={90}
            tintColor="#00e0ff"
            backgroundColor="#152d44">
            {
              (fill) => (
                <View style={styles.pointsContainer}>
                  <Text style={styles.points}>
                    { 90 }
                  </Text>
                  <Text style={styles.description}>
                    { 'Deviation Blood Sugar Level' }
                  </Text>
                </View>
              )
            }
          </AnimatedCircularProgress>
        </View>
      </View>
    )
  }

  //TODO: handleComments.bind(this, post) --> postId instead of passing full post? send postId and retrieve again when called instead of passing around
  _renderPost = ({ item }) => {
    //TODO: think about using {...this.props} to pass props down to 'Post'
    //TODO: change handleReplies: looks nasty
    return (
      <Post
        key={item.postId}
        post={item}
        user={item.user}
        handleLikes={() => this._handleLikes(item.postId, item.likeCount, item.liked)}
        handleReplies={() => this._handleReplies({ post: item })}
        handleShares={this._handleShares}
        onProfilePress={this._onProfilePress} />
    )
  }

  render() {
    //TODO: research and include flatlist features,
    //e.g. pull to refresh, scroll loading, etc.
    //https://facebook.github.io/react-native/docs/flatlist.html

    const posts = this.props.feed.posts;
    const isFetching = this.props.feed.isFetching;

    if (isFetching) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <ParallaxScrollView
        backgroundColor="white"
        //contentBackgroundColor="pink"
        parallaxHeaderHeight={300}
        //stickyHeaderHeight={ 40 }
        //renderScrollComponent={() => <Animated.View />}
        //renderScrollComponent={() => <AnimatedCustomScrollView />}


        //renderStickyHeader={() => (
        //  <View key="sticky-header">
        //    <Text>Feed</Text>
        //  </View>
        //)}
        renderForeground={() => (

            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={this._headerKeyExtractor}
              data={ [1,2,3] }
              renderItem={ this._renderHeaderCard } />

        )}>

        <FlatList
          keyExtractor={this._feedKeyExtractor}
          data={ _values(posts) }
          renderItem={ this._renderPost } />

      </ParallaxScrollView>


    );
  }
}

const styles = StyleSheet.create({
  pointsContainer: {
    flex: 1,
    flexDirection: 'row',
    //paddingTop: 15,

  },
  points: {
    backgroundColor: 'transparent',
    //position: 'absolute',
    //justifyContent: 'center',
    top: 28,
    left: 105,
    width: SCREEN_WIDTH / 3,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: "100",
  },
  description: {
    backgroundColor: 'transparent',
    //position: 'absolute',
    top: 28,
    left: 110,
    width: SCREEN_WIDTH / 2,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 30,
    fontWeight: "100",
  },
  points2: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 60,
    left: 12,
    width: HEADER_CARD_HEIGHT / 2,
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: "100"
  },
  container: {
    height: HEADER_CARD_HEIGHT,
    width: SCREEN_WIDTH,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#152d44',
    //paddingLeft: 30,
  },
  // pointsDelta: {
  //   color: '#4c6479',
  //   fontSize: 50,
  //   fontWeight: "100"
  // },
  // pointsDeltaActive: {
  //   color: '#fff',
  // }
});

function mapStateToProps({ feed, user }) {
  return {
    feed,
    user
  }
}

export default connect(mapStateToProps, actions)(FeedScreen);
