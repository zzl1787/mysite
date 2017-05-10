import React, {Component, PropTypes} from 'react';
import {v4} from 'uuid';
import {findDOMNode} from 'react-dom';
import styles from './SketchPad.css';

export default class SketchPad extends Component {

  stroke = null;
  points = [];

  static defaultProps = {
    clear: false,
    width: 300,
    height: 370,
    color: '#0b15a5',
    size: 3,
  };

  static propTypes = {
    clear: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
  };

  constructor(props) {
    super(props);
  }

  clear = () => {
    console.log("clear!");
    const ctx = this.context;
    ctx.clearRect(0, 0, this.props.width, this.props.height);
  };

  getImage = () => {
    let image = new Image();
    image.src = this.canvas.toDataURL("image/png");
    return image;
  };

  componentDidMount() {
    this.canvas = findDOMNode(this.canvasRef);
    this.context = this.canvas.getContext('2d');
  }

  onMouseDown = (e) => {
    this.stroke = {
      id: v4(),
      color: this.props.color,
      size: this.props.size,
      points: [this.getCursorPosition(e)]
    };
    return [this.stroke];
  };

  onMouseUp = (e) => {
    if (!this.stroke) return;
    const {x, y} = this.getCursorPosition(e);
    this.mouseMove(x, y);
    this.points = [];
    const item = this.stroke;
    this.stroke = null;
    return [item];
  };

  onMouseMove = (e) => {
    if (!this.stroke) return [];
    const newPoint = this.getCursorPosition(e);
    const start = this.stroke.points.slice(-1)[0];
    this.drawLine(this.stroke, start, newPoint);
    this.stroke.points.push(newPoint);
    this.points.push(newPoint);
    return [this.stroke];
  };

  mouseMove = (x, y) => {
    if (!this.stroke) return [];
    const newPoint = {x, y};
    const start = this.stroke.points.slice(-1)[0];
    this.drawLine(this.stroke, start, newPoint);
    this.stroke.points.push(newPoint);
    this.points.push(newPoint);
    return [this.stroke];
  };

  drawLine = (item, start, {x, y}) => {
    this.context.save();
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
    this.context.beginPath();
    this.context.lineWidth = item.size;
    this.context.strokeStyle = item.color;
    this.context.globalCompositeOperation = 'source-over';
    this.context.moveTo(start.x, start.y);
    this.context.lineTo(x, y);
    this.context.closePath();
    this.context.stroke();
    this.context.restore();
  };

  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - left,
      y: e.clientY - top
    };
  }

  render() {
    return (
      <canvas id="myCanvas" ref={(canvas) => this.canvasRef = canvas}
              onMouseDown={this.onMouseDown}
              onMouseMove={this.onMouseMove}
              onMouseUp={this.onMouseUp}
              onMouseOut={this.onMouseUp}
              className={styles.normal}
              width={this.props.width}
              height={this.props.height}
      />
    )
  }

}

