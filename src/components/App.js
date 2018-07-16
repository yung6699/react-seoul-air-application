import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as listActions from 'store/modules/list'
import List from 'components/List'
import './App.css'

class App extends Component {

    state = {};

    componentDidMount() {
        this
            .props
            .getItems()
    }

    handleChange = (e) => {
        this
            .props
            .change([e.target.name, e.target.value])
    }

    render() {
        const {items, getItems, keyword} = this.props;
        const filteredItems = items.filter((item) => {
            return (keyword === undefined)
                ? true
                : item
                    .MSRSTE_NM
                    .trim()
                    .indexOf(keyword) !== -1
        });

        return (
            <div className="container">
                <List handleReload={getItems} // 새로고침
                    handleChange={this.handleChange} items={filteredItems} kekeyword={keyword}/>
            </div>
        )
    }

}
// props 값으로 넣어 줄 상태를 정의해줍니다.
const mapStateToProps = (state) => {
    return {items: state.list.items, keyword: state.list.keyword}
};

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(listActions.getItems()),
    change: (target) => dispatch(listActions.change(target))
})

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다. connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를
// 반환합니다. 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(mapStateToProps, mapDispatchToProps)(App);
