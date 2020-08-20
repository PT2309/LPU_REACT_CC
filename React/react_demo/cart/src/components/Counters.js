import React, { Component} from 'react';
import Counter from './Counter';

class Counters extends Component{

    render(){
        const { counters, onIncrement, onDecrement, onDelete, onReset, onRefresh } = this.props;
        return(
            <div>
            <button
                    className='btn btn-primary m-2'
                    onClick={onRefresh}
                    disabled = {counters.length !== 0 ? 'disabled' : ''}
                >
                <i className='fa fa-recycle'></i>
                </button>
                <button
                    className='btn btn-success m-2'
                    onClick={onReset}
                    disabled = {counters.length ? '' : 'disabled'}
                >
                <i className='fa fa-refresh'></i>
                </button>
                { counters.map( counter => {
                    return <Counter 
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                })}
            </div>    
        )
    }
}

export default Counters;