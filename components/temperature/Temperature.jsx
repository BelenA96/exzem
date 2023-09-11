import React from "react";
import './Temperature.css';



class Temperature extends React.Component{
    state ={
        num:19,
        Open: false
    }

    decreaseTemperature = () => {
        this.setState({num: this.state.num - 1})
    }
    increaseTemperature = () =>{
        this.setState({num: this.state.num + 1})
    }

    openModal = () =>{
        this.setState({Open: true});
    }
    closeModal = () =>{
        this.setState({Open: false});
    }

    render(){
        return(
            <div className="app-container">
                                
                <div className="table" style={{backgroundColor: this.state.num > 24 ? 'orange' : 'green'  && this.state.num < 16 ? 'blue' : 'green' }}>
                    <div className="table-temperature">{this.state.num} °C</div>
                </div>

                <div className="table-button">
                    <button onClick={this.increaseTemperature}>Увеличить</button>
                    <button onClick={this.decreaseTemperature}>Уменьшить</button>
                </div>

                <button className="table-button-modal" onClick={this.openModal}>Установить</button>
                
                
                <div  className="modal-case" style={{display: this.state.Open ? 'block': 'none'}}>
                    <div className="modal-case-temp">
                        <p>Температура в {this.state.num} °C успешно установлена</p>
                        <button onClick={this.closeModal}>Закрыть</button>
                    </div>
                </div> 
            

                
            </div>
            
        )
    }
}
                

export default Temperature;