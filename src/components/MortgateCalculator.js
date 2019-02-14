import React, {Component} from 'react'
import { Card, Select, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

{/*const MortgateCalculator = () => (
  <div>
   <form action="">
      <Input placeholder="Стоимость" type="number" defaultValue="2000000"/>
      <Input placeholder="На руках" type="number" defaultValue="200000"/>
      <Input placeholder="Срок кредита" type="number" defaultValue="5"/>
    </form>


  </div>
)*/}


class MortgateCalculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      typeApart: '',
      money: '',
      duration: '',
      price: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const ipoteka = {
      typeApart: this.state.typeApart,
      money: this.state.money,
      duration: this.state.duration,
      price: this.state.price
    }
    //и что то делаем с данными...
  }

  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleChange(value) {
    this.setState({
      typeApart: value
      }
    )
  }

  render() {
    const Option = Select.Option;
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="Калькулятор ипотеки" bordered={false} style={{ width: 300 }}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="Тип квартиры" >
              <Select defaultValue="apartment"  onChange={this.handleChange.bind(this)}>
                <Option value="apartment">Квартира в новостройке</Option>
                <Option value="all_apartment">Готовая квартира</Option>
                <Option value="house">Загородный дом</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Input placeholder="Стоимость" name="price" onChange={this.onChange} addonAfter="руб." />
            </Form.Item>
            <Form.Item>
              <Input placeholder="На руках" name="money" onChange={this.onChange} addonAfter="руб." />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Срок кредита" name="duration" onChange={this.onChange} addonAfter="лет." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>

    );
  }
}


export default MortgateCalculator;
