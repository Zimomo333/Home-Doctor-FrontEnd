import React from 'react'
import ReactDOM from 'react-dom'
import { fetchTextConsults } from '../../api/textConsult'
import { Table } from 'antd'
import formatDate from '../../utils/formatDate'

const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '下单时间',
    dataIndex: 'beginTime',
    key: 'beginTime',
  },
  {
    title: '截止时间',
    dataIndex: 'activeTime',
    key: 'activeTime',
  },
]

export default class MyOrders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
    }
  }

  componentDidMount() {
    fetchTextConsults().then(data => {
      data.result.forEach(item => {
        item.beginTime = formatDate(item.beginTime)
        item.activeTime = formatDate(item.activeTime)
      })
      this.setState({
        dataSource: data.result,
      })
    })
  }

  render() {
    return (
      <div>
        <Table columns={columns} dataSource={this.state.dataSource} />
      </div>
    )
  }
}
