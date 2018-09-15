import {Component} from 'react'
import {SkiDayList} from "./SkiDayList"
import {SkiDayCount} from "./SkiDayCount"
import {AddDayForm} from "./AddDayForm"
import {Menu} from './Menu'

export class App extends Component{
    constructor(props){
        super(props)
        // Functions as getInitialState() method
        this.state = {
            allSkiDays:[
                {
                    resort: "Vail",
                    date: "2018-12-10",
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "Taos",
                    date: "2018-11-20",
                    powder: true,
                    backcountry: true
                },
                {
                    resort: "Whitetail",
                    date: "2018-12-29",
                    powder: true,
                    backcountry: false
                },
            ]
        }
        this.addDay = this.addDay.bind(this)
    }
    // // When app renders for first time, how state is initialized
    // getInitialState(){
    //     return {
    //         allSkiDays:[
    //             {
    //                 resort: "Vail",
    //                 date: new Date("12/10/2018"),
    //                 powder: true,
    //                 backcountry: true
    //             },
    //             {
    //                 resort: "Taos",
    //                 date: new Date("11/20/2018"),
    //                 powder: true,
    //                 backcountry: true
    //             },
    //             {
    //                 resort: "Whitetail",
    //                 date: new Date("12/29/2018"),
    //                 powder: true,
    //                 backcountry: false
    //             },
    //         ]
    //     }
    // }

    addDay(newDay){
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
    }

    countDays(filter){
        const {allSkiDays} = this.state
        return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
    }

    render() {
        return (
            <div className="app">
            <Menu />
            {
            (this.props.location.pathname === "/") ?
                <SkiDayCount total={this.countDays()}
                    powder={this.countDays("powder")}
                    backcountry={this.countDays("backcountry")}/> :
            (this.props.location.pathname === "/add-day") ?
                <AddDayForm onNewDay = {this.addDay} /> :
                <SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>
            }
            </div>
        )
    }
}