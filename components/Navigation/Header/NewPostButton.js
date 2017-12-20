import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

class NewPostButton extends Component {

    render() {

        const { onPress, color, navigate, to } = this.props;

        return (
            <TouchableOpacity
                style={{ right: 10 }}
                onPress={ () => navigate(to) }
            >
                <Icon
                    name="add-box"
                    style={[ styles.icon ]}
                    color={color}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    icon: { fontSize: 30 }
})

export default NewPostButton;
