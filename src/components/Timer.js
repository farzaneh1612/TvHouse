import React, {Component} from 'react';
import {View, AppState} from 'react-native';
import {Text} from './TextTag';

const convertTime = exp => {
  const now = Date.now();
  const expireDate = new Date(exp.replace(/-/g, '/')); // convert date 2021-04-17 to 2021/04/17
  return Math.floor((expireDate.getTime() - now) / 1000);
};

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: this.props.duration
        ? this.props.duration
        : convertTime(this.props.expireTime),
      wentBackgroundAt: null,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.initialTimer();
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    clearInterval(this.timer);
  }

  initialTimer = () => (this.timer = setInterval(this.updateTime, 1000));
  updateTime = () => {
    if (this.state.duration <= 1) {
      this.setState({duration: 1});
      clearInterval(this.timer);
      this.props.onFinish && this.props.onFinish();
    }
    this.setState({duration: this.state.duration - 1});
  };

  handleAppStateChange = currentState => {
    if (currentState === 'active') {
      const diff = Math.floor(
        (Date.now() - this.state.wentBackgroundAt) / 1000,
      );
      const res = this.state.duration - diff;
      this.setState({duration: res});
    }

    if (currentState === 'background') {
      this.setState({wentBackgroundAt: Date.now()});
    }
  };

  styles = {
    wrapper: {flexDirection: 'row'},
    digitStyle: {
      medium: true,
      h4: true,
      color: '#f33',
      ...this.props.digitStyle,
    },
    labelView: {
      paddingHorizontal: 5,
      alignItems: 'center',
    },
  };

  render() {
    const styles = this.styles;
    const {duration} = this.state;
    const day = Math.floor(Math.floor(duration / 3600) / 24);
    const hour = Math.floor(duration / 3600) - day * 24;
    const minute = Math.floor((duration % 3600) / 60);
    const second = Math.floor((duration % 3600) % 60);

    return (
      <View style={styles.wrapper}>
        {day > 0 && (
          <View style={styles.labelView}>
            <Text {...styles.digitStyle}>{day < 10 ? `0${day}` : day} : </Text>
            <Text>روز</Text>
          </View>
        )}
        {(this.props.duration >= 3600 || !this.props.duration) && (
          <View style={styles.labelView}>
            <Text {...styles.digitStyle}>
              {hour < 10 ? `0${hour}` : hour} :
            </Text>
            <Text>ساعت</Text>
          </View>
        )}

        <View style={styles.labelView}>
          <Text {...styles.digitStyle}>
            {minute < 10 ? `0${minute}` : minute} :{' '}
          </Text>
          <Text>دقیقه</Text>
        </View>
        <View style={styles.labelView}>
          <Text>{second < 10 ? `0${second} ` : second} </Text>
          <Text>ثانیه</Text>
        </View>
      </View>
    );
  }
}
