import React from "react"
import { CounterContent } from "./CounterContent"
import { ChangeBtn } from "./Changebtn"



export class Counter extends React.Component {

    state = {
        value: this.props.initialValue
    }

    handleIncreasement = (event) => {
        console.log('increasement ')
        //this.setState({ value: 1 })
        this.setState((prevState) => {
            return {
                value: prevState.value += 1
            }
        })
    }
    handleDecreasement = (e) => {
        console.log('decreasement: ')
        this.setState((prevState) => {
            return {
                value: prevState.value -= 1
            }
        })
    }

    render() {
        return (
            <div className='position-absolute top-50 start-50 translate-middle'>
                <div
                    className='card bg-dark text-white '
                    style={{ width: '600px' }}
                >
                    <div className='card-body'>
                        <h5 className='card-title text-center fs-1'>Counter</h5>
                        <CounterContent value={this.state.value} />
                        <ChangeBtn onIncreasement={this.handleIncreasement}
                        onDecreasement={this.handleDecreasement}/>
                    </div>
                </div>
            </div>

        )
    }
}