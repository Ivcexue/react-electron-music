import React, { Component } from 'react';
import 'element-theme-default';
import '../../static/styles/App.scss';
import { Popover } from 'element-react';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      songSheet: [
        {
          title: '个性推荐',
          active: true
        },
        {
          title: '歌单',
          active: false
        },
        {
          title: '主播电台',
          active: false
        },
        {
          title: '排行榜',
          active: false
        },
        {
          title: '歌手',
          active: false
        },
        {
          title: '最新音乐',
          active: false
        }
      ],
      theme: [
        {
          text: '浅色',
          theme: 'light-colour',
          active: true
        },
        {
          text: '红色',
          theme: 'red-colour',
          active: false
        },
        {
          text: '深色',
          theme: 'dark-colour',
          active: false
        },
        {
          text: '自动',
          theme: 'auto-colour',
          active: false
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="right-left">
            <i className="icon-direction iconfont icon-left"></i>
            <i className="icon-direction iconfont icon-right"></i>
          </div>
          <ul className="song-sheet">
            {this.state.songSheet.map((item, index) => {
              return (<li className={item.active ? 'active' : ''} key={index} onClick={this.handleCheckSong.bind(this, item)}>{item.title}</li>)
            })}
          </ul>
          <div className="search-container">
            <i className="iconfont icon-sousuo"></i>
            <input placeholder="搜索" />
          </div>
          <Popover placement="bottom" width="150" trigger="click" content={(
            <div className="theme-container">
              {
                this.state.theme.map((item, index) => {
                  return (
                    <div className="theme-select" key={index} onClick={this.handleCheckTheme.bind(this, item)}>
                      <div className={`theme-item ${item.theme}`}>
                        {item.active ? <i className="iconfont icon-duihao"></i> : ''}
                      </div>
                      <p className="theme-text">{item.text}</p>
                    </div>
                  )
                })
              }
            </div>
          )}>
            <i className="iconfont icon-huanfu"></i>
          </Popover>
        </header>
      </div>
    )
  }
  handleCheckSong(data) {
    let songSheet = [...this.state.songSheet];

    songSheet.forEach(item => {
      item.title === data.title ? item.active = true : item.active = false;
    })
    this.setState({
      songSheet
    })
  }
  handleCheckTheme(curen) {
    let theme = [...this.state.theme];
    theme.forEach(item => {
      item.theme === curen.theme ? item.active = true : item.active = false;
    })
    this.setState({
      theme
    })
  }
}

export default App;
