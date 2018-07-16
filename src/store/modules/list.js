import {createAction, handleActions} from 'redux-actions'
import { pender } from 'redux-pender'
import axios from 'axios';
import API_KEY from 'static/key.json'

function getItemsAPI(){
    return axios.get("http://openapi.seoul.go.kr:8088/"+API_KEY.key+"/json/RealtimeCityAir/1/25")
}


// 액션 타입을 정의해준다.
const GETITEMS = 'list/GETDATA'
const SELECTITEM = 'list/SELECTITEM'
const CHANGE = 'list/CHANGE'


// 액션 생성 함수를 만듭니다. 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const getItems = createAction(GETITEMS, getItemsAPI);
export const change = createAction(CHANGE, data => data)
export const selectedItem = createAction(SELECTITEM, value => value)

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    keyword: '',
    selected:'',
    items : []
}

// 리듀서를 만들어서 내보내줍니다. / handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고 두번째
// 파라미터는 초기 상태입니다.
export default handleActions({
  
    ...pender({
        type: GETITEMS,
        onSuccess: (state, { payload }) => {
         const { data } = payload;
         return {
            ...state,
            items : data.RealtimeCityAir.row        
         }
        }
      }),
    
    [SELECTITEM]: (state, {payload}) => {

        const itemFind = state.items.filter((item) => {
            return payload === item.MSRSTE_NM
        });

        return {
            ...state,
            'selected': itemFind[0]
        }
    },

    [CHANGE]: (state, {payload}) => {
        return {
            ...state,
            [payload[0]]: payload[1]
        }
    }


}, initialState)
