import React from 'react';
import {View, Image, TouchableNativeFeedback} from 'react-native';
import {images} from '../images';
import {styles} from '../styles';

export default class RatingInput extends React.Component {

    state = {
        rating: 0,
    };

    constructor(props) {
        super(props);
    }

    // // Rerender component if props are changed (rating is loaded)
    // componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
    //     this.setState({rating: parseInt(this.props.value)});
    // }

    _handleStarClick = (starIndex) => {
        this.setState({rating: starIndex * 2});
        this.props.ratingSetCallback(starIndex*2);
        console.log('RatingInput: selected ' + starIndex + ' star(s), rating set to ' + starIndex * 2);
    };

    render() {
        let star1 = 'empty_star';
        let star2 = 'empty_star';
        let star3 = 'empty_star';
        let star4 = 'empty_star';
        let star5 = 'empty_star';
        if (this.state.rating >= 2) {
            star1 = 'full_star';
        }
        if (this.state.rating >= 4) {
            star2 = 'full_star';
        }
        if (this.state.rating >= 6) {
            star3 = 'full_star';
        }
        if (this.state.rating >= 8) {
            star4 = 'full_star';
        }
        if (this.state.rating >= 10) {
            star5 = 'full_star';
        }
        switch (this.state.rating) {
            case 1:
                star1 = 'half_star';
                break;
            case 3:
                star2 = 'half_star';
                break;
            case 5:
                star3 = 'half_star';
                break;
            case 7:
                star4 = 'half_star';
                break;
            case 9:
                star5 = 'half_star';
                break;
        }
        return <View style={styles.ratingInputContainer}>
            <TouchableNativeFeedback onPress={() => this._handleStarClick(1)}>
                <Image source={images[star1]} style={styles.ratingInputStarImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => this._handleStarClick(2)}>
                <Image source={images[star2]} style={styles.ratingInputStarImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => this._handleStarClick(3)}>
                <Image source={images[star3]} style={styles.ratingInputStarImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => this._handleStarClick(4)}>
                <Image source={images[star4]} style={styles.ratingInputStarImage}/>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => this._handleStarClick(5)}>
                <Image source={images[star5]} style={styles.ratingInputStarImage}/>
            </TouchableNativeFeedback>
        </View>;
    }
}
