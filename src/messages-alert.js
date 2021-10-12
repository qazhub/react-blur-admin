import PropTypes from 'prop-types';
import React from 'react';

export class MessagesAlert extends React.Component {

  static propTypes = {
    user: PropTypes.object,
    subject: PropTypes.string,
    createdAt: PropTypes.string,
    onClick: PropTypes.func,
    relativeTime: PropTypes.string,
    timestamp: PropTypes.string,
  }

  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  renderBody() {
    return (
      <div onClick={this.onClick.bind(this)} className='clearfix'>
        <div className='img-area'>
          <img src={this.props.user.picture} className='photo-msg-item'/>
        </div>
        <div className='msg-area'>
          <div>{this.props.subject}</div>
          <span title={this.props.timestamp}>{this.props.relativeTime}</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderBody()}
      </div>
    );
  }
}
