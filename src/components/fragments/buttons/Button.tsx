import React, { PureComponent } from 'react';

import Loader from 'components/fragments/status/Loader';
import dynamicClassName from 'utils/dynamicClassName';
import 'styles/Button.css';

interface Props {
  text: string;
  handleClick: Function;
  style?: Record<string, string>;
  disabled?: boolean;
  transparent?: boolean;
  warning?: boolean;
  secondary?: boolean;
  specialModal?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

class Button extends PureComponent<Props> {
  static defaultProps = {
    text: 'button',
    handleClick: () => null,
    style: {},
    disabled: false,
    transparent: false,
    warning: false,
    secondary: false,
    specialModal: false,
    isLoading: false,
    type: 'button',
  };

  handleClick = () => {
    const { handleClick, disabled } = this.props;
    return !disabled && handleClick();
  };

  render() {
    const { isLoading, text, type, style, disabled, transparent, warning, secondary, specialModal } = this.props;

    const button = dynamicClassName('styleButton');
    const buttonText = dynamicClassName('styleText');

    transparent && button.add('styleButtonTransparent'); // eslint-disable-line no-unused-expressions
    transparent && buttonText.add('styleTextTransparent'); // eslint-disable-line no-unused-expressions

    secondary && button.add('styleButtonSecondary'); // eslint-disable-line no-unused-expressions

    warning && button.add('styleButtonWarning'); // eslint-disable-line no-unused-expressions

    specialModal && button.add('styleSpecialModalButton'); // eslint-disable-line no-unused-expressions

    return (
      /* eslint-disable react/button-has-type */
      <button type={type} className={button.build()} onClick={this.handleClick} style={style} disabled={disabled}>
        {isLoading ? <Loader /> : <p className={buttonText.build()}>{text}</p>}
      </button>
    );
  }
}

export default Button;
