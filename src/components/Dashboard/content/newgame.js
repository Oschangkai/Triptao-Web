import React from 'react';
import { TreeSelect ,Icon , Select} from 'antd';
import "./newgame.css"




const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [{
    label : '迷你世界',
    value : '0-0',
    key : '0-0',
    children : [{
        label : '獨角仙生態區',
        value : '0-0-0' ,
        key : '0-0-0',
    },  {
        label : '迷你台灣',
        value : '0-0-1' ,
        key : '0-0-1',
    },  {
        label : '迷你中國',
        value : '0-0-2' ,
        key : '0-0-2',
    },  {
        label : '迷你亞洲',
        value : '0-0-3' ,
        key : '0-0-3',
    },  {
        label : '迷你歐洲',
        value : '0-0-4' ,
        key : '0-0-4',
    },  {
        label : '迷你美洲',
        value : '0-0-5' ,
        key : '0-0-5',
    }], 
},  {
    label : '歐洲室內樂園',
    value : '0-1',
    key : '0-1',
    children : [{
        label : '兒童碰碰車',
        value : '0-1-0',
        key : '0-1-0',
    },  {
        label : '水道船',
        value : '0-1-1',
        key : '0-1-1',
    },  {
        label : '動感樂園',
        value : '0-1-2',
        key : '0-1-2',
    },  {
        label : '音樂馬車',
        value : '0-1-3',
        key : '0-1-3',
    }],
}, {
    label : '美洲探險樂園',
    value : '0-2',
    key : '0-2',
    children : [{
        label : '擎天輪',
        value : '0-2-0',
        key : '0-2-0',
    },  {
        label : '大力士',
        value : '0-2-1',
        key : '0-2-1',
    },  {
        label : '嘟嘟車',
        value : '0-2-2',
        key : '0-2-2',
    },  {
        label : '吉普車',
        value : '0-2-3',
        key : '0-2-3',
    },  {
        label : '搖滾船',
        value : '0-2-4',
        key : '0-2-4',
    },  {
        label : '飛飛機',
        value : '0-2-5',
        key : '0-2-5',
    },  {
        label : '跳星星',
        value : '0-2-6',
        key : '0-2-6',
    },  {
        label : '摩天草莓',
        value : '0-2-7',
        key : '0-2-7',
    },  {
        label : '瘋狂急流',
        value : '0-2-8',
        key : '0-2-8',
    },  {
        label : '金剛大冒險',
        value : '0-2-9',
        key : '0-2-9',
    },  {
        label : '擎天氣墊遊戲區',
        value : '0-2-10',
        key : '0-2-10',
    },  {
        label : '採礦列車',
        value : '0-2-11',
        key : '0-2-11',
    }],
    }, {
        label : '轟浪水樂園',
        value : '0-3',
        key : '0-3',
        children : [{
        label : '轟浪',
        value : '0-3-1',
        key : '0-3-1',
    }],
    }, {
        label : '遊園小火車',
        value : '0-4',
        key : '0-4',
    
    }, {
        label : '機器人歷險樂園',
        value : '0-5',
        key : '0-5',
    
    }, {
        label : '超好玩海世界氣墊樂園',
        value : '0-6',
        key : '0-6',
    
}];
const Option = Select.Option;

    function handleChange(value) {
    console.log(`selected ${value}`);
}

 
export default class Newgame extends React.Component {
    state = {
        value: [],
      }
    onChange = (value) => {
        console.log('onChange ',value, arguments);
        this.setState({ value });
    }
     render()
     {
        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: '請選擇關卡內容',
            style: {
              width: 500,
            },

            
        };
        
       return(
        <div>
            <span className="backtogame">< Icon type="rollback"/>
            回到闖關活動列表
            </span>

         <li className="gamename">關卡名稱 :     &nbsp;
             < input type="text" placeholder="     請輸入闖關活動名稱" />
        </li>
         <li  className="selectgame">   
        關卡內容 : &nbsp;<TreeSelect {...tProps} />
        </li>
        <li className="selectcoupon"> 通關獎勵 : &nbsp;
        
        <Select defaultValue="請選擇通關獎勵" style={{ width: 500 }} onChange={handleChange}>
          <Option value="0">在小人國留下紀念</Option>
          <Option value="1">山珍海味全在小人國</Option>
          <Option value="2">歡迎蒞臨小人國</Option>
        </Select>
        </li>
        <span className="addgame"><center><Icon type="plus-circle-o"/>新增</center></span>
        </div>
       );
    }
}